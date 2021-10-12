import React, {Component} from 'react';

// import TechTalk from 'src/img/TechTalk.png'

export class Header extends Component {
  

  // static propTypes = {
  //   className: PropTypes.string

  // };

  // static defaultProps = {
  //   className: ''
  // };

  // onClick = (e) => {this.props.className = 'is-active'};
  render () {  
  return (
        

            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://slongy7.github.io/project_3/">
                  
                  <h1 className = 'text'>TECHTALK</h1>  
                  {/* <img src={TechTalk}/> */}
                </a>
            
                <a role="button" onClick={this.onClick} className={`navbar-burger ${this.props.className}`} aria-label="menu" aria-expanded="true" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
                
              </div>
            
              <div id="navbarBasicExample" className={`navbar-menu ${this.props.className}`}>
                <div className="navbar-start">
                  <a className="navbar-item" href="/home">
                    Home
                  </a>
            
                  <a className="navbar-item">
                    Documentation
                  </a>
            
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                      More
                    </a>
            
                    <div className="navbar-dropdown">
                      <a className="navbar-item">
                        About
                      </a>
                      <a className="navbar-item">
                        Jobs
                      </a>
                      <a className="navbar-item">
                        Contact
                      </a>
                      
                    </div>
                  </div>
                </div>
            
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <a className="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a className="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
       

  )
  }
}
    

export default Header
