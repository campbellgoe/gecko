# gecko

## utils

Below is some example code

import { utils } from 'gecko'

const { makeTicker, msToSeconds } = utils

const startTicker = makeTicker(1000, onSecondTicked)

function onSecondTicked(nTicks){
	console.log(nTicks, "seconds passed")
	if(nTicks % 60 === 0){
		console.log(nTicks / 60, "minutes passed")
		if(nTicks > 60 * 5){
		    console.log("5 minutes passed, stopping...")
			return false
		}
	}
	// keep ticking
	return true
}

startTicker()
