# v1-whatsapp-api-client for javascript

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/green-api/v1-whatsapp-api-client/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/green-api/v1-whatsapp-api-client.svg)](https://github.com/green-api/v1-whatsapp-api-client/releases)
[![npm version](https://badge.fury.io/js/%40green-api%2Fv1-whatsapp-api-client.svg)](https://www.npmjs.com/package/@green-api/v1-whatsapp-api-client)

## Introduction

The library is a wrapper for WhatsApp API V1 protocol provided by service [green-api.com](https://green-api.com). Unlike [whatsapp-api-client](https://github.com/green-api/whatsapp-api-client) the library implements protocol similar to WhatsApp Business API and does not require to keep a phone pluged with active connection to Internet. You only need a phone number. To use this you have to visit [green-api.com](https://green-api.com) and get an account. 

## Installation

```
npm i @green-api/v1-whatsapp-api-client
```

## Getting started  

### 1. Get green api account

To use the WhatsApp Bot API, you first have to visit [green-api.com](https://green-api.com) and get free developer account. Green Api will give you token  something like 
```
TOKEN: gr.abcdefgijklmn.....
```

### 2. Add import

You can import library using modern ES6 syntax (you have to add ``"type":"module"`` to ``package.json``):
```
import WhatsAppApi from '@green-api/v1-whatsapp-api-client'
```
or using classic syntax:
```
const WhatsAppApi = require('@green-api/v1-whatsapp-api-client')
```
### 3. Initiliaze new WhatsApp Bot with aquired account data
```
const bot = new WhatsAppApi(YOUR_TOKEN)
```

### 3. Start coding

Try to write simple app that sends some hello world text message, for example:

```js
import WhatsAppApi from '@green-api/v1-whatsapp-api-client'

(async () => {
    const api = new WhatsAppApi(process.env.TOKEN || '')
    const response = await api.messages.sendTextMessage(process.env.PHONE_NUMBER || '', 'hello world')
    console.log(response.messages[0].id)
})();
```

More examples [here...](examples/).

## Preparing development environment

Notice project is using tsdx bootstrap

1. Clone repository
2. install tsdx globally
3. Run npm install command

After that you can run tests with command ``npm run test``

## Publish new library version to npm
```
npm login
npm publish --access public
```

## License

Licensed on MIT terms. For additional info have look at [LICENSE](LICENSE)

## Third-party libraries

* [axios](https://github.com/axios/axios) -  sending web requests