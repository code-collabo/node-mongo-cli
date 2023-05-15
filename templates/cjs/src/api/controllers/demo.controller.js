const {
  getDemoItemsService,
  createDemoItemService,
  getOneDemoItemService,
  deleteDemoItemService,
  updateOneDemoItemPropertyValueService,
  updateDemoItemPropertyValuesService,
} = require('../services/demo.service');
const { success, error } = require('../../../node-mongo-helpers');

const routeName = 'demo';
const item = `${routeName}-item`;

let response = {};

const getDemoItemsController = function (req, res) {
  getDemoItemsService()
  .then((docs) => {
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
  })
  .catch((err) => {
    error(`Error retriving ${item}s: ${err}`);
    res.status(500).json({
      error: `${err}`,
    });
  });
};

const createDemoItemController = function (req, res) {
  createDemoItemService(req)
  .then((doc) => {
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
  })
  .catch((err) => {
    error(`Error saving ${item}: ${err}`);
    res.status(500).json({
      error: `${err}`,
    });
  });
};

const getOneDemoItemController = function (req, res) {
  const id = req.params.demoId;
  getOneDemoItemService(id)
  .then((doc) => {
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
  })
  .catch((err) => {
    error(`Error retriving ${item}: ${err}`);
    res.status(500).json({
      message: 'Invalid ID',
      error: `${err}`,
    });
  });
};

const deleteDemoItemController = function (req, res) {
  const id = req.params.demoId;
  deleteDemoItemService(id)
  .then(() => {
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
  })
  .catch((err) => {
    error(`Error deleting ${item}: ${err}`);
    res.status(500).json({
      message: `Error deleting ${item}`,
      error: `${err}`,
    });
  });
};

const updateOneDemoItemPropertyValueController = function (req, res) {
  const id = req.params.demoId;
  updateOneDemoItemPropertyValueService(id, req.body)
  .then(() => {
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
  })
  .catch((err) => {
    error(`Error updating ${item} property & value: ${err}`);
    res.status(500).json({
      message: `Error updating ${item} property & value`,
      error: `${err}`,
    });
  });
};

const updateDemoItemPropertyValuesController = function (req, res) {
  const id = req.params.id;
  updateDemoItemPropertyValuesService(id, req.body)
  .then(() => {
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
  })
  .catch((err) => {
    error(`Error updating ${item}: ${err}`);
    res.status(500).json({
      message: `Error updating ${item}`,
      error: `${err}`,
    });
  });
};

module.exports = {
  getDemoItemsController,
  createDemoItemController,
  getOneDemoItemController,
  deleteDemoItemController,
  updateOneDemoItemPropertyValueController,
  updateDemoItemPropertyValuesController,
};
