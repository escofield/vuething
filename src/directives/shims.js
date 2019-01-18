import Vue from 'vue'
import uuidv4 from 'uuid/v4'

const shims = {}

const Shim = {
  register(name, hooks) {
    shims[name] = hooks
  },
}
export default Shim

Vue.directive('p', {
  bind(e, b, v, o) {
    return shims[b.arg] && shims[b.arg].bind && shims[b.arg].bind(e, b, v, o)
  },
  inserted(e, b, v, o) {
    return (
      shims[b.arg] && shims[b.arg].inserted && shims[b.arg].inserted(e, b, v, o)
    )
  },
  update(e, b, v, o) {
    return (
      shims[b.arg] && shims[b.arg].update && shims[b.arg].update(e, b, v, o)
    )
  },
  componentUpdated(e, b, v, o) {
    return (
      shims[b.arg] &&
      shims[b.arg].componentUpdated &&
      shims[b.arg].componentUpdated(e, b, v, o)
    )
  },
  unbind(e, b, v, o) {
    return (
      shims[b.arg] && shims[b.arg].unbind && shims[b.arg].unbind(e, b, v, o)
    )
  },
})

Shim.register('panel', {
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

Shim.register('loading', {
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

const GetSomeClass_Icons = function(expression, modifiers) {
  const mody = []
  for (var pn in modifiers) {
    mody.push(pn)
  }
  const retVal = {
    family: mody[0] || expression[0],
    icon: mody[1] || expression[1],
  }
  return retVal
}

Shim.register('prefix', {
  update: function(el, binding, vnode) {
    const icons = GetSomeClass_Icons(
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

Shim.register('postfix', {
  update: function(el, binding, vnode) {
    const icons = GetSomeClass_Icons(
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

Shim.register('badge', {
  update: function(el, binding, vnode) {
    if (el.className.indexOf('badge') < 0) {
      el.className = (el.className + ' badge').trim()
    }
    el.setAttribute('count', vnode.context.$data[binding.expression])
  },
})

Shim.register('tip', {
  update: function(el) {
    if (el.className.indexOf('tooltip') < 0) {
      el.className = (el.className + ' tooltip').trim()
    }
  },
})

Shim.register('toggle', {
  update: function(el) {
    if (el.className.indexOf('toggle') < 0) {
      el.className = (el.className + ' toggle').trim()
    }
  },
})

Shim.register('chip', {
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

Shim.register('button', {
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

Shim.register('label', {
  update: function(el, binding) {
    if (el.className.indexOf('lbl-') < 0 && binding.modifiers.required) {
      el.className = (el.className + ` required`).trim()
    }
  },
})

Shim.register('accordian', {
  update: function(el, binding) {
    const id = uuidv4()
    if (
      !el.previousSibling ||
      el.previousSibling.tagName !== 'LABEL' ||
      el.previousSibling.className.indexOf('accordian-title') < 0
    ) {
      const input = document.createElement('input')
      input.setAttribute(
        'type',
        binding.modifiers.single ? 'radio' : 'checkbox',
      )
      input.setAttribute('accordian', '')
      input.name = el.getAttribute('name')
      input.id = id
      el.parentNode.insertBefore(input, el)
      const label = document.createElement('label')
      label.setAttribute('for', id)
      label.className="accordian-title"
      const i = document.createTextNode(el.getAttribute('title'))
      label.appendChild(i)
      el.parentNode.insertBefore(label, el)
      el.setAttribute('accordian', '')
    }
  },
})

