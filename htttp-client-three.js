var bl=require('bl');
var http=require('http');
http.get (process.argv[2],(res)=>{
	res.pipe(bl(function(err,data{
		console.log(data.toString().length);
		console.log(data.toString());

	}))
res.on "end",(err,data)=>{
	http.get(process.argv[3],(res)=>{
		res.pipe(bl.(function(err,data));
			console.log(data.toString());
			console.loh"Drugi"
}))
	res.on "end",(err,data)=>{
	http.get(process.argv[3],(res)=>{
		res.pipe(bl.(function(err,data));
			console.log(data.toString());
			console.log"Treci"
}))