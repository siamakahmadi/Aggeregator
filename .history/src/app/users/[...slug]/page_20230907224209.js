'use client'
import { useState, useEffect } from 'react';
import CardsLayout from '../Components/HomeListLayout/index'
import PageHeader from '../Components/PageHeader/index'
import Card from '../Components/Card/index'
import Https from '../Api/Https';

export default function Page({params}) {
  const [posts, setPosts] = useState([])
  const [bookmarks, setBookmarks] = useState([])
  console.log(bookmarks)
  const https = new Https();

  const postsLists = posts.message === "Post fetched" ?
    <>
      {posts.data.map(item => (
          <Card key={item.id} title={item.title} src="" route={`users/content/${item.id}`} />
      ))}
    </> : <div>wating...</div>

const bookmarksList = bookmarks.message === "Post fetched" ?
    <>
      {bookmarks.data.map(item => (
          <Card key={item.id} title={item.title} src="" route={`users/content/${item.id}`} />
      ))}
    </> : <div>wating...</div>



  useEffect(() => {
    https.get('user/index').then(Response => {
      setPosts(Response.data)
    }).catch(error => {
      console.log(error)
    })
   
  }, [])

  useEffect(() => {
    https.get('bookmark/list').then(Response => {
      setBookmarks(Response.data)
    }).catch(error => {
      console.log(error)
    })
   
  }, [])



  return (
    <main>
      <div>
        <a href=''>bookmark</a>
        <a>all</a>
        <PageHeader />
        <CardsLayout>
          {
            params.slug == 'bookmark' ? bookmarksList : postsLists
          }
          
          <Card title="hi" src="https://cdn.dribbble.com/userupload/8586347/file/original-f0d863b0f08bfbcbc63d433af6d87e55.png?resize=1024x768" />
        </CardsLayout>
      </div>
    </main>
  )
}
