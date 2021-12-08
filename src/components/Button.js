import React from 'react'

const Button = ({ onClick, text, active }) => {
  return (
    <button
      className={active ? 'btn active' : 'btn inactive'}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
Button.defaultProps = {
  active: true,
}
export default Button
