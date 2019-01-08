let injector = require('vue-inject')

class {{{className}}} {
  classVariable: String = 'this is my class variable'

  constructor() {
    this.classVariable = 'something new'
  }
}

injector.service('app-config', {{{className}}})
