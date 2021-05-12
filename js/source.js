// draggable menu
let windowTopBar = document.createElement('div')
windowTopBar.style.width = "100%"
windowTopBar.style.height = "32px"
windowTopBar.style.backgroundColor = "rgba(255,255,255,0)"
windowTopBar.style.position = "absolute"
windowTopBar.style.top = windowTopBar.style.left = 0
windowTopBar.style.webkitAppRegion = "drag"
document.body.appendChild(windowTopBar)