const express = require("express");
const { prisma } = require("../config/prisma.config");
const feedbackRoutes = express.Router();

feedbackRoutes.get("/", async (req, res) => {
	try {
		const feedbacks = await prisma.feedback.findMany();
		res.status(200).json(feedbacks);
	} catch (error) {
		console.error(error);
	}
});

feedbackRoutes.post("/", async (req, res) => {
	try {
		const { name, country, subject, rating } = req.body;
		const newFeedback = await prisma.feedback.create({
			data: {
				name: name,
				country: country,
				subject: subject,
				rating: parseInt(rating),
			},
		});
		res.status(201).send({
			message: "feedback is created",
			data: newFeedback,
		});
	} catch (error) {
		console.error(error);
	}
});

module.exports = { feedbackRoutes };
