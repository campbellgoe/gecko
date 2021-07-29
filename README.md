# geko-lib

`import geko from 'geko-lib'`

## utils

See below for an example custom react hook using these utilities

```javascript
import geko from 'geko-lib'
import { useState, useEffect } from 'react';

function getEndDateInSeconds(endDate){
  const { msToSeconds } = geko.utils
  return msToSeconds((new Date(endDate)).getTime()-Date.now())
}

export default function useCountdown(endDate) {	
  const [secondsRemaining, setSecondsRemaining] = useState(getEndDateInSeconds(endDate));
  const [countdownEnded, setCountdownEnded] = useState(false)
  useEffect(() => {
    const { makeTicker } = geko.utils
    const endDateInSeconds = getEndDateInSeconds(endDate)
    const startTicker = makeTicker(1000, tick => {
      if(tick <= endDateInSeconds){
        setSecondsRemaining(secondsRemaining => secondsRemaining - 1)
        return true
      }
      setCountdownEnded(true)
      return false
    })
    startTicker()
  }, [])
	return [secondsRemaining, countdownEnded]
}
```

# tests

After cloning the repository you can run mocha tests with `npm run test`