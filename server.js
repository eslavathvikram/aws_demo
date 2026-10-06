const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>AWS EC2 Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin-top: 100px;
                        background: #f4f4f4;
                    }

                    h1 {
                        color: #232f3e;
                    }

                    p {
                        font-size: 20px;
                    }

                    .box {
                        background: white;
                        padding: 40px;
                        margin: auto;
                        width: 500px;
                        border-radius: 10px;
                        box-shadow: 0 0 10px #ccc;
                    }
                </style>
            </head>

            <body>
                <div class="box">
                    <h1>🚀 AWS EC2 Demo Application</h1>
                    <p>Hello! My application is running successfully.</p>
                    <p>Deployed using Node.js + Express on AWS EC2.</p>
                </div>
            </body>
        </html>
    `);
});

app.get("/api", (req, res) => {
    res.json({
        message: "AWS EC2 application is working!",
        status: "success"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});