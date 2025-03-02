import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function RefreshPersistence() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Only save non-root paths
    if (location.pathname !== '/') {
      localStorage.setItem('lastVisitedPath', location.pathname)
    }
  }, [location.pathname])

  useEffect(() => {
    const savedPath = localStorage.getItem('lastVisitedPath')
    const currentPath = window.location.pathname
    
    // Only navigate if:
    // 1. We have a saved path
    // 2. Current path is root (meaning we got redirected)
    // 3. Saved path is different from current
    if (savedPath && currentPath === '/' && savedPath !== currentPath) {
      navigate(savedPath)
    }
  }, [navigate])

  return null
}
