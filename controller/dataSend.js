import   { data}  from "../model/data.js";

export const sendController=(req,res)=>
{    
    
    let id=req.params['id'];
    console.log();
    console.log(req.params['id'])
    if(true)
      {     console.log("data get");
            
            
            res.status(200).send(
            { success:true,
              data: data[id]
            }
        )
            
       }
       else{
        res.status(200).send({
            message:"no data found change key "
        })
       }
  

}
export const homeController=(req,res)=>
{   console.log("home page");
    res.status(200).send("<h1>home page</h1>");
}