exports.createProduct = (req, res, next) => {
  res.send('Create Product');
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: 'Get all products',
    data: [
      {
        id: 1,
        name: 'Product 1',
        price: '$10.00',
      },
      {
        id: 2,
        name: 'Product 2',
        price: '$20.00',
      },
    ],
  });
  next();
};

exports.getProductById = (req, res, next) => {
  res.json({
    message: 'Get product by id',
    data: { [req.params.id]: 'Product 1' },
  });
  next();
};

exports.updateProduct = (req, res, next) => {
  res.send('Update Product');
  next();
};

exports.deleteProduct = (req, res, next) => {
  res.send('Delete Product');
  next();
};
