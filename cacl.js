var h0 = 5        
var v = 0         
var g = 10       
var t = 0         
var dt = 0.01    
var rho = 0.75    
var tau = 0.10     
var hmax = h0      
var h = h0
var hstop = 0.01   
var freefall = 1 
var t_last = -Math.sqrt(2*h0/g) 
var vmax = Math.sqrt(2 * hmax * g)
var H = []
var T = []
while(hmax > hstop){
  if(freefall == 1){
    hnew = h + v*dt - 0.5*g*dt*dt
    if(hnew<0){
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

console.log(H,T)