import { fetchProducts, fetchProductById } from '../services/productService.js';

export const getProducts = async (req, res) => {
    const { categoryname } = req.params;
    const { n = 10, page = 1, sort, order = 'asc' } = req.query;
    if (n > 10) {
        return res.status(400).json({ error: "n cannot exceed 10" });
    }

    try {
        const products = await fetchProducts(categoryname, n, page, sort, order);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductById = async (req, res) => {
    const { categoryname, productid } = req.params;

    try {
        const product = await fetchProductById(categoryname, productid);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
