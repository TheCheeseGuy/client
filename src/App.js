import './App.css';
import Header from './components/header.js'
import Banner from './components/banner.js'
import Application from './components/application.js';
import Nav from './components/Nav.js'

function App() {
  return (
    <body itemScope>
      <main>
        <Header />
        {/* <Nav /> */}
        <Banner />
        <Application />
      </main>
    </body>

  );
}

export default App;
