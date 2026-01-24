import React from 'react'

const Heading = ({ name, subtitle, centered = true }) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
        {name}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mt-6"></div>
    </div>
  )
}

export default Heading