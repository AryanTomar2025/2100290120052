import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/companies';  

const fetchProducts = async (companyname, categoryname, n, page, minPrice, maxPrice, sort, order) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${companyname}/categories/${categoryname}/products`, {
            params: { top: n, page, minPrice, maxPrice, sort, order }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching products');
    }
};

const fetchProductById = async (companyname, categoryname, productid) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${companyname}/categories/${categoryname}/products/${productid}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching product details');
    }
};

export {
    fetchProducts,
    fetchProductById
};
