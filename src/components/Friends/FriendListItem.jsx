import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendListItem = ({avatar, name, isOnline}) => (
  <li className={css.item}>
  <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>
)

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}