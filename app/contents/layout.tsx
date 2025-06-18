import React from 'react'

export default function ContentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='relative flex flex-col h-full'>
      {children}
    </section>
  )
}