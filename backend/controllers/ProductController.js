const Product = require("../models/Product");

// @وصف: جلب كل المنتجات
// @طريقة الطلب: GET /api/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // جلب كل المنتجات من قاعدة البيانات
    res.json(products); // إعادة النتائج
  } catch (error) {
    res.status(500).json({ message: error.message }); // في حال حدوث خطأ
  }
};

// @وصف: جلب منتج واحد بواسطة الـ ID
// @طريقة الطلب: GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // البحث عن المنتج بالـ ID
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "المنتج غير موجود" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @وصف: إنشاء منتج جديد
// @طريقة الطلب: POST /api/products
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body); // إنشاء المنتج من البيانات المرسلة
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @وصف: تعديل منتج بواسطة الـ ID
// @طريقة الطلب: PUT /api/products/:id
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,           // إرجاع المنتج بعد التعديل
        runValidators: true, // تطبيق Validation على البيانات
      }
    );

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "المنتج غير موجود" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @وصف: حذف منتج بواسطة الـ ID
// @طريقة الطلب: DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) {
      res.json({ message: "تم حذف المنتج بنجاح" });
    } else {
      res.status(404).json({ message: "المنتج غير موجود" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};