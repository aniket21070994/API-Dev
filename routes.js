import express  from 'express'
import { editController, removeController, sendController,setController } from './controller/dataSend.js';
const routes=express.Router();



//Api get data route

routes.get('/get',sendController); //get data from API

routes.post("/set",setController);// set data from API

routes.post('/edit',editController)//Edit the data in API

routes.delete('/remove',removeController)//remove data from API



export default routes;