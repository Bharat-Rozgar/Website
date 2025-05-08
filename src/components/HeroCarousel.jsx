import { Carousel, ConfigProvider } from 'antd';
import restaurantImage from '../assets/restaurant.png';
import luggageImage from '../assets/luggage.png';
import deckImage from '../assets/deck.png';
import './HeroCarousel.css';

const carouselThemeOverrides = {
    components: {
      Carousel: {
        arrowSize: 40,   // Increased arrow size from default 16 to 40
        arrowOffset: 12, // Optional: increase offset from edge
      },
    },
  };

function HeroCarousel() {
    return (
        <ConfigProvider theme={{ components: carouselThemeOverrides.components }}>
            <Carousel autoplay dots={true} arrows={true} className="hero-carousel">
                <div>
                    <img className='slide-img' src={restaurantImage} alt="Cruise worker working in the cruise Restaurant" />
                </div>
                <div>
                    <img className='slide-img' src={luggageImage} alt="Cruise worker escorting the passenger to their room while helping with their luggage" />
                </div>
                <div>
                    <img className='slide-img' src={deckImage} alt="Cruise worker working on the cruise deck" />
                </div>
            </Carousel>
        </ConfigProvider>
    );
}

    export default HeroCarousel;
