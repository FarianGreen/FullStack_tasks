import React from "react";
import { ReactComponent as Close } from "../icons/close.svg";
import "./UserPopup.css";

const UserPopup = ({ user, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2>{user.name}</h2>
          <Close className="popup-close" onClick={onClose} />
        </div>
        <div className="popup-content">
          <div className="popup-content__item">
            <p className="popup-text">Телефон:</p>
            <p className="popup-userInfo">{user.phone}</p>
          </div>
          <div className="popup-content__item">
            <p className="popup-text">Почта:</p>
            <p className="popup-userInfo">{user.email}</p>
          </div>
          <div className="popup-content__item">
            <p className="popup-text">Дата приема:</p>
            <p className="popup-userInfo">{user.hire_date}</p>
          </div>
          <div className="popup-content__item">
            <p className="popup-text">Должность:</p>
            <p className="popup-userInfo">{user.position_name}</p>
          </div>
          <div className="popup-content__item">
            <p className="popup-text">Подразделение:</p>
            <p className="popup-userInfo">{user.department}</p>
          </div>
        </div>
        <div className="additional-info">
          <p>Дополнительная информация:</p>
          <p className="additional-info__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPopup;
