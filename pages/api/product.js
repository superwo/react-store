import Product from '../../models/Product';

export default (req, res) => {
  const { _id } = req.query;
  Product.findOne({ _id });
};
