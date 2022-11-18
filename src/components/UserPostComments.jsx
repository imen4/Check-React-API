import React,{useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";


const UserPostComments = () => {
    const {id}=useParams()
    const [comments,setComments]=useState([])

    const getPostComments=()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res)=>{
        console.log(res.data)
        setComments(res.data)
      })
      .catch((error)=>console.log(error))
    }
    useEffect(()=>{
        getPostComments();
        //eslint-disable-next-line
    },[]);
    console.log(comments)
  return (
    <div>
       {comments.map((el)=>
        <div key={el.id}>
        <h3>comment{el.id} of post {el.postId}</h3>
        <p><span style={{color:"blue",fontWeight: "bold"}}>name:</span>{el.name}</p>
        <p><span style={{color:"blue",fontWeight: "bold"}}>email:</span>{el.email}</p>
        <p><span style={{color:"blue",fontWeight: "bold"}}>comment:</span>{el.body}</p>
        </div>
       )}  
    </div>
  )
}

export default UserPostComments