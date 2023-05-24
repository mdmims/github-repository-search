import React from 'react'

/**
 * Updates document title based on current route
 */
export function useDocumentTitle(title: string): void {
  React.useEffect(() => {
    const originalTitle = document.title
    document.title = title

    return () => {
      document.title = originalTitle
    }

  }, [title])
}