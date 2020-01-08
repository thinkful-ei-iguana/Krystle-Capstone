import React from 'react'
import './NoteForm.css'
import PropTypes from 'prop-types';

export default function NoteForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Note-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )``
}

NoteForm.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}