const CustomError = require("../errors");
const { isTokenValid } = require("../utils");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }

  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }
};

const authorizePermissions = (req, res, next) => {
  if (req.user.role !== "admin") {
    throw new CustomError.UnAuthorizedError(
      "Unauthorized to access to this route"
    );
  }
  next();
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
