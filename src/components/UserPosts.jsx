import React,{ useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

const UserPosts = () => {
    const {id}=useParams()
  
    const [posts,setPosts]=useState([])
    const getUserPosts=()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res)=>{
        setPosts(res.data)
      })
      .catch((error)=>console.log(error))
    }
   
    useEffect(()=>{
        getUserPosts();
        //eslint-disable-next-line
    },[]);
    
  return (
    <div>
        {posts.map((el)=>
        <div key={el.id}>
        <h3>PostID:{el.id}</h3>
        <h5><span style={{color:"blue",fontWeight: "bold"}}>title:</span>{el.title}</h5>
        <p><span style={{color:"blue",fontWeight: "bold"}}>description:</span>{el.body}</p>
        <Button variant="primary"><Link to ={`/posts/${el.id}/comments`} style={{color:"white"}}> comments </Link> </Button>
        </div>)}
        
    </div>
  )
}

export default UserPosts