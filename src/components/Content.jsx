import './Content.css'

function Content() {
    return (
        <>
            <h3 className='content-heading'>क्रूज जहाज में काम का सुनहरा मौका</h3>
            <div className='content'>
                <h4 className='content-text'>यदि आप &nbsp; <strong>10th</strong>, &nbsp; <strong>12th</strong>, &nbsp; <strong>I.T.I.</strong> &nbsp; पास हैं, तो आपके पास क्रूज जहाज में काम करने का भारत रोजगार एक सुनहरा अवसर प्रदान कर रहा है, जिसमें आप अच्छी सैलरी प्राप्त कर सकते हैं।</h4>
                <ul className='content-list'>
                    <li><strong>17 &nbsp;</strong> से <strong>&nbsp; 30 &nbsp;</strong> वर्ष के व्यक्ति आवेदन करें।</li>
                    <li>भारत रोजगार लाया है <strong> &nbsp; 15425 &nbsp; </strong> पदों की भर्ती।</li>
                    <li> क्या आप क्रूज जहाज में काम करना चाहते हैं?</li>
                </ul>
            </div>
            <h3 className='content-heading'>पदों का विवरण</h3>
            <div className='content'>
                <ul className='content-list'>
                    <li><strong>10th &nbsp;</strong> क्लास के कुल पद – <strong>7200</strong></li>
                    <li><strong>12th &nbsp;</strong> के कुल पद – <strong>3405</strong></li>
                    <li>  <strong>I.T.I. &nbsp;</strong> के कुल पद – <strong>4820</strong></li>
                </ul>
            </div>

            <a href='/work'><button className='content-button' >Next</button></a>
        </>
    )
}

export default Content;