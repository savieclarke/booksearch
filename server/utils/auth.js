const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (req, res, next) {
    // allows token to be sent via  req.query or headers
    let token = req?.query?.token || req?.headers?.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req?.headers?.authorization) {
      token = token.split(" ").pop().trim();
    }
    const {
      req: { method, path, body },
    } = req;
    console.log(`${method} ${path}`);
    console.log(body);

    let user;
    // verify token and get user data out of it
    try {
      const { data: user } = jwt.verify(token, secret, { maxAge: expiration });
    } catch {
      user = null;
    }
    return {
      user,
    };
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
