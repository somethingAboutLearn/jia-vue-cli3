// localStorage key is Vuex store state
const music = 'currentMusicItem'

function setValue({ key, value }) {
  value = JSON.stringify(value)
  window.localStorage.setItem(key, value)
}

function getValue(key) {
  key =
    (JSON.parse(window.localStorage.getItem(key))
      ? JSON.parse(window.localStorage.getItem(key))
      : window.localStorage.getItem(key)) || null
  return key
}

function remove(key) {
  window.localStorage.removeItem(key)
}

export { setValue, getValue, remove, music }
