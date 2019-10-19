import React, {Component, Fragment} from 'react'
import data from './data'
import Header from './components/Header'
import UserInfo from './components/UserInfo'
import Buttons from './components/Buttons'


class Users extends Component {
    constructor() {
        super()

        this.state = {
            users: data,
            userIndex: 0
        }

    }

    render() {
        const {users, userIndex} = this.state
        return (
            <Fragment>
                <Header />
                <UserInfo 
                    users={users}
                    userIndex={userIndex}
                />
                <Buttons />
            </Fragment>
        )
    }
}

export default Users 