// •	Using create-react-app, create a new React project.  check
//  Create a LoginForm component that contains the following:
// •	Username and password input fields, an h3 that says Log In, with a border.
// Style the component using the default generated CSS file.
// •	Create a Navigation component that contains links styled like a navbar.  check
// •	The links don’t have to go anywhere.
// •	Put the Navigation component at the top of the page and the LoginForm 
//  in the center of the page.




import React, { Component, Fragment } from "react"

class NavBar extends Component {
     

    navStyles = {
        height: '6.5rem',
        
    }

    textStyles = {
        color: 'white',
        margin: 0,
        marginLeft: 15,
    }

    render() { 
        return (
            <Fragment>
                
                <nav style= { this.navStyles } className="navbar navbar-expand bg-dark">
                    <div>
                        <h1><a style={this.textStyles} className="navbar-brand m-15" href="#">SoleCustoms</a></h1>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li className='nav-item'>
                            <a style={this.textStyles} className="nav-link" href="#">Home</a>
                        </li>
                        <li className='nav-item dropdown'>
                            <a style={this.textStyles} className="nav-link dropdown-toggle" data-target="dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="">Shop</a>
                            <ul className='dropdown-menu'>
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">Menu</a>
                                </li>
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">Specials</a>
                                </li>
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">About Us</a>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown'>
                        <a style={this.textStyles} className="nav-link dropdown-toggle" data-target="dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Locations</a>
                            <ul className='dropdown-menu'>
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">Atlanta, GA</a>
                                </li>
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">Cleveland, OH</a>
                                </li>
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">Dallas, TX</a>
                                </li>
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">Houston, TX</a>
                                </li>  
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">Las Vegas, NV</a>
                                </li>  
                                <li className='dropdown-item'>
                                <a className="dropdown-item nav-link" href="#">Minneapolis, MN</a>
                                </li>              
                            </ul>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        );
    }
}

export default NavBar;