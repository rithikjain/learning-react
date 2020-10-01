import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HelloWorld from './Components/HelloWorld'

function App() {
  return (
    <div>
      <Header />

      <HelloWorld name = "Rithik"/>

      <Footer />
    </div>
  );
}

export default App;