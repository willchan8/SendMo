const SynapsePay = require('synapsepay');
const Clients = SynapsePay.Clients;
const Helpers = SynapsePay.Helpers;
const Users = SynapsePay.Users;
const Nodes = SynapsePay.Nodes;
const Transactions = SynapsePay.Transactions;

const keys = require('../../config/api_keys');

const client = new Clients(
  keys.CLIENT_ID,
  keys.CLIENT_SECRET,
  false
);

// Create a User
exports.createUser = (req, res) => {
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
};

// Create an ACH-US Node through Account and Routing Number Details
exports.createNode = (req, res) => {
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
};


// Create a Transaction
exports.createTransaction = (req, res) => {
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
      note: req.body.note,
    },
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
};