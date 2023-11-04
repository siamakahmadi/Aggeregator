"use client";
import { useState, useEffect,useContext } from "react";
import CardsLayout from "../Components/HomeListLayout/index";
import PageHeader from "../Components/PageHeader/index";
import Card from "../Components/Card/index";
import Loading from "../Components/Loading/index";
import Https from "../Api/Https";
import Link from "next/link";
import HeaderContent from "../Api/context/HeaderContent";
import { usePathname } from "next/navigation";

export default function Page({ params }) {

  const headerContext = useContext(HeaderContent)

  const [posts, setPosts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [filter, setFilter] = useState([]);


  const https = new Https();
  const pathname = usePathname();
  

  const postsLists =
    posts.message === "Post fetched" ? (
      <>
        {posts.data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            isBookmark={item.liked}
            title={item.title}
            src=""
            route={`/${item.id}`}
          />
        ))}
      </>
    ) : (
      <Loading title="Loading ... " />
    );

  const bookmarksList = bookmarks ? (
    <>
      {bookmarks.map((item) => (
        <Card  
        key={item.id}
        id={item.id}
        isBookmark={item.liked}
        title={item.title}
        src=""
        route={`/${item.id}`} />
      ))}
    </>
  ) : (
    <div>Bookmark Empty</div>
  );

  const filterList = filter ? (
    <>
      {filter.map((item) => (
        <Card 
        key={item.id}
        id={item.id}
        isBookmark={item.liked}
        title={item.title}
        src=""
        route={`/${item.id}`}
        />
      ))}
    </>
  ) : (
    <div>Bookmark Empty</div>
  );

  useEffect(() => {
    https
      .get("user/index")
      .then((Response) => {
        setPosts(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    https
      .get("bookmark/list")
      .then((Response) => {
        setBookmarks(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    https
      .get(`user/index?tags=${params.slug}`)
      .then((Response) => {
        setFilter(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    https
      .get(`user/category/index`)
      .then((Response) => {
        setFilterCategory(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <div>
        <Link href="bookmark">bookmark</Link>
        <Link href="all">all</Link>
        {pathname === "/users/bookmark" ? <></> : <PageHeader title={headerContext < 0 ? 'Default Title' : headerContext.page_title } description={headerContext} />}
        <CardsLayout>
          {(pathname === "/users/bookmark" && bookmarksList) ||
            (pathname === "/users/all" && postsLists) ||
            filterList}
        </CardsLayout>
      </div>
    </main>
  );
}
