'use strict'

/**
 * adonis-websocket-encoder
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const test = require('japa')
const msgpack = require('../../index')
const msgpackLite = require('msgpack-lite')

function makePayload (data) {
  return { t: 'news', d: data }
}

function extractPayload (payload) {
  return payload.d
}

test.group('Encoder', () => {
  test('should have a name', function (assert) {
    assert.equal(msgpack.name, 'msgpack')
  })

  test('encode plain string', function (assert, done) {
    msgpack.encode(makePayload('hello world'), (error, payload) => {
      if (error) {
        return done(error)
      }
      assert.equal(extractPayload(msgpackLite.decode(payload)), 'hello world')
      done()
    })
  })

  test('encode object', function (assert, done) {
    msgpack.encode(makePayload({ username: 'virk' }), (error, payload) => {
      if (error) {
        return done(error)
      }
      assert.deepEqual(extractPayload(msgpackLite.decode(payload)), { username: 'virk' })
      done()
    })
  })

  test('encode buffer', function (assert, done) {
    msgpack.encode(makePayload(Buffer.from('hello')), (error, payload) => {
      if (error) {
        return done(error)
      }
      assert.deepEqual(extractPayload(msgpackLite.decode(payload)), Buffer.from('hello'))
      done()
    })
  })

  test('encode array buffer', function (assert, done) {
    msgpack.encode(makePayload(new ArrayBuffer(2)), (error, payload) => {
      if (error) {
        return done(error)
      }
      assert.deepEqual(extractPayload(msgpackLite.decode(payload)), new ArrayBuffer(2))
      done()
    })
  })

  test('decode string', function (assert, done) {
    const encoded = msgpackLite.encode(makePayload('hello world'))

    msgpack.decode(encoded, (error, payload) => {
      if (error) {
        return done(error)
      }
      assert.deepEqual(extractPayload(payload), 'hello world')
      done()
    })
  })

  test('decode buffer', function (assert, done) {
    const encoded = msgpackLite.encode(makePayload(Buffer.from('hello world')))

    msgpack.decode(encoded, (error, payload) => {
      if (error) {
        return done(error)
      }
      assert.deepEqual(extractPayload(payload), Buffer.from('hello world'))
      done()
    })
  })

  test('decode ArrayBuffer', function (assert, done) {
    const encoded = msgpackLite.encode(makePayload(new ArrayBuffer([2])))

    msgpack.decode(encoded, (error, payload) => {
      if (error) {
        return done(error)
      }
      assert.deepEqual(extractPayload(payload), new ArrayBuffer([2]))
      done()
    })
  })

  test('return error when unable to decode value', function (assert, done) {
    msgpack.decode('hello world', (error) => {
      assert.exists(error)
      done()
    })
  })
})
