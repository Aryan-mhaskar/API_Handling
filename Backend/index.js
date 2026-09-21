import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 1499,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 2999,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        },
        {
            id: 3,
            name: "Running Shoes",
            price: 1999,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        },
        {
            id: 4,
            name: "Laptop",
            price: 54999,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        },
        {
            id: 5,
            name: "Backpack",
            price: 999,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
        }
    ];

    const search = req.query.search;
    let filteredProducts = products;
    if (search) {
        filteredProducts = products.filter(product => product.name.includes(search));
        res.send(filteredProducts);
        return;
    }
        setTimeout(() => {
            res.send(filteredProducts);
        }, 3000);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});