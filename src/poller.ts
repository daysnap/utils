/**
 * 说明
 */

import { sleep } from './sleep'

export type PollerTask = (poller: Poller) => void | Promise<void>

export interface PollerOptions {
  delay: number
}

export class Poller {
  private count = 0
  private task: PollerTask
  private options: PollerOptions
  private currentCount = -1

  get isRunning() {
    return this.count === this.currentCount
  }

  constructor(task: PollerTask, options: Partial<PollerOptions> = {}) {
    this.task = task
    this.options = Object.assign({ delay: 1000 }, options)
  }

  private async run(count: number) {
    this.currentCount = count
    while (this.count === count) {
      try {
        await this.task(this)
      } catch {
        //
      } finally {
        await sleep(this.options.delay)
      }
    }
  }

  stop() {
    this.count++
    return this
  }

  start(forceUpdate = true) {
    if (forceUpdate || !this.isRunning) {
      this.run(++this.count)
    }
    return this
  }
}
