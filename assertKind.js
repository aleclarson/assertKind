
function assertKind(value, type, key) {
  if (value == null || !(value.constructor === type || value instanceof type)) {
    throw TypeError((key ? '`' + key + '` must be' : 'Expected') + ' a kind of ' + type.name)
  }
}

module.exports = assertKind

