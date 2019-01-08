const touch = require('touch')
const walk = require('fs-walk')
const path = require('path')

const updateFiles = function(dir) {
  walk.filesSync(dir, function(basedir, fileName, _stat, _next) {
    console.log(`touching ${basedir} ${fileName}`)
    touch(path.join(basedir, fileName))
  })
}

const walkdirs = function(dir) {
  updateFiles(dir)
  walk.dirsSync(dir, function(basedir, fileName, _stat, _next) {
    console.log(`${basedir} ${fileName}`)
    walkdirs(path.join(basedir, fileName))
  })
}

walkdirs(`${process.env.INIT_CWD}\\src`)
