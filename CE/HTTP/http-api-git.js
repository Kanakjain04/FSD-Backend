const http = require('http');
const axios = require('axios');
const PORT = 3000;

const server = http.createServer(async (req, res) => {
    console.log('New request received');
    res.writeHead(200, { 'Content-Type': 'text/html' });

    try {
        const response = await axios.get('https://api.github.com/users');
        const users = response.data;
        
        let frontdata = `<html><head><title>GitHub Users</title></head><body>`;
        users.forEach((user) => {
            frontdata += `<div>
                            <img src="${user.avatar_url}" width="100" height="100">
                            <p>${user.login}</p>
                          </div>`;
        });
        frontdata += `</body></html>`;

        res.end(frontdata);
    } catch (error) {
        res.end('<h1>Error fetching GitHub users</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
