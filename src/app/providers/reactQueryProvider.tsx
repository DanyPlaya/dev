"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ReactNode, useState } from 'react'
type ReactQueryProviderProps = {
    children: ReactNode
}
export function ReactQueryProvider(props:ReactQueryProviderProps) {
  const {children} = props
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}