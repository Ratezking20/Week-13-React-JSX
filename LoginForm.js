// •	Using create-react-app, create a new React project.  
//  Create a LoginForm component that contains the following:
// •	Username and password input fields, an h3 that says Log In, with a border.
// Style the component using the default generated CSS file.
// •	Create a Navigation component that contains links styled like a navbar. 
// •	The links don’t have to go anywhere.
// •	Put the Navigation component at the top of the page and the LoginForm 
//  in the center of the page.

import React, { Component } from "react";

//h3 login h3 should have a border around it
// and form should be in center of webpage

class LoginForm extends Component {
    
    url = {
        imageSource: 'https://i.pinimg.com/originals/35/4d/77/354d77d05a3dadd241a3fae2eb8698a8.jpg'
    }

    styles = {
        maxWidth: '30%',
        padding: '80px',
        
        
        
        borderColor: 'gray',
        placeContent:'center',
        placeItem: 'center',
        fontFamily: 'impact',
        backgroundColor: 'white',
        
    }

    imageStyles = {
        maxWidth: '100%',
        minWidth: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
    
    }

    containerStyles = {
        position: 'relative',

    }

    centerForm = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        border: 'solid',
        borderWidth: '1px',
        borderRadius: '10px',
      }
    
   

    render() { 
        return (

            <body>
             
                <form>
                   
                    <div style = { this.containerStyles } className="row">
                        <div style= { this.imageStyles } className="col-9" id="image-of-sneakers">
                            <img className="col-md-9" style= { this.imageStyles } src= { this.url.imageSource } />
                        </div>
                        <div style={ this.centerForm } id="login-form" className="col-3">
                            <div id="login-header" className="form">
                                <h3>Log In!</h3> 
                            </div><br/>
                            <div className="form-group">
                                <label for="username-input">Email Address</label>
                                <input className="form-control col-2" type="text" placeholder="Enter email"/><br/>
                                <label for="password-input">Password</label>
                                <input className="form-control col-2" type="password" placeholder="Enter Password"/> <br/><br/>
                                <button className= "btn btn-secondary" type="Submit">Log In</button> <br/><br/>
                            </div>
                        </div>
                    </div>
               
                </form>
            
            
            </body>

        )
    }
}

export default LoginForm;
