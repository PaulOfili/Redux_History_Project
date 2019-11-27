import React from 'react';
import { connect } from "react-redux";

function UserList({users}) {
    return (
        <div className="App">
            {users.map(user => (
                <p key={user.name}>{user.name}</p>
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps, null)(UserList);
