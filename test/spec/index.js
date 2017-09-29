const assert = require('assert')
const domaine = require('../../src/')

const domaineTestSuite = {
    'should be a function': () => {
        assert.equal(typeof domaine, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            domaine()
        })
    },
}

module.exports = domaineTestSuite
