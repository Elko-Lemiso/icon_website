
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    </div>
                    <div className="cases-arrow next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
