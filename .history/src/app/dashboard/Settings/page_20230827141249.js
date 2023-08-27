import React ,{useState} from 'react'
import Https from '../../users/Api/Https'
export default function page() {
    const [posts, setPosts] = useState([])
    const https = new Http();
    useEffect(() => {
      https.get('admin/browse/post?search=t&sort=created_at&category=test&paginate=10&sort_type=ASC&status=Published').then(Response => {
        setPosts(Response.data)
      }).catch(error => {
        console.log(error)
      })
    },[])
  
  return (
    <div>Setting</div>
  )
}
