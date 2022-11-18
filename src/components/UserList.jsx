import React from 'react'
import UserCard from './UserCard'
import {Spinner,Button} from 'react-bootstrap'


const UserList = ({users,loadUsers}) => {
  
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        {loadUsers?  <>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </>:
        users.map((el)=> <UserCard user={el} key={el.id}/>)
       
        }
    </div>
    
  )
}

export default UserList