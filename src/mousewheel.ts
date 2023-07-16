interface MousewheelScrolling {
  (result: { direction: 'down' | 'up'; delta: number }): void
}
interface MousewheelOptions {
  scrollingSpeed?: number
  scrollDelay?: number
}

function getAverage(elements: number[], number: any) {
  let sum = 0

  //taking `number` elements from the end to make the average, if there are not enought, 1
  const lastElements = elements.slice(Math.max(elements.length - number, 1))

  for (let i = 0; i < lastElements.length; i++) {
    sum = sum + lastElements[i]
  }

  return Math.ceil(sum / number)
}

export function mousewheel(
  scrolling: MousewheelScrolling,
  options?: MousewheelOptions,
) {
  const { scrollingSpeed = 700, scrollDelay = 50 } = Object.assign({}, options)
  let scrollings: number[] = []
  let prevTime = Date.now()
  let lastAnimation = 0

  function isMoving() {
    const timeNow = new Date().getTime()
    // Cancel scroll if currently animating or within quiet period
    if (timeNow - lastAnimation < scrollDelay + scrollingSpeed) {
      return true
    }
    return false
  }

  const listener = (e: any) => {
    const curTime = Date.now()
    const delta = e.wheelDelta || -e.deltaY || -e.detail
    // const delta = Math.max(-1, Math.min(1, value))

    const horizontalDetection =
      typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined'
    const isScrollingVertically =
      Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) ||
      Math.abs(e.deltaX) < Math.abs(e.deltaY) ||
      !horizontalDetection

    //Limiting the array to 150 (lets not waste memory!)
    if (scrollings.length > 149) {
      scrollings.shift()
    }

    //keeping record of the previous scrollings
    scrollings.push(Math.abs(delta))

    //time difference between the last scroll and the current one
    const timeDiff = curTime - prevTime
    prevTime = curTime

    //haven't they scrolled in a while?
    //(enough to be consider a different scrolling action to scroll another section)
    if (timeDiff > 200) {
      //emptying the array, we dont care about old scrollings for our averages
      scrollings = []
    }

    if (!isMoving()) {
      const averageEnd = getAverage(scrollings, 10)
      const averageMiddle = getAverage(scrollings, 70)
      const isAccelerating = averageEnd >= averageMiddle

      if (isAccelerating && isScrollingVertically) {
        scrolling({
          direction: delta < 0 ? 'up' : 'down',
          delta,
        })
        lastAnimation = Date.now()
      }

      return false
    }
  }

  return { listener }
}
