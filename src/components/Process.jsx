import React from 'react'
import './styles/process.css'

const Process = (props) => {
  const {processes} = props
  return (
    <div className='process-wrapper'>
        <div className='process-container'>
          {
            processes.map((item) => (
              <div className='process-content'>
                  <div className='process-title'>
                      <h2>{item.num}</h2>
                      <p>{item.title}</p>
                  </div>
              </div>

            ))
          }
        </div>
    </div>
  )
}

export default Process