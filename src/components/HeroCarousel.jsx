import { Carousel, ConfigProvider } from 'antd';
import restaurantImage from '../assets/restaurant.webp';
import luggageImage from '../assets/luggage.webp';
import deckImage from '../assets/deck.webp';
import cruise1Image from '../assets/cruise1.webp';
import cruise2Image from '../assets/cruise2.webp';
import cruise3Image from '../assets/cruise3.webp';
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
                    <img className='slide-img' src={luggageImage} loading='lazy' alt="Cruise worker escorting the passenger to their room while helping with their luggage" />
                </div>
                <div>
                    <img className='slide-img' src={deckImage} loading='lazy' alt="Cruise worker working on the cruise deck" />
                </div>
                <div>
                    <img className='slide-img' src={cruise1Image} loading='lazy' alt="A cruise ship moving in water." />
                </div>
                <div>
                    <img className='slide-img' src={cruise2Image} loading='lazy' alt="A cruise ship moving in water with passengers on deck." />
                </div>
                <div>
                    <img className='slide-img' src={cruise3Image} loading='lazy' alt="A cruise ship moving in water in the evening." />
                </div>
            </Carousel>
        </ConfigProvider>
    );
}

    export default HeroCarousel;
