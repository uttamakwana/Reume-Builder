const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");
const path = require("path");
const app = express();

// *this is use only when you get CROS error
// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	next();
//   });

// const corsOptions = {
//     origin:  'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// };
// app.use(cors(corsOptions));


app.use(bodyParser.json());
const pdfTemplate = require("./documents/index.js");
app.use(express.static(path.join(__dirname , "./client/build")));

// POST route for PDF generation....
app.post("/api/create-pdf", (req, res) => {
	console.log(req.body);

	pdf.create(pdfTemplate(req.body)).toStream((err, stream) => {
		if (err) {
		  console.log(err);
		  res.send(Promise.reject());
		} else {
		  res.setHeader("Content-Type", "application/pdf");
		  res.setHeader("Content-Disposition", `attachment; filename=${req.body.firstname}'s Resume.pdf` );
		  stream.pipe(res);
		}
	  });
});


app.get("/api" , (req,res)=>{
	res.send({msg:"Api working properly"});
})

// allow requests from your frontend domain
app.get("*" , (_ , res)=>{
	res.sendFile(path.join(__dirname , "./client/build/index.html") , (err)=>{
		if(err) res.status(500).send(err);
	})
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));
