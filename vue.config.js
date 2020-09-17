// // 该js文件是用来配置路径别名
// module.exports = {
// 	configureWebpack: {
// 		resolve: {
// 			// 配置可省略的后缀名,modules里面自动配置了.js/.vue/.json
// 			extensions: [],
// 			// 配置路径别名
// 			alias: {
// 				'assets': '@assets',
// 				'common': '@common',
// 				'components': '@components',
// 				'network': '@network',
// 				'views': '@views',
// 			}
// 		}
// 	}
// }
// const path = require('path') // 引入path模块
// function resolve(dir) {
//   return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
// }
// module.exports = {
//   chainWebpack: config => {
//     config.resolve.alias
//       .set('@', resolve('./src'))
//       .set('components', resolve('./src/components'))
//       .set('views', resolve('./src/views'))
//       .set('assets', resolve('./src/assets'))
//       .set('common', resolve('./src/common'))
//       .set('network', resolve('./src/network'))
//     // set第一个参数：设置的别名，第二个参数：设置的路径
//   }
// }
