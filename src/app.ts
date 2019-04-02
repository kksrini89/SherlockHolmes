import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

// Load environment variables from .env file, where API keys and passwords are configured
// dotenv.config({ path: ".env.example" });

// Controllers (route handlers)
import * as apiController from './controllers/api';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * API routes.
 */
app.get('/api/transactions', apiController.getTransactions);
app.get('/api/transaction/:id', apiController.searchTransactionById);

export default app;
