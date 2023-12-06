require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { newsRoutes } = require("./routes/news.routes");
const { feedbackRoutes } = require("./routes/feedback.routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("application is working");
});

app.use("/news", newsRoutes);
app.use("/feedback", feedbackRoutes);

app.listen(PORT, () => {
	console.log("aplikasi udah jalan");
});
