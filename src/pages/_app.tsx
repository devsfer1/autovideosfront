'use client'

import { useState } from 'react'
import { CacheProvider } from '@emotion/react'
import { useEmotionCache, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { useServerInsertedHTML } from 'next/navigation'
import themeObject from '../theme'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache()
  cache.compat = true

  // hook will return either 'dark' or 'light' on client
  // and always 'light' during ssr as window.matchMedia is not available
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ))

  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            theme={themeObject}
            withGlobalStyles
            withNormalizeCSS
          >
            {children}
          </MantineProvider>
        </ColorSchemeProvider>
      </CacheProvider>
    </Provider>
  )
}
