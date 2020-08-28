export function getStore(key) {
  return localStorage.getItem(key)
}
export function setStore(key, val) {
  return localStorage.setItem(key, val)
}
