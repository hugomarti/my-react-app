import React from 'react'
import Link from 'gatsby-link'
import './Headers.css';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrolled)
  }
  
handleScrolled = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ handleScrolled: true })
  } else {
    this.setState({ handleScrolled: false })
  }
}

  render() {
    return (
      <div className={this.state.handleScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className='HeaderGroup'>
          <Link to='/'><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/downloads'>Downloads</Link>
          <Link to='/workshops'>Workshops</Link>
          <Link to='/buy'><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
