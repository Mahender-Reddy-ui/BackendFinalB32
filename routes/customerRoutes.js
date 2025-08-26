const express = require("express");

const { getCustomers, addCustomer, updateCustomer, deleteCustomer } = require("../controllers/customerController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getCustomers);
router.post("/", authMiddleware, addCustomer);
router.put("/:id", authMiddleware, updateCustomer);
router.delete("/:id", authMiddleware, deleteCustomer);

module.exports = router;

