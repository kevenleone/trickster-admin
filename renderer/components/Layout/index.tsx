import React from 'react'

export default function index ({ children }) {
  return (
    <div className="application_layout">
      <div className="background">
        <div className="application_container">
          {children}
        </div>
      </div>
    </div>
  )
}
