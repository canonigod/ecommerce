import productsData from '../../../data/products.json'; // Assuming products.json is in the data folder

export default function handler(req, res) {
  const { id } = req.query; // Extract the product ID from the request query parameters

  // Find the product with the matching ID
  const product = productsData.find(product => product.id === id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.status(200).json(product);
}
