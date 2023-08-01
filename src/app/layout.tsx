import RootStyleRegistry from './emotion'

// import { Container, Text, Button, Navbar, Stepper, Tabs, Center } from '@mantine/core'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  )
}
