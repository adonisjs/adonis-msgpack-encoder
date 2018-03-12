'use strict'

/**
 * adonis-msgpack-encoder
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/
// FOR NODE.JS ONLY

const msgpack = require('msgpack-lite')

module.exports = {
  name: 'msgpack',
  /**
   * Encode the payload
   *
   * @method encode
   *
   * @param  {Mixed}    payload
   * @param  {Function} callback
   *
   * @return {void}
   */
  encode (payload, callback) {
    let encoded = null
    try {
      encoded = msgpack.encode(payload)
    } catch (error) {
      return callback(error)
    }
    callback(null, encoded)
  },

  /**
   * Decode payload
   *
   * @method decode
   *
   * @param  {Buffer}   payload
   * @param  {Function} callback
   *
   * @return {void}
   */
  decode (payload, callback) {
    let decoded = null
    try {
      decoded = msgpack.decode(payload)
    } catch (error) {
      return callback(error)
    }
    callback(null, decoded)
  }
}
