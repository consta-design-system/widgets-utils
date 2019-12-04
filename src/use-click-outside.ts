import { RefObject, useEffect } from 'react'

export function useClickOutside(refs: readonly RefObject<HTMLElement>[], handler: () => void) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node

      const callHandler = refs.every(ref => ref.current && !ref.current.contains(target))

      callHandler && handler()
    }

    document.addEventListener('mousedown', handleClick)

    return () => document.removeEventListener('mousedown', handleClick)
  }, [refs, handler])
}
