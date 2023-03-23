const express = require("express");
const router = express();

const {
  getAllProductsStatic,
  getAllProducts,
} = require("../controllers/products");

router.get("/", getAllProducts);
router.get("/static", getAllProductsStatic);

module.exports = router;
