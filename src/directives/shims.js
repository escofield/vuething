import Vue from 'vue'

Vue.directive('loading-shim', {
  bind: function(el) {
    el.innerHTML = "<div class='loading-mask'><div class='spinner'></div></div>"
    if (el.className.indexOf('loading') < 0) {
      el.className = (el.className + ' loading').trim()
    }
  },
  inserted: function(el) {
    if (el.parentNode.className.indexOf('loading-container') < 0) {
      el.parentNode.className = (
        el.parentNode.className + ' loading-container'
      ).trim()
    }
  },
})

const GetSomeClass_Icons = function(arg, expression, modifiers) {
  const mody = []
  for (var pn in modifiers) {
    mody.push(pn)
  }
  const retVal = {
    family: arg || expression[0],
    icon: mody[0] || expression[1],
  }
  return retVal
}

Vue.directive('prefix-shim', {
  update: function(el, binding, vnode) {
    const icons = GetSomeClass_Icons(
      binding.arg,
      vnode.context.$data[binding.expression],
      binding.modifiers,
    )
    if (
      el.previousSibling.tagName !== 'I' &&
      el.previousSibling.className.indexOf('prefix') < 0
    ) {
      const i = document.createElement('I')
      i.className = `prefix ${icons.family} ${icons.icon}`
      el.parentNode.insertBefore(i, el)
    }
    if (el.className.indexOf('prefix') < 0) {
      el.className = (el.className + ' prefix').trim()
    }
  },
})

Vue.directive('postfix-shim', {
  update: function(el, binding, vnode) {
    const icons = GetSomeClass_Icons(
      binding.arg,
      vnode.context.$data[binding.expression],
      binding.modifiers,
    )

    if (el.className.indexOf('postfix') < 0) {
      el.className = (el.className + ' postfix').trim()
    }
    if (
      !el.nextSibling ||
      !el.nextSibling.tagName ||
      el.nextSibling.tagName !== 'I' ||
      el.nextSibling.className.indexOf('postfix') < 0
    ) {
      const i = document.createElement('I')
      i.className = `postfix ${icons.family} ${icons.icon}`
      el.parentNode.insertBefore(i, el.nextSibling)
    }
  },
})

Vue.directive('badge-shim', {
  update: function(el, binding, vnode) {
    if (el.className.indexOf('badge') < 0) {
      el.className = (el.className + ' badge').trim()
    }
    el.setAttribute('count', vnode.context.$data[binding.expression])
  },
})

Vue.directive('tip-shim', {
  update: function(el) {
    if (el.className.indexOf('tooltip') < 0) {
      el.className = (el.className + ' tooltip').trim()
    }
  },
})

Vue.directive('toggle-shim', {
  update: function(el) {
    if (el.className.indexOf('toggle') < 0) {
      el.className = (el.className + ' toggle').trim()
    }
  },
})

Vue.directive('chip-shim', {
  update: function(el, binding) {
    if (el.className.indexOf('chip') < 0) {
      el.className = (el.className + ' chip').trim()
    }
    if (binding.modifiers.close && el.querySelectorAll('.close').length == 0) {
      const i = document.createElement('DIV')
      i.className = `close`
      el.appendChild(i)
    }
  },
})

Vue.directive('button-shim', {
  update: function(el, binding, vnode) {
    const btn =
      (binding.modifiers.primary && 'primary') ||
      (binding.modifiers.success && 'success') ||
      (binding.modifiers.info && 'info') ||
      (binding.modifiers.warning && 'warning') ||
      (binding.modifiers.error && 'error') ||
      (binding.modifiers.text && 'text') ||
      (binding.modifiers.default && 'default') ||
      vnode.context.$data[binding.expression]

    if (el.className.indexOf('btn-') < 0) {
      el.className = (el.className + ` btn-${btn}`).trim()
    }
  },
})

Vue.directive('label-shim', {
  update: function(el, binding) {
    if (el.className.indexOf('lbl-') < 0 && binding.modifiers.required) {
      el.className = (el.className + ` required`).trim()
    }
  },
})

Vue.directive('panel-shim', {
  update: function(el) {
    if (el.className.indexOf('panel') < 0) {
      el.className = (el.className + ` panel`).trim()
    }
    if (el.hasAttribute('title')) {
      const h = document.createElement('H1')
      const i = document.createTextNode(el.getAttribute('title'))
      el.removeAttribute('title')
      h.appendChild(i)
      el.insertBefore(h, el.firstChild)
    }
  },
})
