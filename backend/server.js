const express = require("express");
const app = express();
const productRoutes = require("./routes/product.route.js");
const { connectDB } = require("./config/db.js");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Affiliate Shop Server!");
});
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
