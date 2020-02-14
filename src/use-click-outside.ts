import { RefObject, useEffect } from 'react'

export function useClickOutside(
  refs: ReadonlyArray<RefObject<HTMLElement>>,
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node

      const callHandler = refs.every(ref => ref.current && !ref.current.contains(target))

      callHandler && handler(event)
    }

    document.addEventListener('mousedown', handleClick)

    return () => document.removeEventListener('mousedown', handleClick)
  }, [refs, handler])
}
