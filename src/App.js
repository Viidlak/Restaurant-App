
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestuarantsList from './components/RestuarantsList';
import RestuarantDetails from './components/RestuarantDetails';
import { Route,Routes}from 'react-router-dom'
import RestuarantReview from './components/RestuarantReview';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        </header>
        <Routes>
        <Route path="/" element={<RestuarantsList/>}/>
        <Route path="/restuarant/:id" element={<RestuarantDetails/>}/>
        </Routes>
        {/* <RestuarantsList/> */}
        
      <Footer/>
    </div>
  );
}

export default App;
