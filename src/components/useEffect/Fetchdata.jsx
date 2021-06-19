import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Fetchdata() {
    const [posts,setPosts] =useState([])
    const [id,setId] =useState(1)
    const [idFromBtnClick,setIdFromBtnClick] =useState(1)

    const handleClick =()=>{
        setIdFromBtnClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${idFromBtnClick}`)
        .then(res =>{
            console.log(res.data);
            setPosts(res.data)
        }).catch (err =>{
            console.log(err);
        })                     
    },[idFromBtnClick])
    return (
        <div>
            <input type="text" value={id} onChange={e=>
                setId(e.target.value)} />
            <button type="button" 
            onClick={handleClick}>Fetch Post</button>
                <div>{posts.name}</div>
            {/* { posts.map(post =>(
                <h3 key={post.id}> {post.name}</h3>
            ))} */}
        </div>
    )
}

export default Fetchdata
