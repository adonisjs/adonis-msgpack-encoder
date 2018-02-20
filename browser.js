'use strict';

/**
 * adonis-msgpack-encoder
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var msgpackLite = require('msgpack-lite');

var MsgPack = function () {
  function MsgPack() {
    _classCallCheck(this, MsgPack);
  }

  _createClass(MsgPack, [{
    key: 'encode',


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
    value: function encode(payload, callback) {
      try {
        msgpackLite.Encoder().on('data', function (data) {
          callback(null, data);
        }).encode(payload);
      } catch (error) {
        /* istanbul ignore next */
        callback(error);
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

  }, {
    key: 'decode',
    value: function decode(payload, callback) {
      try {
        msgpackLite.Decoder().on('data', function (data) {
          callback(null, data);
        }).decode(payload);
      } catch (error) {
        callback(error);
      }
    }
  }], [{
    key: 'name',

    /**
     * Encoder name. Used to communicate with the
     * client
     *
     * @method name
     *
     * @return {String}
     */
    get: function get() {
      return 'msgpack';
    }
  }]);

  return MsgPack;
}();

module.exports = MsgPack;
