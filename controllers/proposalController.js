const express = require("express");
const axios = require("axios");

const {
  coldWalletApprove,
  coldWalletDeposit,
  coldWalletWithdraw,
} = require("../src/index");

const app = express();

exports.createWithdraw = async (req, res, next) => {
  try {
    const dataReq = req.body;

    const data = await coldWalletWithdraw(
      dataReq.erc20Contract,
      dataReq.amount
    );

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail;",
      error,
    });
  }
};

exports.createApprove = async (req, res, next) => {
  try {
    const dataReq = req.body;
    const data = await coldWalletApprove(
      dataReq.erc20Contract,
      dataReq.spender,
      dataReq.amount
    );

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.createDeposit = async (req, res, next) => {
  try {
    const dataReq = req.body;
    const data = await coldWalletDeposit(dataReq.erc20Contract, dataReq.amount);

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
