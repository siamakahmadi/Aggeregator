import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aggeregator Admin',
  description: 'This is the aggeregator Platform Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
