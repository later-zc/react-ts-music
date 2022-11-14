const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
