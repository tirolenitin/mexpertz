
import './App.css';
import About from './component/about/About';
import Blog from './component/blog/Blog';
import Contact from './component/contact/Contact';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Item from './component/items/Item';
import Menu from './component/menu/Menu';
import Testimonial from './component/testimonial/Testimonial';
function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <Blog/>
        <Item/>
        <Menu/>
        <Testimonial/>
        <About/>
        <Contact/>
    </div>
  );
}

export default App;
