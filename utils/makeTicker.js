function makeTick(msInterval, onTick){
  let t = 0
  function tick(correction = 0, prevTimestamp = Date.now()){
    correction = msInterval-correction
   	setTimeout(()=>{
      t++
   	  if(onTick(t)){
   		  tick(Date.now()-prevTimestamp, Date.now())
   	  }
   	}, msInterval+correction)
  }
  return tick
}
export default function makeTicker(msInterval = 1000, onTick, start = false){
	const tick = makeTick(msInterval, onTick)
	if(start){
		tick(msInterval)
		return;
	}
	function ticker(){
		tick(msInterval)
	}
	return ticker
}
