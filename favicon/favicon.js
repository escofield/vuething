const icongen = require('icon-gen')
 
const options = {
  report: true,
  modes: ['favicon']
}

icongen('./favicon/favicon.svg', './favicon/public', options)
  .then(results => {
    console.log(results)
  })
  .catch(err => {
    console.error(err)
  })
