const getUUID = require('../src/index')
const mocha = require('mocha')
const expect = require('chai').expect
const logText = require('./longText')

describe('UUID Strings', function () {
  it('5b29044ea0ee930833c2fcdb...', function () {
    var str1 = `5b29044ea0ee930833c2fcdb`
    var str2 = `5b29009ea0ee930833c2fbdb`
    var uuid1 = getUUID(str1)
    var uuid2 = getUUID(str2)
    expect(uuid1).to.not.equal(uuid2)
  })
})
