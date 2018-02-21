'use strict'

/**
 * adonis-msgpack-encoder
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const { Encoder } = require('msgpack-lite/lib/encoder')
const { Decoder } = require('msgpack-lite/lib/decoder')

class MsgPack {
  /**
   * Encoder name. Used to communicate with the
   * client
   *
   * @method name
   *
   * @return {String}
   */
  static get name () {
    return 'msgpack'
  }

  /**
   * Encodes a value asynchronously.
   *
   * @method encode
   *
   * @param  {Mixed}   payload
   * @param  {Function} callback
   *
   * @return {Buffer}
   */
  encode (payload, callback) {
    try {
      Encoder().on('data', function (data) {
        callback(null, data)
      }).encode(payload)
    } catch (error) {
      /* istanbul ignore next */
      callback(error)
    }
  }

  /**
   * Decodes a previously encoded value.
   *
   * @method decode
   *
   * @param  {Buffer}   payload
   * @param  {Function} callback
   *
   * @return {Mixed}
   */
  decode (payload, callback) {
    try {
      Decoder()
        .on('data', function (data) {
          callback(null, data)
        })
        .decode(payload)
    } catch (error) {
      callback(error)
    }
  }
}

module.exports = MsgPack
