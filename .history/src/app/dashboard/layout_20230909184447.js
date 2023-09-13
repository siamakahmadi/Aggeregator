// import './globals.css'
import styles from './assets/main.module.scss'
import { Inter } from 'next/font/google'
import Nav from './components/nav/index'
import Provider from './components/Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aggeregator Admin Panel',
  description: 'This is the aggeregator Platform Dashboard',
}
const router = useRouter()
const [isLoggin, setIsLoggin] = useState(true)


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.mainBackground}>
        <Provider>
          <Nav />
          <div className={styles.containerPadding}>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
