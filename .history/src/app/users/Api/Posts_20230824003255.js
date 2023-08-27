async function getData() {
    const res = await fetch('https://radintechco.ir/echolab/public/api/user/post/5/show')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default const data = await getData();



// async function getData(){
//     const res = await fetch('https://radintechco.ir/echolab/public/api/user/post/5/show')
//     if(!res.ok){
//         throw new Error('faild')
//     }
//     return res.json()
// }
// export default async function getData();