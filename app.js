var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	db = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));

app.get('/',(req,res)=>{
		res.sendFile("index.html");
});
app.get('/graph',(req,res)=>{
	db.Coordinate.find()
	.then(function(foundC){
		console.log(foundC[0].coefficient);
		res.sendFile(__dirname+'/views'+'/index1.html',{coord: foundC});
	})
	.catch(function(err){
		res.send(err);
	})
})
app.get("/api/coordinates",(req,res)=>{
	db.Coordinate.find()
	.then(function(coordinates){
		res.json(coordinates);
	})
	.catch(function(err){
		res.send(err);
	})
});

app.post("/api/coordinates",(req,res)=>{
	db.Coordinate.remove();
	var height = req.body.height;
	var coefficient = req.body.coefficient;
			var h0 = height        
			var v = 0         
			var g = 10       
			var t = 0         
			var dt = 0.01    
			var rho = coefficient    
			var tau = 0.10     
			var hmax = h0      
			var h = h0
			var hstop = 0.01   
			var freefall = 1 
			var t_last = -Math.sqrt(2*h0/g) 
			var vmax = Math.sqrt(2 * hmax * g)
			var H = []
			var T = []
			var nbounce = 0
			while(hmax > hstop){
				
			  if(freefall == 1){
			    hnew = h + v*dt - 0.5*g*dt*dt
			    if(hnew<0){
				  nbounce++
			      t = t_last + 2*Math.sqrt(2*hmax/g)
			      freefall = 0
			      t_last = t + tau
			      h = 0}
			    else{
			      t = t + dt
			      v = v - g*dt
			      h = hnew}}
			  else{
			    t = t + tau
			    vmax = vmax * rho
			    v = vmax
			    freefall = 1
			    h = 0}
			  hmax = 0.5*vmax*vmax/g
			  H.push(h)
			  T.push(t)
			}
	db.Coordinate.create({
		coefficient: coefficient,
		height: height,
		x: H,
		t:T,
		bounces:nbounce
	})
	.then(function(newCoordinates){
		res.json(newCoordinates);
	})
	.catch(function(err){
		res.send(err);
	})
	
});


// app.use('/api/coordinates',todoRoutes);

app.listen(3000||process.env.PORT,function(){
	console.log("Server Started");
});