import { Carousel} from 'antd';
import restaurantImg from '../assets/restaurant.webp';
import luggageImg from '../assets/luggage.webp';
import deckImg from '../assets/deck.webp';
import instrcutImg from '../assets/instruct.webp';
import safetyImg from '../assets/safety.webp';
import meetImg from '../assets/meeting.webp';
import repair1mg from '../assets/repair1.webp';
import repair2Img from '../assets/repair2.webp';
import repair3Img from '../assets/repair3.webp';
import './WorkCards.css';

const carouselImages = [restaurantImg, luggageImg, deckImg];
const carouselImages2 = [instrcutImg, safetyImg, meetImg];
const carouselImages3 = [repair1mg, repair2Img, repair3Img];

function WorkCards() {
    return (
        <div className="work-section">
            <h2 className="work-heading">कार्य का विवरण</h2>

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
                        <h2>10th वालों के लिए काम</h2>
    
                        <ul>
                            <li>यात्रियों की सहायता करना।</li>
                            <li>रसोई और भोजन क्षेत्र में सहायता करना।</li>
                            <li>सामान उठाना और पहुँचाना।</li>
                            <li><strong>सैलरी – ₹25000 से ₹30000</strong></li>
                            <li>कुल पद – <strong>7200</strong></li>
                            <li><strong>नोट: रहना व खाना क्रूज जहाज का रहेगा।</strong></li>
                            <li>
                                <a href="pdf1.pdf" download="pdf1.pdf">Download the work offer</a>
                            </li>
                        </ul>
                        <a href='/offer1'><button className='work-button'>आवेदन करें</button></a>
                    </div>
                </div>
    
                <div className="work-card">
                    <Carousel autoplay className="work-carousel">
                        {carouselImages2.map((src, index) => (
                            <div key={index}>
                                <img src={src} alt={`slide-${index}`} className="carousel-img" />
                            </div>
                        ))}
                    </Carousel>
    
                    <div className="work-content">
                        <h2>12th वालों के लिए काम</h2>
    
                        <ul>
                            <li>सुपरवाइजर के निर्देशों का पालन करना।</li>
                            <li>सुरक्षा नियमों की जानकारी देना।</li>
                            <li>समस्याओं को सुलझाना।</li>
                            <li><strong>सैलरी – ₹28000 से ₹35000</strong></li>
                            <li>कुल पद – <strong>3405</strong></li>
                            <li><strong>नोट: रहना व खाना क्रूज जहाज का रहेगा।</strong></li>
                            <li>
                                <a href="pdf1.pdf" download="pdf1.pdf">Download the work offer</a>
                            </li>
                        </ul>
                        <a href='/offer2'><button className='work-button'>आवेदन करें</button></a>
                    </div>
                </div>
    
                <div className="work-card">
                    <Carousel autoplay className="work-carousel">
                        {carouselImages3.map((src, index) => (
                            <div key={index}>
                                <img src={src} alt={`slide-${index}`} className="carousel-img" />
                            </div>
                        ))}
                    </Carousel>
    
                    <div className="work-content">
                        <h2>I.T.I. वालों के लिए काम</h2>
    
                        <ul>
                            <li>मरम्मत के कार्यों में मदद करना।</li>
                            <li>आपातकालीन स्थिति में सहायता करना।</li>
                            <li>हल्की फुल्की रिपेयर करना।</li>
                            <li><strong>सैलरी – ₹30000 से ₹38000</strong></li>
                            <li>कुल पद – <strong>4820</strong></li>
                            <li><strong>नोट: रहना व खाना क्रूज जहाज का रहेगा।</strong></li>
                            <li>
                                <a href="pdf1.pdf" download="pdf1.pdf">Download the work offer</a>
                            </li>
                        </ul>
                        <a href='/offer3'><button className='work-button'>आवेदन करें</button></a>
                    </div>
                </div>
    
            </div>        
        </div>
    );
}

export default WorkCards;
