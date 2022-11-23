const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
      //     options: {
      //       lessLoaderOptions: {
      //         lessOptions: {
      //           // modifyVars: { '@primary-color': '#1DA57A' },
      //           javascriptEnabled: true
      //         }
      //       }
      //     }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
