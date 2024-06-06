
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";
import { connectDb } from "./connectDb";

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

connectDb();

// Swagger API documentation
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Sample data - Replace with your database integration
let tweets: { id: number; text: string }[] = [
    { id: 1, text: "First tweet" },
    { id: 2, text: "Second tweet" },
    // Add more tweets as needed
];

// GET /tweets - Retrieve a list of tweets
app.get(["/", "/tweets"], (req: Request, res: Response) => {
    res.json(tweets);
});

// GET /tweets/:id - Retrieve a specific tweet by its ID
app.get("/tweets/:id", (req: Request, res: Response) => {
    const tweetId = parseInt(req.params.id);
    const tweet = tweets.find((tweet) => tweet.id === tweetId);
    if (tweet) {
        res.json(tweet);
    } else {
        res.status(404).json({ error: "Tweet not found" });
    }
});

// POST /tweets - Create a new tweet
app.post("/tweets", (req: Request, res: Response) => {
    const { text } = req.body;
    if (!text) {
        res.status(400).json({ error: "Text is required" });
    } else {
        const newTweet = { id: tweets.length + 1, text };
        tweets.push(newTweet);
        res.status(201).json(newTweet);
    }
});

// PUT /tweets/:id - Update an existing tweet
app.put("/tweets/:id", (req: Request, res: Response) => {
    const tweetId = parseInt(req.params.id);
    const { text } = req.body;
    const tweetIndex = tweets.findIndex((tweet) => tweet.id === tweetId);
    if (tweetIndex !== -1) {
        if (!text) {
            res.status(400).json({ error: "Text is required" });
        } else {
            tweets[tweetIndex].text = text;
            res.json(tweets[tweetIndex]);
        }
    } else {
        res.status(404).json({ error: "Tweet not found" });
    }
});

// DELETE /tweets/:id - Delete a tweet
app.delete("/tweets/:id", (req: Request, res: Response) => {
    const tweetId = parseInt(req.params.id);
    const tweetIndex = tweets.findIndex((tweet) => tweet.id === tweetId);
    if (tweetIndex !== -1) {
        tweets.splice(tweetIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).json({ error: "Tweet not found" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});
