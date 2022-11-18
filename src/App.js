import './App.css';
import React,{ useEffect, useState } from 'react';
import axios from "axios"
import UserList from './components/UserList';
import { Routes, Route, Link } from "react-router-dom";
import UserPosts from './components/UserPosts';
import UserPostComments from './components/UserPostComments';


function App() {
  const [users,setUsers]=useState([])
  const[loadUsers,setLoadUsers]=useState(true)
  

  const getUsers=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
          setUsers(res.data)
          setLoadUsers(false)
        })
        .catch((error)=>console.log(error))
  }
  /* Error not here
  const {id}=useParams()
  
  const [posts,setPosts]=useState([])
  const getUserPosts=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((res)=>{
      console.log(res.data)
      setPosts(res.data)
    })
    .catch((error)=>console.log(error))
  }
  console.log("post test", posts)*/
  useEffect(()=>{
      getUsers();
      //getUserPosts()
      //eslint-disable-next-line
  },[]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<><h1>Home</h1><Link to='/userList'><button>userList</button></Link></>}/>
        <Route path="/userList" element={<UserList users={users} loadUsers={loadUsers}/>}/>
        <Route path="/posts/:id" element={<UserPosts/>}/>
        <Route path="/posts/:id/comments" element={<UserPostComments/>}/>
      </Routes>
    </div>
  );
}

export default App;
