import express  from 'express'
import { sendController,homeController } from './controller/dataSend.js';
const routes=express.Router();



//Api get data route
routes.get("/api",homeController)
routes.get('/test/:id',sendController);  //This is the test API to check if server is running and working fine.
export default routes;