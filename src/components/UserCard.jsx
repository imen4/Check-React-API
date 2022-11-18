import React from 'react'
import {Card,ListGroup,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

const UserCard = ({user}) => {
  return (
    <Card style={{ width: '17rem',margin:"10px" }}>
      <Card.Img variant="top" style={{width: '7rem' }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
      <Card.Body>
        <Card.Title>{user.name+":"+user.username}</Card.Title>
        <Card.Text>
          {user.email}
        </Card.Text>
        <Card.Header>Address</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{"city: "+user.address.city}</ListGroup.Item>
        <ListGroup.Item>{"street: "+user.address.street}</ListGroup.Item>
      </ListGroup>
      <Card.Header>Details</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{"phone: "+user.phone}</ListGroup.Item>
        <ListGroup.Item>{"company: "+user.company.name}</ListGroup.Item>
      </ListGroup>
      <Button variant="primary"><Link to ={`/posts/${user.id}`} style={{color:"white"}}> Posts </Link> </Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard