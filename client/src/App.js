import React from 'react'
import Image from './img/TechTalk.png';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import AllBulma from './components/AllBulma'
//import AllBulma from './components/AllBulma'

import Contact from './components/Contact';
import Feed from './components/Feed'
import Job from './components/Job'
import Header from './components/Header'
// import Landing from './components/Landing'
import Portfolio from './components/Portfolio'
// import Loggedin from './components/Loggedin'
// import Notloggedin from './components/Notloggedin'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Post from './components/Post'
import About from './components/AboutUs';

import Landing from './pages/Landing'
import Profile from './pages/Profile'

import 'bulma/css/bulma.min.css';
// import AllBulma from './components/AllBulma'



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/'>
            <Landing Image={Image} />
        </Route>

        <Route exact path='/signup'>
          <Signup />
        </Route>
          <Route exact path='/feed'>
            <div className='columns'>
            <div className='column'>
            <Portfolio />
            </div>
            <div className='column'>
            <Post />
            <Feed />
            </div>
            <div className='column'>
            <Job />
            </div>
            </div>
          </Route>
          <Route exact path='/contact-us'>
            <Contact />
          </Route>
          <Route exact path='/about'>
            <About />
            </Route>

          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
