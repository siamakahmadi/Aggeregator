'use client'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.mainBackground}>
      {children}

      </body>
    </html>
  )
}