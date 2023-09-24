'use client'
import { useState, useEffect } from 'react';
import CardsLayout from '../Components/HomeListLayout/index'
import PageHeader from '../Components/PageHeader/index'
import Card from '../Components/Card/index'
import Https from '../Api/Https';
import Link from 'next/link';
import { useRouter, usePathname } from "next/navigation";
export default function Page({ params }) {
  const [posts, setPosts] = useState([])
  const [bookmarks, setBookmarks] = useState([])
  const https = new Https();
  const pathname = usePathname()
  const router = useRouter()

  function home (){
  switch(!bookmarks) {
    case 1: 
      return <ComponentA />;
    case 2:
      return <ComponentB />;
    //...
  }
}

  const postsLists = posts.message === "Post fetched" ?
    <>
      {posts.data.map(item => (
        <Card key={item.id} title={item.title} src="https://radintechco.ir/echolab/public/storage/%7Bd8e9107e84b3ca04507e8b075db824b0%7D" route={`/${item.id}`} />
      ))}
    </> : <div>wating...</div>

  const bookmarksList = bookmarks.message === "Post fetched" ?
    <>
      {bookmarks.data.map(item => (

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

  // useEffect(() => {
  //   https.get('bookmark/list').then(Response => {
  //     setBookmarks(Response.data)
  //   }).catch(error => {
  //     console.log(error)
  //   })

  // }, [])



  return (
    <main>
      <div>
        <Link href='bookmark'>bookmark</Link>
        <Link href='all'>all</Link>

        {pathname === '/users/bookmark' ? <PageHeader />:
        <CardsLayout>
          {
            // params.slug === 'users/all' ? postsLists : <div>ss</div>
            pathname === '/users/bookmark' && bookmarks ||
            pathname === '/users/all' && postsLists 
            
          }

          <Card key="2" title="hi" src="https://cdn.dribbble.com/userupload/8586347/file/original-f0d863b0f08bfbcbc63d433af6d87e55.png?resize=1024x768" />
        </CardsLayout>
      </div>
    </main>
  )
}
