const express = require('express')
const router = express.Router();

const keys = require('../config/api_keys');

const SynapsePay = require('synapsepay');
const Clients = SynapsePay.Clients;
const Helpers = SynapsePay.Helpers;
const Users = SynapsePay.Users;
const Nodes = SynapsePay.Nodes;
const Transactions = SynapsePay.Transactions;

const client = new Clients(
  // client id should be stored as an environment variable
  keys.CLIENT_ID,
  // client secret should be stored as an environment variable
  keys.CLIENT_SECRET,
  // is_production boolean determines sandbox or production endpoints used
  false
);

// Create a User
router.post('/users/create', (req, res) => {
  const createPayload = {
    logins: [
      {
        email: req.body.email,
        read_only: false,
      },
    ],
    phone_numbers: [req.body.phone_numbers],
    legal_names: [req.body.legal_names],
    extra: {
      note: 'User',
    },
  };

  Users.create(
    client,
    keys.FINGERPRINT,
    Helpers.getUserIP(),
    createPayload,
    (err, userResponse) => {
      if (err) {
        res.send(err)
      }
      res.send(userResponse);
    }
  );
});

// Create an ACH-US Node through Account and Routing Number Details
router.post('/users/nodes/create', (req, res) => {
  const achPayload = {
    type: 'ACH-US',
    info: {
      nickname: req.body.nickname,
      name_on_account: req.body.name,
      account_num: req.body.account_num,
      routing_num: req.body.routing_num,
      type: 'PERSONAL',
      class: 'CHECKING'
    },
  };
  
  Nodes.create(
    req.body.currentUser,
    achPayload,
    (err, nodeResponse) => {
      if (err) {
        res.send(err);
      }
      res.send(nodeResponse);
    }
  );
});


// Create a Transaction
router.post('/users/nodes/transactions/create', (req, res) => {
  const createPayload = {
    to: {
      type: "ACH-US",
      id: req.body.receiverNodeID,
    },
    amount: {
      amount: req.body.amount,
      currency: "USD",
    },
    extra: {
      ip: "127.0.0.1",
      note: "Test transaction.",
    }
  };

  Transactions.create(
    req.body.currentNode,
    createPayload, 
    (err, transResponse) => {
    if (err) {
      res.send(err);
    } 
    res.send(transResponse);
  });
});


// getAllTransaction
router.get('/transaction/all', (req, res) => {
  const node = req.body;
  Transactions.get(node, null, (err, transResponse) => {
    // error or transaction object
    res.send(transResponse)
  });
});

module.exports = router;