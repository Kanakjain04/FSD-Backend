const http = require('http');
const axios = require('axios');

const PORT = 3000;
const GITHUB_API_URL = 'https://api.github.com/search/users?q=location:ghaziabad';

const server = http.createServer(async (req, res) => {
    console.log('New request received');
    res.writeHead(200, { 'Content-Type': 'text/html' });

    try {
        const response = await axios.get(GITHUB_API_URL);
        const users = response.data.items; 

        let frontdata = `<html><head><title>GitHub Users from Ghaziabad</title></head><body>`;
        frontdata += `<h1>GitHub Users in Ghaziabad</h1>`;
        users.forEach((user) => {
            frontdata += `<div>
                            <img src="${user.avatar_url}" width="100" height="100">
                            <p><a href="${user.html_url}" target="_blank">${user.login}</a></p>
                          </div>`;
        });
        frontdata += `</body></html>`;

        res.end(frontdata);
    } catch (error) {
        console.error('Error fetching GitHub users:', error);
        res.end('<h1>Error fetching GitHub users from Ghaziabad</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
