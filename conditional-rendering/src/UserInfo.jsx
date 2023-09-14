import React from 'react'

const UserInfo = (props) => {
    if (props.isLoggedIn) {
        return <p>Welcome, User!</p>; // Replace "User" with the actual user's name
      } else {
        return <p>Please log in</p>;
      }
}

export default UserInfo