'use strict'

/**
 * adonis-msgpack-encoder
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/
// FOR BROWSERS ONLY

import { isBlob, parseBlob } from 'simple-message-reader'
import msgpack from './index.js'

export default {
  name: 'msgpack',
  encode: msgpack.encode,
  decode (payload, callback) {
    /**
     * When payload is a blob, then parse the blob
     * and then decode the array buffer
     */
    if (isBlob(payload)) {
      parseBlob(payload, function (error, arrayBuffer) {
        if (error) {
          return callback(error)
        }
        msgpack.decode(new Uint8Array(arrayBuffer), callback)
      })
      return
    }

    msgpack.decode(payload, callback)
  }
}
