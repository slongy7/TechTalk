import AllBulma from './components/AllBulma'
import Header from './components/Header'
import Loggedin from './components/Loggedin'
import Notloggedin from './components/Notloggedin'
import Footer from './components/Footer'
// import AllBulma from './components/AllBulma'

function App() {
  return (
    <div className="App">
      <Header />
      <Loggedin />
      <Notloggedin />
      <AllBulma />
      <Footer />
    </div>
  );
}

export default App;
