const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

// Create a User
router.post('/users/create', controllers.createUser);

// Create an ACH-US Node
router.post('/users/nodes/create', controllers.createNode);

// Create a Transaction
router.post('/users/nodes/transactions/create', controllers.createTransaction);

module.exports = router;