import React from 'react'
import PropTypes from 'prop-types';

const UserInfo = (props) => {
    return (
        <div>
            <div className="UserInfo">
            <img className="Avatar"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
            </div>
        </div>
    );
}

UserInfo.propTypes = {
    user: PropTypes.object,
  };
  

export default UserInfo;
