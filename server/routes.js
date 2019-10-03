const express = require('express')
const router = express.Router();

const keys = require('../config/api_keys');

const SynapsePay = require('synapsepay');
const Clients = SynapsePay.Clients;
const Helpers = SynapsePay.Helpers;
const Users = SynapsePay.Users;

const client = new Clients(
  // client id should be stored as an environment variable
  keys.CLIENT_ID,
  // client secret should be stored as an environment variable
  keys.CLIENT_SECRET,
  // is_production boolean determines sandbox or production endpoints used
  false
);

// router.get('/dashboard/:node/trans', controllers.getTrans);

// router.get('/users/verify', controllers.verifyUser);

// Create a User
router.post('/users/create', (req, res) => {
  const createPayload = {
    logins: [
      {
        email: req.body.email,
        // password: req.body.password,
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

// Get All Users
router.get('/users/get-users', (req, res) => {  
  let options = {
    ip_address: Helpers.getUserIP(),
  };
  
  Users.get(
    client,
    options,
    function(err, usersResponse) {
      if (err) {
        res.send(err)
      }
      res.send(usersResponse.users);
    }
  );
});

module.exports = router;