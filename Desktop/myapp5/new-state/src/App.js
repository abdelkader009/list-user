import React from 'react'
import './App.css';

class profile extends React.Component {
  state = {
    name: "Abdelkader",
    bio: 'Lorem Ipsum est simplement un texte factice de lindustrie de limpression et de la composition',
    profession: 'devlopper',
    imageSrc:'/image2.jpg',
    imageAlt:'',
    show:false,
    count:  0,
  };
  showProfil=()=>{
    this.setState({ show: !(this.state.show) })
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({count: this.state.count +1});
    }, 1000);
  }
  render() { 
    return(
      <div>
       {this.state.show ? <div><h1>{this.state.name}</h1>
        <h3>{this.state.bio}</h3>
        <h3>{this.state.profession}</h3>
     <div class="image"><img src={this.state.imageSrc} alt={this.state.imageAlt}/></div></div>:null}
     <button onClick={()=>this.showProfil()}>show</button>
     <p>
       Time interval since the component was mounted: {this.state.count}
       </p> 
     </div>
     )
  }
 }
 export default profile;