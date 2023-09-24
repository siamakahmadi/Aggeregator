'use client'

export default function RootLayout({ children }) {

  const [isLoggin, setIsLoggin] = useState(true)

  useLayoutEffect(() => {
    const cookieData = cookies.get('isloggin')
    setIsLoggin(cookieData)
  }, [])

  return (
    <html lang="en">
      <body className={styles.mainBackground}>
        <Nav />
        <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />

        <div className={styles.containerPadding}>
          {isLoggin ?
            <>
              {children}
            </>
            :
            <>
              <Login />
            </>
          }
        </div>
      </body>
    </html>
  )
}