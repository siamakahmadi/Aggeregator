// async function getData() {
//     const res = await fetch('https://api.example.com/...')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
   
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
   
//     return res.json()
//   }
   
//   export default async function Page() {
//     const data = await getData()
   
//     return <main></main>
//   }

// const data = await getData();
// export default async  data();

// async function getData(){
//     const res = await fetch('https://radintechco.ir/echolab/public/api/user/post/5/show')
//     if(!res.ok){
//         throw new Error('faild')
//     }
//     return res.json()
// }
// export default async function getData();


async function getData() {
    const res = await fetch('https://radintechco.ir/echolab/public/api/user/post/5/show')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
   
    return <main></main>
  }