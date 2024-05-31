
import './App.css'
import UsersReviews from './UsersReview/UsersReview';
import About from './components/About/About';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import PropertyListing from './components/PropertyListing/PropertyListing';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <NavBar/>
      <Header/>
      <About/>
      <PropertyListing/>
      <UsersReviews/>
      <Footer/>
    </>
  )
}

export default App
