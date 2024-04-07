import   { data}  from "../model/data.js";



//send array data
export const sendController=(req,res)=>
{    
 res.status(200).send({ success:true,data: data});
}

  //set data in data.js
export const setController=(req,res)=>
{    
     console.log("request body", req.body['index']);
     if(req.body['index'])
    {
        data.push(req.body)
        res.status(200).send(
            {    message:"Added  data successfully",
                 index:data.length,
                 data
            }
        );

    }
    else
    {
      res.status(200).send(
      {
        error:'Index is missing',
        message: 'Please provide the index of element you want to update'
       });
    }
   
   
   
   
   

   
   
}
//remove data from data.js
export const removeController=(req,res)=>{
     data.pop();
     res.status(200).send(
    { message:"Remove data successfully",
     data
    }
);
}
//edit data in API
export const editController=(req,res)=>{
    data[req.body['index']]= req.body;
    res.status(200).send(
   { message:"Edite data successfully",
    data
   }
);
}

