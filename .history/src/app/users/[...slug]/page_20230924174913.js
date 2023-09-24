'use client'
import { useState, useEffect } from 'react';
import CardsLayout from '../Components/HomeListLayout/index'
import PageHeader from '../Components/PageHeader/index'
import Card from '../Components/Card/index'
import Https from '../Api/Https';
import Link from 'next/link';
import {usePathname } from "next/navigation";
export default function Page() {
  
  
  const [posts, setPosts] = useState([])
  

  const [bookmarks, setBookmarks] = useState([])
  console.log(bookmarks)
  
  const https = new Https();
  
  const pathname = usePathname()

  const postsLists = posts.message === "Post fetched" ?
    <>
      {posts.data.map(item => (
        <Card key={item.id} id={item.id} title={item.title} src="https://radintechco.ir/echolab/public/storage/%7Bd8e9107e84b3ca04507e8b075db824b0%7D" route={`/${item.id}`} />
      ))}
    </> : <div>wating...</div>

  const bookmarksList = bookmarks ?
    <>
      {bookmarks.map(item => (

        <Card key={item.id} title={item.title} route={`users/content/${item.id}`} />
      ))}
    </> : <div>Bookmark Empty</div>



  useEffect(() => {
    https.get('user/index').then(Response => {
      setPosts(Response.data)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  useEffect(() => {
    https.get('bookmark/list').then(Response => {
      setBookmarks(Response.data.data)
    }).catch(error => {
      console.log(error)
    })

  }, [])


  return (
    <main>
      <div>
        <Link href='bookmark'>bookmark</Link>
        <Link href='all'>all</Link>

        {pathname === '/users/bookmark' ? <></> : <PageHeader />}
        <CardsLayout>
          {
            pathname === '/users/bookmark' && bookmarksList ||
            pathname === '/users/all' && postsLists
          }
        </CardsLayout>
      </div>
    </main>
  )
}
