import assert from 'assert'
import msToSeconds from '../utils/msToSeconds.js'
import makeTicker from '../utils/makeTicker.js'

describe('utils', function(){
	describe('msToSeconds', function(){
		it('should convert milliseconds to the nearest second', function(){
			assert.equal(msToSeconds(1000), 1)
			assert.equal(msToSeconds(1999), 2)
			assert.equal(msToSeconds(1111), 1)
			assert.equal(msToSeconds(1), 0)
			assert.equal(msToSeconds(9876), 10)
		})
	})
	describe('makeTicker', function(){
	  it('should tick once per second over 5s', function(done){
	    this.timeout(6050)
	    const startTicker = makeTicker(t => {
	      console.log('t', t, Date.now())
	      if(t === 5){
	        done()
	        return false
	      }
	      return true
	    })
	    startTicker()
	  })
	})
})
