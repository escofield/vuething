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
  inserted: function(el) {
    if (el.className.indexOf('vp-panel') < 0) {
      el.className = (el.className + ` vp-panel`).trim()
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
  inserted: function(el) {
    if (el.className.indexOf('vp-loading') < 0) {
      el.innerHTML = "<div class='vp-loading-mask'><div class='vp-spinner'></div></div>"
      el.className = (el.className + ' vp-loading').trim()
    }
    if (el.parentNode.className.indexOf('vp-loading-container') < 0) {
      el.parentNode.className = (
        el.parentNode.className + ' vp-loading-container'
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
  inserted: function(el, binding, vnode) {
    const icons = GetSomeClass_Icons(
      vnode.context.$data[binding.expression],
      binding.modifiers,
    )
    if (
      el.previousSibling.tagName !== 'I' &&
      el.previousSibling.className.indexOf('vp-prefix') < 0
    ) {
      const i = document.createElement('I')
      i.className = `vp-prefix ${icons.family} ${icons.icon}`
      el.parentNode.insertBefore(i, el)
    }
    if (el.className.indexOf('vp-prefix') < 0) {
      el.className = (el.className + ' vp-prefix').trim()
    }
  },
})

Shim.register('postfix', {
  inserted: function(el, binding, vnode) {
    const icons = GetSomeClass_Icons(
      vnode.context.$data[binding.expression],
      binding.modifiers,
    )

    if (el.className.indexOf('vp-postfix') < 0) {
      el.className = (el.className + ' vp-postfix').trim()
    }
    if (
      !el.nextSibling ||
      !el.nextSibling.tagName ||
      el.nextSibling.tagName !== 'I' ||
      el.nextSibling.className.indexOf('vp-postfix') < 0
    ) {
      const i = document.createElement('I')
      i.className = `vp-postfix ${icons.family} ${icons.icon}`
      el.parentNode.insertBefore(i, el.nextSibling)
    }
  },
})

Shim.register('badge', {
  inserted: function(el, binding, vnode) {
    if (el.className.indexOf('vp-badge') < 0) {
      el.className = (el.className + ' vp-badge').trim()
    }
    el.setAttribute('count', vnode.context.$data[binding.expression])
  },
})

Shim.register('tip', {
  inserted: function(el) {
    if (el.className.indexOf('vp-tooltip') < 0) {
      el.className = (el.className + ' vp-tooltip').trim()
    }
  },
})

Shim.register('toggle', {
  inserted: function(el) {
    if (el.className.indexOf('vp-toggle') < 0) {
      el.className = (el.className + ' vp-toggle').trim()
    }
  },
})

Shim.register('chip', {
  inserted: function(el, binding) {
    if (el.className.indexOf('vp-chip') < 0) {
      el.className = (el.className + ' vp-chip').trim()
    }
    if (binding.modifiers.close && el.querySelectorAll('.vp-close').length == 0) {
      const i = document.createElement('DIV')
      i.className = `vp-close`
      el.appendChild(i)
      i.addEventListener('click', binding.value)
    }
  },
})

Shim.register('button', {
  inserted: function(el, binding, vnode) {
    const btn =
      (binding.modifiers.primary && 'primary') ||
      (binding.modifiers.success && 'success') ||
      (binding.modifiers.info && 'info') ||
      (binding.modifiers.warning && 'warning') ||
      (binding.modifiers.error && 'error') ||
      (binding.modifiers.text && 'text') ||
      (binding.modifiers.default && 'default') ||
      vnode.context.$data[binding.expression]

    if (el.className.indexOf('vp-btn-') < 0) {
      el.className = (el.className + ` vp-btn-${btn}`).trim()
    }
  },
})

Shim.register('label', {
  inserted: function(el, binding) {
    if (el.className.indexOf('vp-lbl-') < 0 && binding.modifiers.required) {
      el.className = (el.className + ` vp-required`).trim()
    }
  },
})

Shim.register('accordian', {
  inserted: function(el, binding) {
    const id = uuidv4()
    if (
      !el.previousSibling ||
      el.previousSibling.tagName !== 'LABEL' ||
      el.previousSibling.className.indexOf('vp-accordian-title') < 0
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
      label.className = 'vp-accordian-title'
      const i = document.createTextNode(el.getAttribute('title'))
      label.appendChild(i)
      el.parentNode.insertBefore(label, el)
      el.setAttribute('accordian', '')
    }
  },
})

Shim.register('modal', {
  bind: function(el, binding, vnode) {
    if (el.className.indexOf('vp-modal') <= 0) {
      el.className = `${el.className} vp-modal`
      if (
        binding.modifiers.close &&
        el.querySelectorAll('.vp-close-modal').length == 0
      ) {
        const i = document.createElement('DIV')
        i.className = `vp-close-modal`
        const section = el.querySelector('section')
        section.appendChild(i)
        i.addEventListener('click', binding.value)
      }
    }
  },
})
