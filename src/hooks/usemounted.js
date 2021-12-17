import React, { useRef } from 'react'
import { useEffect } from 'react'
export default function useMounted() {
    const mounted = useRef(false)
    useEffect(() => {
        mounted.current = true
        return () => {
            mounted.current=false
        }
    }, [])
    return mounted
}
