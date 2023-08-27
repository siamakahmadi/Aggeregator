// async function getData() {
//     const res = await fetch('http://localhost:3000/posts')
//     if (!res.ok) {
//         throw new Error('Failed to fetch data')
//     }

//     return res.json()
// }

// const data = await getData();
// export default async  data();

async function getData(){
    const res = await fetch('https://radintechco.ir/echolab/public/api/user/post/5/show')
    if(!res.ok){
        throw new Error('faild')
    }
    return res.json
}