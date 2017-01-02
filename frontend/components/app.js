import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'
import ImageSearch from './imageSearch.jsx';
import '../app.css';
import Home from './home';
import Create from './createBoard'; 
import Login from './login';
import About from './about';
import Signup from './signup';
import $ from 'jquery';

var App = React.createClass({
  getInitialState: function(){
    return {email: ""}
  },
  componentDidMount: function(){
    $.ajax({
      method: 'GET',
      url: '/auth'
    })
    .done((email) => {
      console.log('email', email)
      if(email) {
        console.log(email + " is logged in")
        this.setState({email: email})
      } else {
        console.log("No one is logged in.")
      }
    })
  },
  render: function() {
    return ( 
      <div>
      	<a href="http://linkedin.com/in/salinafu" target="_blank"><img className="ribbon" src={require('../images/salmonRibbon.png')} /></a>

      	<div className="logo-class">
        	<img className="logo" src={require('../images/reLogo.png')} />
       
        </div>

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="nav navbar-nav">
              <Link to='/'>_home</Link> 
              <Link to='About'>_about</Link>
              <Link to='ImageSearch'>_search</Link>
              <Link to='Create'>_create</Link>
              <Link to='Login'>_login</Link>
            </div>
          </div>
        </nav>
        {this.state.email ? <h2>{'Hello there, ' + this.state.email}</h2> : null}
        {this.props.children}

      </div>
    )
  }
}) 

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
  	<IndexRoute component={Home} />
    <Route path="About" component={About} />
 		<Route path="ImageSearch" component={ImageSearch} />
 		<Route path="Create" component={Create} />
    <Route path="Login" component={Login} />
    <Route path="Signup" component={Signup} />
  	</Route>
  </Router>,
  document.getElementById('root')
);
