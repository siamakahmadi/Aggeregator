'use client'
import { useState, useEffect } from 'react';
import CardsLayout from './Components/HomeListLayout/index'
import PageHeader from './Components/PageHeader/index'
import Card from './Components/Card/index'
import ThemeContext from './Api/context/ThemeContext'
import Https from './Api/Https';

export default function Home() {
  const [posts, setPosts] = useState([])
  const https = new Https();
  const postsLists = posts.message === "Post fetched" ?
  <>
    {posts.data.data.map(item => ( 
       <div className={styles.row}>
       <div className={styles.leftSide}>
         <div className={styles.checkBox}>
             <input type='checkbox' />
         </div>
         <div className={styles.title}>
             <div className={styles.text}>
                 {item.title}
             </div>
             <div className={styles.link}>
              {item.website}
             </div>
         </div>
       </div>
       <div className={styles.rightSide}>
           <div className={styles.publishDate}>
               {item.created_at}
           </div>
           <div className={styles.status}>
               <StatuLabel title={item.status} type={item.status} />
           </div>
           <div className={styles.Functional}>
                 View
           </div>
       </div>
     </div>
    ))}
  </> : <div>wating...</div>

  useEffect(() => {
    https.get('admin/browse/post').then(Response => {
      setPosts(Response.data)
    }).catch(error => {
      console.log(error)
    })
  },[])


  return (
    <main>
      <div>
        <PageHeader />
        <CardsLayout>
          {postsLists}
          <Card title="hi" src="https://cdn.dribbble.com/userupload/8586347/file/original-f0d863b0f08bfbcbc63d433af6d87e55.png?resize=1024x768" />
        </CardsLayout>
      </div>
    </main>
  )
}
