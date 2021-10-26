import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <header>
                <nav>
                    <ul className="menu">
                        <li><Link>HOME</Link></li>
                        <li><Link>ABOUT</Link></li>
                        <li><Link>SERVICES</Link></li>
                        <li><Link>PAGES</Link></li>
                        <li>
                            <Link>
                            <select>BLOG
                                <option>BLOG</option>
                                <option>Blog details</option>
                            </select>
                            </Link>
                        </li>
                        <li><Link>CONTACT</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;

