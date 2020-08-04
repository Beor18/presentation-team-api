import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#ca4334',
      textAlign: 'center',
      color: '#fff',
      fontSize: 30
    }}>
    {children}
  </div>
)