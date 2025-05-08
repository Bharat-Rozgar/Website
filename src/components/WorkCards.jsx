import { Carousel} from 'antd';
import './WorkCards.css';

const carouselImages = [
  './src/assets/restaurant.png',
  './src/assets/luggage.png',
  './src/assets/deck.png',
]; 

function WorkCards() {
    return (
        <div className="work-section">
            <h2 className="work-heading">कार्य का विवरण</h2>
            <div className="work-underline"></div>

            <div className='work-card-wrapper'>
                <div className="work-card">
                    <Carousel autoplay className="work-carousel">
                        {carouselImages.map((src, index) => (
                            <div key={index}>
                                <img src={src} alt={`slide-${index}`} className="carousel-img" />
                            </div>
                        ))}
                    </Carousel>
    
                    <div className="work-content">
                        <h2>10th वालों का</h2>
    
                        <ul>
                            <li>यात्रियों की सहायता करना।</li>
                            <li>रसोई और भोजन क्षेत्र में सहायता करना।</li>
                            <li>सामान उठाना और पहुँचाना।</li>
                            <li><strong>सैलरी – ₹25000 से ₹30000</strong></li>
                            <li>कुल पद – <strong>7200</strong></li>
                            <li><strong>नोट: रहना व खाना क्रूज जहाज का रहेगा।</strong></li>
                        </ul>
                        <a href='/offer1'><button className='work-button'>आवेदन करें</button></a>
                    </div>
                </div>
    
                <div className="work-card">
                    <Carousel autoplay className="work-carousel">
                        {carouselImages.map((src, index) => (
                            <div key={index}>
                                <img src={src} alt={`slide-${index}`} className="carousel-img" />
                            </div>
                        ))}
                    </Carousel>
    
                    <div className="work-content">
                        <h2>12th वालों का</h2>
    
                        <ul>
                            <li>सुपरवाइजर के निर्देशों का पालन करना।</li>
                            <li>सुरक्षा नियमों की जानकारी देना।</li>
                            <li>समस्याओं को सुलझाना।</li>
                            <li><strong>सैलरी – ₹28000 से ₹35000</strong></li>
                            <li>कुल पद – <strong>3405</strong></li>
                            <li><strong>नोट: रहना व खाना क्रूज जहाज का रहेगा।</strong></li>
                        </ul>
                        <a href='/offer2'><button className='work-button'>आवेदन करें</button></a>
                    </div>
                </div>
    
                <div className="work-card">
                    <Carousel autoplay className="work-carousel">
                        {carouselImages.map((src, index) => (
                            <div key={index}>
                                <img src={src} alt={`slide-${index}`} className="carousel-img" />
                            </div>
                        ))}
                    </Carousel>
    
                    <div className="work-content">
                        <h2>I.T.I. वालों का</h2>
    
                        <ul>
                            <li>मरम्मत के कार्यों में मदद करना।</li>
                            <li>आपातकालीन स्थिति में सहायता करना।</li>
                            <li>हल्की फुल्की रिपेयर करना।</li>
                            <li><strong>सैलरी – ₹30000 से ₹38000</strong></li>
                            <li>कुल पद – <strong>4820</strong></li>
                            <li><strong>नोट: रहना व खाना क्रूज जहाज का रहेगा।</strong></li>
                        </ul>
                        <a href='/offer3'><button className='work-button'>आवेदन करें</button></a>
                    </div>
                </div>
    
            </div>        
        </div>
    );
}

export default WorkCards;
