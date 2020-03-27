import { RefObject, useEffect } from 'react'

export function useClickOutside({
  requiredRefs,
  optionalRefs = [],
  handler,
}: {
  requiredRefs: ReadonlyArray<RefObject<HTMLElement>>
  optionalRefs?: ReadonlyArray<RefObject<HTMLElement>>
  handler: (event: MouseEvent) => void
}) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node

      const refs: ReadonlyArray<RefObject<HTMLElement>> = [
        ...requiredRefs,
        ...optionalRefs.filter(ref => ref.current),
      ]

      const shouldCallHandler = refs.every(ref => ref.current && !ref.current.contains(target))
      shouldCallHandler && handler(event)
    }

    document.addEventListener('mousedown', handleClick)

    return () => document.removeEventListener('mousedown', handleClick)
  }, [requiredRefs, optionalRefs, handler])
}
