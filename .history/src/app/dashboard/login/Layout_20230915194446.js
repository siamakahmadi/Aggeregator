import './globals.css'


export const metadata = {
  title: 'Aggeregator Admin',
  description: 'This is the aggeregator Platform Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
