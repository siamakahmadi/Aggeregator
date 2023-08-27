async function getData() {
    const res = await fetch('https://radintechco.ir/echolab/public/api/user/post/5/show')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async const data = await getData();

export default async  data();

// async function getData(){
//     const res = await fetch('https://radintechco.ir/echolab/public/api/user/post/5/show')
//     if(!res.ok){
//         throw new Error('faild')
//     }
//     return res.json()
// }
// export default async function getData();