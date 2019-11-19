import { createArrayOfIndexes } from './array'

export const getMaxDurationSteps = (maxDuration: number): number => {
  const steps = (() => {
    switch (true) {
      case maxDuration < 32:
        return maxDuration
      case maxDuration <= 96:
        return 16 - (maxDuration % 16)
      default:
        return 32 - (maxDuration % 32)
    }
  })()

  return Math.max(steps, 8)
}

export const getDurationsGrid = (data: readonly any[] | undefined, maxDuration: number) =>
  data && data.length
    ? createArrayOfIndexes(maxDuration + 1).map(duration => duration / maxDuration)
    : [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

export const getDurations = (maxDuration: number) =>
  createArrayOfIndexes(maxDuration + 1).filter(duration => {
    const step = Math.round(maxDuration / getMaxDurationSteps(maxDuration)) || 1
    return duration === 0 || duration === maxDuration || duration % step === 0
  })
