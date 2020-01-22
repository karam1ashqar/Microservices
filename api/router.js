const express = require("express");
const router = express.Router();
const controller = require("./controller");
const app = require("express")();

router.route("/connect").get(controller.connect);
router.route("/about").get(controller.about);
// router.route("/distance/:zipcode1/:zipcode2").get(controller.getDistance);

module.exports = router;
