export type SwipeDirection = 'left' | 'right' | 'up' | 'down' | 'none'

export type SwipeHandlerEvent = TouchEvent | MouseEvent

export interface SwipeListenerEvent {
  sx: number
  sy: number
  ex: number
  ey: number
  dx: number
  dy: number
  absX: number
  absY: number
  direction: SwipeDirection
}

export interface SwipeListener {
  (event: SwipeListenerEvent): void
}

export interface SwipeOptions {
  threshold?: number
}

export interface SwipeHandlers {
  handleStart: (event: SwipeHandlerEvent) => void
  handleMove: (event: SwipeHandlerEvent) => void
  handleEnd: (event?: SwipeHandlerEvent) => void
  handleCancel: () => void
}

type Point = readonly [number, number]

function getPoint(event: SwipeHandlerEvent): Point | null {
  if ('touches' in event) {
    const touch = event.touches[0] || event.changedTouches[0]
    return touch ? [touch.pageX, touch.pageY] : null
  }

  return [event.pageX, event.pageY]
}

function getDirection(dx: number, dy: number): SwipeDirection {
  const absX = Math.abs(dx)
  const absY = Math.abs(dy)

  if (absX === 0 && absY === 0) {
    return 'none'
  }

  if (absX >= absY) {
    return dx >= 0 ? 'right' : 'left'
  }

  return dy >= 0 ? 'down' : 'up'
}

export function createSwipeHandlers(
  listener: SwipeListener,
  options: SwipeOptions = {},
): SwipeHandlers {
  const threshold = Math.max(options.threshold ?? 0, 0)
  let startPoint: Point | null = null
  let endPoint: Point | null = null

  const handleCancel = () => {
    startPoint = null
    endPoint = null
  }

  const handleStart = (event: SwipeHandlerEvent) => {
    const point = getPoint(event)

    if (!point) {
      return
    }

    startPoint = point
    endPoint = point
  }

  const handleMove = (event: SwipeHandlerEvent) => {
    if (!startPoint) {
      return
    }

    const point = getPoint(event)

    if (!point) {
      return
    }

    endPoint = point
  }

  const handleEnd = (event?: SwipeHandlerEvent) => {
    if (!startPoint || !endPoint) {
      return
    }

    if (event) {
      endPoint = getPoint(event) || endPoint
    }

    const [sx, sy] = startPoint
    const [ex, ey] = endPoint
    const dx = ex - sx
    const dy = ey - sy
    const absX = Math.abs(dx)
    const absY = Math.abs(dy)

    handleCancel()

    if (Math.max(absX, absY) < threshold) {
      return
    }

    listener({
      sx,
      sy,
      ex,
      ey,
      dx,
      dy,
      absX,
      absY,
      direction: getDirection(dx, dy),
    })
  }

  return {
    handleStart,
    handleMove,
    handleEnd,
    handleCancel,
  }
}

export const createSwipeHandler = createSwipeHandlers
