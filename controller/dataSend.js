import   { data}  from "../model/data.js";

export const sendController=(req,res)=>
{    
    res.status(200).send({ success:true,data: data});
            
  

}
export const homeController=(req,res)=>
{   console.log("home page");
    res.status(200).send("<h1>home page</h1>");
}