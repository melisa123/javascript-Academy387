var bl= require ('bl');
var http= require('http')
http.get (process.argv[2], (res)=>{
	res.pipe(bl)fucntion(err,data){
		console.log(data.toString().length);
		console.log(data.toString());
		}))
	})

