const merge = require('webpack-merge')
const chalk = require('chalk')

// 获取环境变量
const env = process.env.ENV
const defaultEnv = require('./default.env')
var active
if (env === undefined) {
  active = defaultEnv.active === undefined ? 'default' : defaultEnv.active
} else {
  active = env
}

process.stdout.write('The active env is ' + chalk.green(active) + '.\n')

// require指定的环境配置文件
const envConfigFile = './' + active + '.env.js'
process.stdout.write('The active env config file is ' + chalk.green(envConfigFile) + '.\n')

const config = merge(defaultEnv, require(envConfigFile))
config.active = active
// console.log(config)
// 将require的配置文件原封不动export回出去
module.exports = config
