import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <a href={html_url} target='_blanc' className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    );
  }
}

export default UserItem;
