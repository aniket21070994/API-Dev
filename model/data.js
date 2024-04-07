 export const data=[
    { id:1,name:"John",age:30 },
    {id:2,name:"Jane",age:45},
    
]
export const findD=(index)=>
{
    return  data.find(d=> d.id===index);
}

