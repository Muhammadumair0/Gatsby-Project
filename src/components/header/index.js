import React from 'react'
import Link from 'gatsby-link'

import './_header.scss';

const Header = () => (
  <div class="header"
    style={{
      background: 'orange',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Groceri Star
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
