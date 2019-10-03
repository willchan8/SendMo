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

  // res.send(createPayload);

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
router.post('/node/create', (req, res) => {
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
    user,
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
router.post('/transaction/create', (req, res) => {
  // const createPayload = {
  //   to: {
  //     type: req.body.receiverNode.type,
  //     id: req.body.receiverNode._id,
  //   },
  //   amount: {
  //     amount: req.body.amount,
  //     currency: 'USD',
  //   },
  //   extra: {
  //     note: req.body.description,
  //     ip: Helpers.getUserIP(),
  //   },
  // };

  const createPayload = {
    to: {
      type: 'SYNAPSE-US',
      id: '5cb7c9bf5f264e008db08bf9'
    },
    amount: {
      amount: 1.10,
      currency: 'USD'
    },
    extra: {
      supp_id: '1283764wqwsdd34wd13212',
      note: 'Deposit to bank account',
      webhook: 'http://requestb.in/q94kxtq9',
      process_on: 1,
      ip: Helpers.getUserIP()
    },
  };

  Transactions.create(
    // req.body.fromNode,

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

// Get All Users
// router.get('/users/get-users', (req, res) => {  
//   let options = {
//     ip_address: Helpers.getUserIP(),
//   };
  
//   Users.get(
//     client,
//     options,
//     function(err, usersResponse) {
//       if (err) {
//         res.send(err)
//       }
//       res.send(usersResponse.users);
//     }
//   );
// });

module.exports = router;