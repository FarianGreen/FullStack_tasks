import React from "react";
import { ReactComponent as PhoneIcon } from "../icons/phone.svg";
import { ReactComponent as MailIcon } from "../icons/mail.svg";
import "./UserCard.css";

const UserCard = ({ user, onClick }) => {
  return (
    <div className="user-card" onClick={onClick}>
      <h3 className="user-name">{user.name}</h3>
      <div className="user-info">
        <PhoneIcon className="icon" />
        <p>{user.phone}</p>
      </div>
      <div className="user-info">
        <MailIcon className="icon" />
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
