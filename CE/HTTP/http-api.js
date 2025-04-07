const http = require('http');
const axios = require('axios');
const PORT = 3000;
const server = http.createServer(async (req, res) => {
    console.log('New request received');
    res.writeHead(200, { 'content-Type': 'text/html'});

    // const response = await fetch("https://dummyjson.com/products")
    // const data =await response.json();

    const response = await axios.get("https://dummyjson.com/products")
    const productsdata = response.data.products;
    let frontdata = `<html><head></head><body>`
    productsdata.forEach((product) => {
        frontdata += `<div><img src="${product.thumbnail}"></div>`
    });
    frontdata +=`</body></html>`

    res.end(frontdata);
    
});
server.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
}); 