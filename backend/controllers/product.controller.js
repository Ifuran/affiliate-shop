const Product = require("../models/product.model");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error(`Error in fetching products: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid product id",
    });
  }

  try {
    const product = await Product.findById(id);
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error(`Error in fetching product: ${error.message}`);
    res.status(400).json({
      success: false,
      message: "Server Error",
    });
  }
};

const createProduct = async (req, res) => {
  const product = req.body;

  if (
    !product.title ||
    !product.image_url ||
    !product.price ||
    !product.product_url ||
    !product.description
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(200).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error(`Error in creating product: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.isValidObjectId(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid product id",
    });
  }

  if (
    !product.title ||
    !product.image_url ||
    !product.price ||
    !product.product_url ||
    !product.description
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }

  try {
    await Product.findByIdAndUpdate(id, product);
    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error(`Error in updating product: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid product id",
    });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(`Error in deleting product: ${error.message}`);
    res.status(500).json({
      success: true,
      message: "Server Error",
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
