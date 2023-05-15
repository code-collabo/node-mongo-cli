import {
  getDemoItemsService,
  createDemoItemService,
  getOneDemoItemService,
  deleteDemoItemService,
  updateOneDemoItemPropertyValueService,
  updateDemoItemPropertyValuesService,
} from '../services/demo.service';
import { success, error } from '../../../node-mongo-helpers';

const routeName = 'demo';
const item = `${routeName}-item`;

let response = {};

const getDemoItemsController = async (req, res) => {
  try {
    const docs = await getDemoItemsService();
    response = {
      count: docs.length,
      items: docs.map((doc) => {
        return {
          _id: doc._id,
          name: doc.name,
          age: doc.age,
          request: {
            type: 'GET',
            url: `http://localhost:3000/${routeName}/${doc._id}`,
          },
        };
      }),
    };
    success(`GET request successful!`);
    return res.status(200).json(response);
  } catch (err) {
    error(`Error retriving ${item}s: ${err}`);
    res.status(500).json({
      error: `${err}`,
    });
  }
};

const createDemoItemController = async (req, res) => {
  try {
    const doc = await createDemoItemService(req.body);
    response = {
      message: `${item} created successfully!`,
      newItem: {
        _id: doc._id,
        name: doc.name,
        age: doc.age,
        request: {
          type: 'GET',
          url: `http://localhost:3000/${routeName}/${doc._id}`,
        },
      },
    }
    success(`${item} CREATED successfully!`);
    return res.status(201).json(response);
  } catch (err) {
    error(`Error saving ${item}: ${err}`);
    res.status(500).json({
      error: `${err}`,
    });
  }
};

const getOneDemoItemController = async (req, res) => {
  try {
    const doc = await getOneDemoItemService(req.params.demoId);
    if (doc) {
      response = {
        _id: doc._id,
        name: doc.name,
        age: doc.age,
        request: {
          type: 'GET',
          description: `Url link to all ${item}s`,
          url: `http://localhost:3000/${routeName}/`,
        },
      }
      success(`GET request successful!`);
      return res.status(200).json(response);
    } else {
      error('No record found for provided ID');
      return res.status(404).json({
        message: 'No record found for provided ID',
      });
    }
  } catch (err) {
    error(`Error retriving ${item}: ${err}`);
    res.status(500).json({
      message: 'Invalid ID',
      error: `${err}`,
    });
  }
};

const deleteDemoItemController = async (req, res) => {
  try {
    await deleteDemoItemService(req.params.demoId);
    response = {
      message: `${item} deleted successfully!`,
      request: {
        type: 'POST',
        description: 'Url link to make post request to',
        url: `http://localhost:3000/${item}/`,
        body: {
          name: 'String',
          age: 'Number',
        },
      },
    }
    success(`${item} DELETED successfully!`);
    return res.status(200).json(response);
  } catch (err) {
    error(`Error deleting ${item}: ${err}`);
    res.status(500).json({
      message: `Error deleting ${item}`,
      error: `${err}`,
    });
  }
};

const updateOneDemoItemPropertyValueController = async (req, res) => {
  try {
    const id = req.params.demoId;
    await updateOneDemoItemPropertyValueService(id, req.body);
    response = {
      message: 'Patch request successful!',
      request: {
        type: 'GET',
        description: `Url link to updated ${item}`,
        url: `http://localhost:3000/${routeName}/${id}`,
      },
    };
    success(`PATCH request for ID ${id} successful!`);
    return res.status(200).json(response);
  } catch (err) {
    error(`Error updating ${item} property & value: ${err}`);
    res.status(500).json({
      message: `Error updating ${item} property & value`,
      error: `${err}`,
    });
  }
};

const updateDemoItemPropertyValuesController = async (req, res) => {
  try {
    const id = req.params.id;
    await updateDemoItemPropertyValuesService(id, req.body);
    response = {
      message: `Put request successful!`,
      request: {
        type: 'GET',
        description: `Url link to updated ${item}`,
        url: `http://localhost:3000/${routeName}/${id}`,
      },
    };
    success(`PUT request for ID ${id} successful!`);
    return res.status(200).json(response);
  } catch (err) {
    error(`Error updating ${item}: ${err}`);
    res.status(500).json({
      message: `Error updating ${item}`,
      error: `${err}`,
    });
  }
};

export {
  getDemoItemsController,
  createDemoItemController,
  getOneDemoItemController,
  deleteDemoItemController,
  updateOneDemoItemPropertyValueController,
  updateDemoItemPropertyValuesController,
};
