import React from 'react'
import { Link } from 'react-router-dom'

import './Aprender.css'

export const Aprender = () => {
  return (
    <section className='aprender'>
        <span>
          <Link to={`form`} target='_blank'>
            Inscrições
          </Link>
        </span>
    </section>
  )
}
