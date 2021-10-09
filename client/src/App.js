import Header from './components/Header'

import Landing from './components/Landing'
import Portfolio from './components/Portfolio'


import Loggedin from './components/Loggedin'


function App() {

  return (
    <div className="App">

      <Header />
      <Landing />
      <Portfolio />

      {/* <Header />
      <Loggedin /> */}

    </div>
  );
}

export default App;
