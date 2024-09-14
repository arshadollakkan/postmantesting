const express=require('express')
const app=express()



    





app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine','hbs')
let data=[{
    id:1,
    name:"arshad",
    job:"developer"
},
{
    id:2,
    name:"kol",
    job:"developer"
}]
app.get('/',(req,res)=>{
    res.render('index',{data})
    
})

app.get('/home/',(req,res)=>{
    res.render('index',{data})
    
})
app.get('/:id',(req,res)=>{
    let we=parseInt(req.params.id)
    let result=data.filter((item)=>item.id===we)
    if(result.length>0){
        res.send(result)
    }
    else{
        res.send("data not found")
    }
   
})
app.post('/adduser',(req,res)=>{
    let up={
        id:data.length+1,
        name:req.body.name,
        job:req.body.job
    }
    data.push(up)
    res.send(req.body)
})
app.put('/:id',(req,res)=>{
    let ro=data.find /* filter kodukkam*/((item)=>item.id===parseInt(req.params.id))
    if(ro.length==0){
        res.send("data not found")
    }
    else{
        ro.name=req.body.name /*ro[0] changes the ro if using filterin every where*/
        ro.job=req.body.job
        res.send(ro)
    }
})
app.delete('/:id',(req,res)=>{
    let resul=data.find((items)=>items.id===parseInt(req.params.id))
    if(resul.length==0){
        res.send("data not found")
        
    }
    else{
        let op=data.indexOf(resul)
        data.splice(op,1)
        res.send(data)

    }
})
let Port=process.env.PORT||3000

app.listen(Port,()=>{
    console.log(`port ${Port} is running`);
    
})