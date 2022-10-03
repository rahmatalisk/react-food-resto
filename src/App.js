import 'swiper/css/bundle'
import './App.css';
import About from './Components/About/About';
import Dishes from './Components/Dishes/Dishes';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Review from './Components/Review/Review';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Dishes></Dishes>
      <About></About>
      <Menu></Menu>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}

export default App;
