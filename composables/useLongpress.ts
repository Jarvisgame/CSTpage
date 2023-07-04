export function useLongPress() {
  if (process.client) {
    document.removeEventListener('touchstart', touchStart, true)
    document.removeEventListener('touchmove', touchMove, true)
    document.removeEventListener('touchend', touchEnd, true)
    document.addEventListener('touchstart', touchStart, true)
    document.addEventListener('touchmove', touchMove, true)
    document.addEventListener('touchend', touchEnd, true)
  }

  let posX = 0
  let posY = 0

  let touchTimer: any = null
  let touchMoved = false
  let touchPreventAll = false
  let contextEvent: any = null

  function reset() {
    clearTimeout(touchTimer)
    touchTimer = null
  }

  function touchStart(e: TouchEvent) {
    posX = e.touches[0].clientX
    posY = e.touches[0].clientY
    touchMoved = false
    reset()

    touchTimer = setTimeout(() => {
      if (!touchMoved) {
        touchPreventAll = true
        const evt: any = contextEvent = new Event('contextmenu', { bubbles: true })
        evt.x = posX
        evt.y = posY
        evt.isLongPress = true
        e.target?.dispatchEvent(evt)
        e.stopPropagation()
        e.preventDefault()
      }
    }, 500)
  }

  function touchMove(e: TouchEvent) {
    touchMoved = true
    if (contextEvent && contextEvent.onMove) {
      contextEvent.onMove()
    }
    if (touchPreventAll) {
      touchPreventAll = false
      e.preventDefault()
      e.stopPropagation()
    }
  }

  function touchEnd(e: TouchEvent) {
    if (touchPreventAll) {
      touchPreventAll = false
      e.preventDefault()
      e.stopPropagation()
    }
    reset()
  }

  return {}
}
