const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
console.log(host);

// We instantiate Nuxt.js with the options
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  new Builder(nuxt).build()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

// Listen the server
app.listen(port, host).then(() => {
    nuxt.showOpen()
})