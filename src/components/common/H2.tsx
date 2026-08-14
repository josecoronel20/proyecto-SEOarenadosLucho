import React from 'react'

const H2 = ({ title }: { title: string }) => {
  return (
    <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-tinta mb-3">
                {title}
            </h2>
            <div className="w-20 h-1 bg-tinta mx-auto"></div>
          </div>
  )
}

export default H2