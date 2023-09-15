
'use client'
import styles from './assets/main.module.scss'
import Nav from './components/nav/index'
import Login from './login/page'
import { useState, useEffect } from "react"
import Cookies from 'universal-cookie'
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css'


// export async function GetStaticProps() {
//   const cookies = new Cookies()

//   const cookieData = cookies.get('isloggin')

//   return { props: { cookieData } }
// }




export default function RootLayout({ children }) {

  const cookies = new Cookies()

  const cookieData = cookies.get('isloggin')
  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(true)
  console.log(cookieData)

  return (
    <html lang="en">
      {cookieData. === 'true' ?
        <body>
          <div>Loggin True</div>
        </body>
        :
        <body>
          <div>Loggin false</div>
        </body>
      }
    </html>
  )
}