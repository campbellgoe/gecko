function makeTick(msInterval, onTick){
  let t = 0
  function tick(correction = 0, prevTimestamp = Date.now()){
    correction = msInterval-correction
    //if(Math.abs(correction) >= 1000){
    //	correction = 0
    //}
    console.log(correction)
   	setTimeout(()=>{
      t++
   	  const continueTicking = onTick(t)
   	  if(continueTicking){
   		tick(Date.now()-prevTimestamp, Date.now())
   	  }
   	}, msInterval+correction)
  }
  return tick
}
export default function makeTicker(msInterval = 1000, onTick){
	const tick = makeTick(msInterval, onTick)
	function ticker(){
		tick(msInterval)
	}
	return ticker
}
