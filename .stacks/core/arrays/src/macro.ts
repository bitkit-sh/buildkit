import { Macroable } from 'macroable'
import type { Arrayable, Nullable } from '@stacksjs/types'
import type { PartitionFilter } from './helpers'
import { at, clampArrayRange, flatten, last, mergeArrayable, move, partition, range, remove, sample, shuffle, toArray, uniq, uniqueBy } from './helpers'
import { contains, containsAll, containsAny, containsNone, containsOnly, doesNotContain } from './contains'
import { average, median, mode, sum } from './math'

export class Arr extends Macroable {
  contains(needle: string, haystack: string[]) {
    return contains(needle, haystack)
  }

  containsAll(needles: string[], haystack: string[]) {
    return containsAll(needles, haystack)
  }

  containsAny(needles: string[], haystack: string[]) {
    return containsAny(needles, haystack)
  }

  containsNone(needles: string[], haystack: string[]) {
    return containsNone(needles, haystack)
  }

  containsOnly(needles: string[], haystack: string[]) {
    return containsOnly(needles, haystack)
  }

  doesNotContain(needle: string, haystack: string[]) {
    return doesNotContain(needle, haystack)
  }

  toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
    return toArray(array)
  }

  flatten<T>(array?: Nullable<Arrayable<T | Array<T>>>): Array<T> {
    return flatten(array)
  }

  mergeArrayable<T>(...args: Nullable<Arrayable<T>>[]): Array<T> {
    return mergeArrayable(...args)
  }

  partition<T>(array: readonly T[], filter: PartitionFilter<T>): [T[], T[]] {
    return partition(array, filter)
  }

  /**
   * Returns a random item/s from the array
   */
  random<T>(arr: T[], count = 1): T[] {
    return sample(arr, count)
  }

  /**
   * Returns random item/s from the array
   */
  sample<T>(arr: T[], count = 1): T[] {
    return sample(arr, count)
  }

  unique<T>(arr: T[]): T[] {
    return uniq(arr)
  }

  uniqueBy<T>(arr: readonly T[], equalFn: (a: any, b: any) => boolean): T[] {
    return uniqueBy(arr, equalFn)
  }

  last<T>(arr: T[]): T | undefined {
    return last(arr)
  }

  remove<T>(arr: T[], value: T) {
    return remove(arr, value)
  }

  at(arr: any[], index: number): any {
    return at(arr, index)
  }

  range(start: number, end: number, step = 1): number[] {
    return range(start, end, step)
  }

  move<T>(arr: T[], from: number, to: number): T[] {
    return move(arr, from, to)
  }

  clampArrayRange(arr: readonly unknown[], n: number) {
    return clampArrayRange(arr, n)
  }

  shuffle<T>(arr: T[]): T[] {
    return shuffle(arr)
  }

  /**
   * Returns the sum of all items in the array
   */
  sum(arr: number[]): number {
    return sum(arr)
  }

  /**
   * Returns the average of all items in the array
   */
  average(arr: number[]): number {
    return average(arr)
  }

  avg(arr: number[]): number {
    return average(arr)
  }

  /**
   * Returns the median of all items in the array
   */
  median(arr: number[]): number {
    return median(arr)
  }

  /**
   * Returns the mode of all items in the array
   */
  mode(arr: number[]): number {
    return mode(arr)
  }

  static macros = {}
  static getters = {}
}

export const arr = new Arr()