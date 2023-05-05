const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const puppeteer = require('puppeteer');
const path = require("path");
const app = express();
require("dotenv").config();

// !this is use only when you get CROS error
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	next();
  });

const corsOptions = {
    origin:  'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
};
app.use(cors(corsOptions));


app.use(bodyParser.json());
const pdfTemplate = require("./documents/index.js");
app.use(express.static(path.resolve(__dirname, "client", "build")));

console.log(path.resolve(__dirname, "client", "build"));
// POST route for PDF generation....
// app.post("api/create-pdf", (req, res) => {
// 	console.log(req.body);
// 	pdf.create(pdfTemplate(req.body)).toStream((err, stream) => {
// 		if (err) {
// 		  console.log(err, "Uttam Makwana");
// 		  res.send(Promise.reject());
// 		} else {
// 		  res.setHeader("Content-Type", "application/pdf");
// 		  res.setHeader("Content-Disposition", `attachment; filename=${req.body.firstname}'s Resume.pdf` );
// 		  stream.pipe(res);
// 		}
// 	  });
// });

app.post("/api/create-pdf", async (req, res) => {
	console.log(req.body);
	const browser = await puppeteer.launch({
		args: [
			"--disable-setuid-sandbox",
			"--no-sandbox",
			"--single-process",
			"--no-zygote",
		],
		executablePath:
			process.env.NODE_ENV === "production"
				? process.env.PUPPETEER_EXECUTABLE_PATH
				: puppeteer.executablePath(),

	});
	const page = await browser.newPage();
	await page.setContent(pdfTemplate(req.body));
	const pdfBuffer = await page.pdf({ format: 'A4' });
	res.setHeader("Content-Type", "application/pdf");
	res.setHeader("Content-Disposition", `attachment; filename=${req.body.firstname}'s Resume.pdf`);
	res.send(pdfBuffer);
	await browser.close();
});


app.get("/api", (req, res) => {
	res.send({ msg: "Api working properly" });
})

// allow requests from your frontend domain
app.get("*", (_, res) => {
	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"), (err) => {
		if (err) {res.status(500).send(err); console.log("Errors!!")};
	})
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));

