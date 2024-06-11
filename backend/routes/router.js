const express = require("express");
const userRouter = require("./user");
const { accountRouter } = require("./account");

// api/v1/anything
const mainRouter = express.Router();

mainRouter.use("/user", userRouter);

mainRouter.use("/account", accountRouter);

module.exports = mainRouter;
