import assert from 'assert'
import msToSeconds from '../utils/msToSeconds.js'
import makeTicker from '../utils/makeTicker.js'

describe('utils', function(){
	describe('msToSeconds', function(){
		it('should convert milliseconds to the nearest second', function(){
			assert.strictEqual(msToSeconds(1000), 1)
			assert.strictEqual(msToSeconds(1999), 2)
			assert.strictEqual(msToSeconds(1111), 1)
			assert.strictEqual(msToSeconds(1), 0)
			assert.strictEqual(msToSeconds(9876), 10)
		})
	})
	describe('makeTicker', function(){
	  it('should tick once per second over 5s', function(done){
	    this.timeout(6050)
	    const startTicker = makeTicker(1000, t => {
	      console.log('t', t, Date.now())
	      if(t === 5){
	        done()
	        return false
	      }
	      return true
	    })
	    startTicker()
	  })
	  it('should tick 5 times over 2.5s and with option start: true', function(done){
	    this.timeout(3050)
	    makeTicker(500, t => {
	      console.log('t', t, Date.now())
	      if(t === 5){
	        done()
	        return false
	      }
	      return true
	    }, true)
	  })
	})
})
