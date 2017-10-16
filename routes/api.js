const express = require("express");
const router = express.Router();
const multer = require("multer");
path = require("path");
const Users = require("../models/Users.js");
const jwt = require("express-jwt");
const jwtAuthz = require("express-jwt-authz");
const jwksRsa = require("jwks-rsa");

//Setting environment variable so it does not call dotenv in production
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

<<<<<<< HEAD
//making sure the .env file with the Auth0 config is present
if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw "Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file";
}

=======
if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw "Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file";
}
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
//Creating middleware for checking the JSON Web Token
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://" + process.env.AUTH0_DOMAIN + "/.well-known/jwks.json"
  }),

  //validate the audience and the issuer
  audience: process.env.AUTH0_AUDIENCE,
  issuer: "https://" + process.env.AUTH0_DOMAIN + "/",
  algorithms: ["RS256"]
});

<<<<<<< HEAD
//Configuring backend routes for to get and post user profile data
=======
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
router.get("/users/profile", checkJwt, jwtAuthz(["read:profile"]), function(
  req,
  res
) {
  const query = { sub: req.user.sub };
  Users.findOne(query)
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post(
  "/users/profile",
  checkJwt,
  jwtAuthz(["write:profile", "update:profile"]),
  function(req, res) {
    req.body.sub = req.user.sub;
    const query = { sub: req.user.sub };
    const options = { upsert: true };
    Users.findOneAndUpdate(query, req.body, options, function(err, doc) {
      if (err) return res.json({ error: { message: err.message } });
      res.json(doc);
    });
  }
);

<<<<<<< HEAD
//post route for file uploads using multer
=======
>>>>>>> d9d33187c5b9b9eb440a6b53d2d65e3f97a0e9ba
router.post("/", multer({ dest: "./uploads/" }).single("upl"), function(
  req,
  res
) {
  console.log(req.body);
  console.log(req.file);
  res.status(204).end();
});

module.exports = router;
