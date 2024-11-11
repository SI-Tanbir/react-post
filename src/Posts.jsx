import { useEffect, useState } from "react";

export default function Post(){

    let [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div>
            <h2>number of Post:{users.length}</h2>
            <div>
                {users.map(post => (
                     <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>

                     <h3>Post-tittle:  {post.title}</h3>

                     <p>Body: {post.body}</p>

                 </div>
                ))}


            </div>
            
           
        </div>






    )
}