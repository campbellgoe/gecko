import assert from 'assert'
import msToSeconds from '../utils/msToSeconds.js'

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
})
