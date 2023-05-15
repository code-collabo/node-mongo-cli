const express = require('express');
const {
  getDemoItemsController,
  createDemoItemController,
  getOneDemoItemController,
  deleteDemoItemController,
  updateOneDemoItemPropertyValueController,
  updateDemoItemPropertyValuesController,
} = require('../controllers/demo.controller');

const router = express.Router();

router.get('/', getDemoItemsController);
router.post('/', createDemoItemController);
router.get('/:demoId', getOneDemoItemController);
router.delete('/:demoId', deleteDemoItemController);
router.patch('/:demoId', updateOneDemoItemPropertyValueController);
router.put('/:id', updateDemoItemPropertyValuesController);

module.exports = router;
