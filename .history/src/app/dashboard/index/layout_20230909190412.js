// import './globals.css'
import styles from '../assets/main.module.scss'
import Nav from '../components/nav/index'


export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={styles.mainBackground}>
          <Nav />
          <div className={styles.containerPadding}>
            {children}

          </div>
        </body>
      </html>
  )
}
export const metadata = {
  title: 'Aggeregator Admin Panel',
  description: 'This is the aggeregator Platform Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={styles.mainBackground}>
      <Nav />
      <div className={styles.containerPadding}>
        {children}

      </div>
    </body>
  </html>
  )
}
