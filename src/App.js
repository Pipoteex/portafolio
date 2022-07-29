
import './App.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { NavBar } from './NavBar';

/* var splide = new Splide( '.splide', {
  direction: 'ttb',
  height   : '10rem',
} ); */

function App() {
  return (
    <div className="App" style={{position: "relative"}}>

    <NavBar></NavBar>

      <Splide 
        aria-label="My Favorite Images"
        options={{
            direction: 'ttb',
            height: '100vh',
            wheel: true,
            arrows: false,
            width: '100vw',
            
          }
        }
        style={{padding: 0}}
      >
        <SplideSlide style={{background:"transparent"}}>
          <div>Pepo</div>
        </SplideSlide>
        <SplideSlide style={{background:"transparent"}}>
        <div >Ciervito</div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default App;
