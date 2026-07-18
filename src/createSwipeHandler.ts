export interface CreateSwipeHandlerListenerEvent {
  sx: number
  sy: number
  ex: number
  ey: number
}

export interface CreateSwipeHandlerListener {
  (event: CreateSwipeHandlerListenerEvent): any
}

export function createSwipeHandler(listener: CreateSwipeHandlerListener) {
  let sxy: number[] = []
  let exy: number[] = []

  const start = (e: any) => {
    if (e.touches) {
      const event = e as TouchEvent
      const { pageX, pageY } = event.touches[0]
      sxy = [pageX, pageY]
    } else {
      const { pageX, pageY } = e as MouseEvent
      sxy = [pageX, pageY]
    }
    exy = sxy
  }

  const move = (e: any) => {
    if (!sxy.length) {
      return
    }
    if (e.touches) {
      const event = e as TouchEvent
      const { pageX, pageY } = event.touches[0]
      exy = [pageX, pageY]
    } else {
      const { pageX, pageY } = e as MouseEvent
      exy = [pageX, pageY]
    }
  }

  const end = () => {
    if (!sxy.length) {
      return
    }
    const [sx, sy] = sxy
    const [ex, ey] = exy
    listener({ sx, sy, ex, ey })
    sxy = []
    exy = []
  }

  return [start, move, end] as const
}
