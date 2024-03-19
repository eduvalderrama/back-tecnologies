const http = require('http')
const url = require('url');

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text-plain')

    const parsedUrl = url.parse(req.url, true);
    const filter = parsedUrl.query.filter || null

    const products = [
        {
            "name": "Samsung Galaxy",
            "category": "electronics"
        }, {
            "name": "Motorola V3",
            "category": "electronics"
        }, {
            "name": "Iphone 12",
            "category": "electronics"
        }, {
            "name": "Skippy",
            "category": "grocery store"
        }
    ];

    const filteredProducts = filter ? products.filter((product) => product.category == filter).slice(0, 2) : products

    res.end(JSON.stringify({ product: filteredProducts }));
})

server.listen(3000, () => {
    console.log(`Server running at https://127.0.0.1:3000/`)
})