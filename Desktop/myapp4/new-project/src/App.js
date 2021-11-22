import React from 'react'
import './App.css';
import ProfilComponent from './Profil/ProfilComponent';

function App() {
  const StyleObject = {color:"red" , textAlign:"center"}
  const bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  const fullName = 'Abdelkader Ben Gadha'
  const profession = 'devlopper'
  const  handleName  = () => {
    alert(`welcome ${fullName}`)
  
  }
  
  return (
    <div style={StyleObject}>
    <ProfilComponent name={fullName} bi={bio} job={profession} alertFct={ handleName }>
      <img src="/image.jpg" alt="" width="30%" />
    </ProfilComponent>
    </div>
  );
}

export default App;
