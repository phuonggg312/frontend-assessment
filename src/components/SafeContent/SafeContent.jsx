import { useMemo } from 'react'
import DOMPurify from 'dompurify'

export function SafeContent({ content }) {
  const sanitized = useMemo(() => DOMPurify.sanitize(content || ''), [content])
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />
}
