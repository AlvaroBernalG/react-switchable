import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Overlay.scss'

const getOverlayClasses = classTransition =>
  classNames('switch__overlay', ([classTransition]: true))

const Overlay = props => {
  const { goTo, items, classTransition, ...rest } = props
  return (
    <span
      {...rest}
      draggable
      onDragStart={() => this.onDragStart()}
      onDragEnd={() => this.onDragEnd()}
      className={getOverlayClasses(classTransition)}
      style={{
        width: `${100 / items}%`,
        transform: `translateX(${100 * goTo}%)`
      }}
    />
  )
}

Overlay.propTypes = {
  goTo: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  classTransition: PropTypes.string
}

Overlay.defaultProps = {
  classTransition: 'switch__overlay-transition'
}

export default Overlay
