const express = require("express");
const router = express();

const {
  createProduct,
  getAllProducts,
} = require("../controllers/productController");
const {
  uploadProductImageLocal,
  uploadProductImageCloudinary,
} = require("../controllers/uploadsController");

router.get("/", getAllProducts);
router.post("/", createProduct);
router.post("/uploads", uploadProductImageCloudinary);

module.exports = router;
