'use client'

export default function RootLayout({ children }) {
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