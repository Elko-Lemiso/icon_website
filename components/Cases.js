import RightArrow from './assets/arrow-right.svg'
import LeftArrow from './assets/arrow-left.svg'
import Image from 'next/image';

const caseStudies =  [
    {
        id:1,
        subtitltle: 'Curology',
        title: 'A custom formula for your skins unique needs',
        img: 'curology-min'
    },
    {
        id:2,
        subtitltle: 'Yourspace',
        title: 'Open space floor plans for your next venture',
        img: 'yourspace-min'
    },
    {
        id:3,
        subtitltle: 'lumin',
        title: 'For your best look ever',
        img: 'lumin-min'
    }
];


const Cases = () => {
    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <LeftArrow/>
                    </div>
                    <div className="cases-arrow next">
                        <RightArrow/>
                    </div>
                </div>
                <div className="row">
                    {caseStudies.map((caseItem)=>(
                        <div className="case" key = {caseItem.id}>
                            <div className="case-details">
                                <span>{caseItem.subtitle}</span>
                                <h2>{caseItem.title}</h2>
                            </div>
                            <div className="case-image">
                                <img 
                                 src={`/${caseItem.img}.png`}
                                 alt={caseItem.title}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Cases;
