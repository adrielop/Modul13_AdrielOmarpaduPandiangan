
import './App.css';
import Title from './components/title';
import Body from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Title/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
