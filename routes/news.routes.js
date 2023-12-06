const newsRoutes = require("express").Router();
const { prisma } = require("../config/prisma.config");

// get all news and info
newsRoutes.get("/", async (req, res) => {
	// const news = // ambil news dari prisma
	try {
		const news = await prisma.news.findMany();
		res.status(200).send(news);
	} catch (error) {
		console.error("Error:", error);
	}
});

// get only news
newsRoutes.get("/news", async (req, res) => {
	try {
		const news = await prisma.news.findMany({
			where: {
				news_type: 1,
			},
		});
		res.status(200).send(news);
	} catch (error) {
		console.error("Error:", error);
	}
});

// get only info
newsRoutes.get("/info", async (req, res) => {
	try {
		const news = await prisma.news.findMany({
			where: {
				news_type: 2,
			},
		});
		res.status(200).send(news);
	} catch (error) {
		console.error("Error:", error);
	}
});

module.exports = { newsRoutes };
