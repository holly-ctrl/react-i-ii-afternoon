import React from 'react'

const UserInfo = ({users, userIndex}) => {
    console.log(users)
    return (
        <div>
         <div>
             {`${userIndex +1}/${users.length}`}
         </div>
         <div>
              
         </div>
        </div>
    )
}

export default UserInfo 