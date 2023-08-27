
// async function getData() {
//     const res = await fetch('https://radintechco.ir/echolab/public/api/user/post/5/show')
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

// export function getIndex() {
//   return fetch('https://radintechco.ir/echolab/public/api/user/post/5/show')
//     .then(Response => Response.json)
//     .then(list => list)
//     .catch(err => console.log.err(err))
// }

import { AxiosInstance,AxiosResponse } from "axios";
e