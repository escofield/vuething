const generator = require('webfonts-generator')
var mustache = require('mustache')
var fs = require('fs')
var path = require('path')

const iconDir = `${process.env.INIT_CWD}\\icons\\`
var files = fs.readdirSync(iconDir).filter(file => file.toLowerCase().endsWith('svg')).map(f => `${process.env.INIT_CWD}\\icons\\${f}`)

var jsFileTemplate = `export default {
  fonts: [
    {{#fonts}}
    '{{.}}',
    {{/fonts}}
  ],
}
`
var fontNames = files.map(x => path.parse(x).name)
var jsFile = mustache.render(jsFileTemplate, { fonts: fontNames })
fs.writeFileSync('./src/theme/icons.js', jsFile)

files.forEach(f => console.log(f))

generator({
    files: files,
    dest: './src/theme/fonts',
    fontName: 'icons',
    cssDest: './src/theme/icons.css',
    cssFontsUrl: './fonts/',
    types: ['woff2'],
    fixedWidth: true,
    formatOptions: {
      svg: {
        normalize: true,
        fixedWidth: true,
        round: true,
      },
    },
  }, function(error) {
    if (error) {
      console.log('Fail', error)
    } else {
      console.log('Done!')
    }
  },
)

