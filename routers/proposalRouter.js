const express = require("express");

const router = express.Router();

const {
  createApprove,
  createDeposit,
  createWithdraw,
} = require("../controllers/proposalController");

router.route("/approve").post(createApprove);

router.route("/deposit").post(createDeposit);

router.route("/widthdraw").post(createWithdraw);

module.exports = router;
