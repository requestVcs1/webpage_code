const remUnit = 100
function handlerRem() {
  let windowWidth = window.innerWidth
  let num = (windowWidth / 375) * remUnit
  document.querySelector('html').style.fontSize = num + 'px'
}
//初始化
handlerRem()
window.addEventListener('resize', handlerRem)
