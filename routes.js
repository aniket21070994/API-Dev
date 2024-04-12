import express  from 'express'
// Importing the express library to create the server

const routes = express.Router();
// Creating a new router instance from the express library

// Importing the controller functions for handling API requests
import { editController, removeController, sendController, setController } from './controller/dataSend.js';

// Api get data route
// URL=https://api-rxb0.onrender.com/api
// Providing the index is important while adding, editing data
routes.get('/get', sendController);
// Get data from API

routes.post("/set", setController);
// Set data from API

routes.post('/edit', editController);
// Edit the data in API

routes.delete('/remove', removeController);
// Remove data from API

export default routes;
// Exporting the router instance for use in other modules