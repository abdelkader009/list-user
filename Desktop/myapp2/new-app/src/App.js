import img1 from './image1.jpg';
import vid from'./lisa.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{border:'1px solid black', maxWidth:'100vw'}}>
      <h1 className="titlered">Your name here</h1>
     <br/>
     <img src={img1} alt="" width="30%"/>
     <br/>
     <img src="/image2.jpg" alt="" width="30%"/>
     </div>
     <video className='videoTag' width="320" height="240" controls>
       <source src={vid} type="video/mp4"/>
       </video>
    </div>
  );
}

export default App;
