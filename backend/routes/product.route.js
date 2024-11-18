const express = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
