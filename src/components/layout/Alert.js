import React, { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const alertCtx = useContext(AlertContext)
  const { alert } = alertCtx; // 从ctx获取state

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  )
}

export default Alert;


