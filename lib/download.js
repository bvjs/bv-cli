/**
 * 下载模板
 */
const home = require('user-home')
const download = require('download-git-repo')
const ora = require('ora')
const path = require('path')

// 存放模板地址：/Users/user/.vue-templates/
const templateLocalPath = path.join(home, '.bv-templates')

exports.templateLocalPath = templateLocalPath

exports.download = (template, clone) => {
  const spinner = ora('downloading template...')
  spinner.start()
  // Remove if local template exists
  return new Promise(resolve => {
    download(`bv-templates/${template}`, path.join(templateLocalPath, template), { clone }, err => {
      spinner.stop()
      if (err) logger.error('Failed to download repo ' + template + ': ' + err.message.trim())
      resolve()
    })
  })
}
