import Link from 'next/link';

export const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li><Link href = "/CaseStudies">Case Studies</Link></li>
                            <li><Link href = "/Approach">Approach</Link></li>
                            <li><Link href = "/Services">Services</Link></li>
                            <li> <Link href = "/About">About us</Link></li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contact</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li><Link href = '/contact'>Get in touch with us</Link></li>
                                <li><Link href = '/audit'>Get a free audit</Link></li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Headquaters</li>
                                <li>Route de jura</li>
                                <li>1103 Westlands</li>
                                <li>Nairobi</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Phone</li>
                                <li>+31 (0) 644 123 687</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Legal</li>
                                <li><Link href = "/cookies">Cookies</Link></li>
                                <li> <Link href = "/privacy">Privacy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

