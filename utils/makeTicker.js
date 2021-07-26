function makeTick(onTick){
  let t = 0
  function tick(correction = 0, prevTimestamp = Date.now()){
    correction = 1000-correction
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
   	}, 1000+correction)
  }
  return tick
}
export default function makeTicker(onTick){
	const tick = makeTick(onTick)
	function ticker(){
		tick(1000)
	}
	return ticker
}
