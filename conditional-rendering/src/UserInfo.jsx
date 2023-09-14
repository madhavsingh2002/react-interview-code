import React from 'react'

const UserInfo = (prop) => {
  if(prop.islog){
    return <p> Welcome User!</p>
  }
  else{
    return <p>Please Login</p>
  }
}

export default UserInfo