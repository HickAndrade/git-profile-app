'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'

const UserInfo = ({ userinfo }) => (
  <div className='userInfo'>
    <img src={userinfo.photo} />
    <h1 className='username'>
      <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositorios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
