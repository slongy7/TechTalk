import React, {Component} from 'react';

import TechTalk from '../img/techtalklogo.jpg'

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
        

            <nav className="navbar block" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <a className="navbar-item"  href="https://slongy7.github.io/project_3/">
                  <img class="image" src={TechTalk}/>

                </a>
            
                <a role="button" onClick={this.onClick} className={`navbar-burger ${this.props.className}`} aria-label="menu" aria-expanded="true" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
                
              </div>
            
              <div id="navbarBasicExample" className={`navbar-menu ${this.props.className}`}>
                <div className="navbar-start">
                  <a className="navbar-item" href="/feed">
                    Home
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

                    </div>
                  </div>
                </div>
              </div>
            </nav>
       

  )
  }
}
    

export default Header
