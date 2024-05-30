import express from "express";
import serverless from "serverless-http";
import path from "path";

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

// Define routes to serve HTML pages
app.get("/.netlify/functions/api", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/.netlify/functions/api/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/about.html"));
});

app.get("/.netlify/functions/api/services", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/services.html"));
});

const handler = serverless(app);

module.exports.handler = async (event, context) => {
    const result = await handler(event, context);
    return result;
};