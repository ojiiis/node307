const http = require("http")

server = http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
//console.log(req.url)
if(req.method == "POST"){
    if(req.url=="/ai"){
/*
       
        */
      //  res.write("Default page")
        //res.end()
    const Rdata = []
   req.on("data",(c)=>{
    Rdata.push(c)
   }); 
   req.on("end",()=>{
var data = Buffer.concat(Rdata).toString();
console.log(data)
fetch("https://open-ai21.p.rapidapi.com/conversationpalm2",{
    method:"POST",
    headers:{
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
        'x-rapidapi-key': 'replace with your api key'
    },
    body:JSON.stringify({"messages":[{"role":"user","content":data}]})
}).then(r=>r.json()).then(r=>{
    console.log("in fetch")
res.setHeader('Content-Type','text/plain')
res.write()
res.end()
})
//res.write(data)
//res.end()
   });  
    }
}else{

if(req.url == "/ai"){
   const page = `
   
   `;
    res.write(page)
    res.end()
}

}




});
server.listen(200)