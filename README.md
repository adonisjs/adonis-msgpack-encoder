# Message pack encoder

The msgpack encoder for Adonis websockets. This library can be used by browsers and Node.js both.

## Nodejs or webpack
```bash
npm i --save @adonisjs/msgpack-encoder
```

## CDN
```
<script src="https://unpkg.com/@adonisjs/msgpack-encoder"></script>
<script>
  const msgPack = new adonis.MsgPack()
</script>
```

```js
const MsgPack = require('@adonisjs/msgpack-encoder')
const msgPack = new MsgPack()
```

## Usage
The encoder is be used as follows.

```js
const msgPack = new MsgPack()
msgPack.encode({ username: 'virk' }, (error, payload) => {
  // send payload
})

msgPack.decode(encodePayload, (error, packet) => {
  // websocket packet
})
```
