import head from './images/fill213.png';
import './App.css';
import Headers from './component/Headers';
import Main from './component/Main';
import two from './images/two.jpg';
import data from './data'



function App() {
  const traveles = data.map(content => {
    return <Main
      content={content}
    />
  });
  return (
    <div className="App">
      <Headers />
      {traveles}
      
    </div>
  );
}

export default App;
