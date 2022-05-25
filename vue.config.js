// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

const path = require('path')

function resolve(dir)  {
  return path.join(__dirname,dir)
}
module.exports = {
  lintOnSave:false,
  //方式一:CLI提供的属性
  outputDir: "./build",
  devServer: {
    // proxy: {
    //   '^/api': {
    //     target: 'http: //152.136.185.210:4000',
    //     pathRewrite: {
    //       '^/api': ''
    //     },
    //     changeOrigin: true
    //   }
    // }
  },
  //2: 和webpack属性完全一致,最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  //3:
  chainWebpack: (config) => {
    config.resolve.alias
    // .set('@',path.resolve(__dirname,'src'))
    // .set('components', '@/components')
    .set('@', resolve('src'))
    .set('components', resolve('@/components'))

  }
}
