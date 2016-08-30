var test = require('tape')

test('First test', function (t) {
  t.equal(1,1, 'Once should really be one!')
  t.end()
})

test('Second test', function (t) {
  t.equal(1, 3, 'Nope fail!')
})
