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
     <Card title="hi" src="https://cdn.dribbble.com/userupload/8586347/file/original-f0d863b0f08bfbcbc63d433af6d87e55.png?resize=1024x768" />
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
