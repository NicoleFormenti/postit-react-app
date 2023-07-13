import Data from '../src/components/data';
import DisplayDate from './components/displayDate';
import PostIt from './components/post-it';
import ImageDisplay from './components/imagedisplay';
import ImgData from './components/imagedata';
function App() {
  
  return (
    <div className="App" style={{backgroundColor: '#eab676', height: '100vh'}}>
      <div className="today" style={{backgroundColor: '#21130d', color: '#fff', textAlign: 'center'}}>
        <DisplayDate />
      </div>
      <br></br>
      
      <h1 style={{textAlign: 'center', color: '#063970'}}>Holidays</h1>      
      <div className="container" style={{backgroundColor: '#abdbe3', display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'space-around', alignItems: ' center'}}>
        <div className="list" style={{display: 'flex', flexDirection:'column'}}>
          {
            Data.map((item, i)=>{
              return (
                <PostIt title={item.title} message={item.message} colour={item.color} />
              )
            })
          }
        </div>
        <div className="img-container">
          {
            ImgData.map((item, i)=>{
              return (
                <ImageDisplay title={item.title} textCaption={item.textCaption} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
