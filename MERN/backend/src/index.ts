import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));