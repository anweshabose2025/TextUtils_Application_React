import React from 'react'

export default function Alerts(props) {
  return (
    <div style={{height:"50px"}}>
      {props.alerttext && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alerttext.type}</strong>: {props.alerttext.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
    </div>
  )
}
