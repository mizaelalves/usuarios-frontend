import React, {useEffect, useState} from "react";

export default function Users(){
  const [users, setUsers] = useState([])
  useEffect(() =>{
    let usersData = localStorage.getItem('Users');
    usersData = JSON.parse(usersData);
    setUsers(usersData);

  }, [])
  
  return(
    <ul>
        {users.map(Usuario =>{
        return(
        <li>{Usuario.name}</li>)}
        )}
    </ul>
  )
}
