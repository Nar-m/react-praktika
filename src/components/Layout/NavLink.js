import { Link } from "react-router-dom"
import { useState } from "react";

export default function () {
    const [active, setActive] = useState('Home');

    return (
        <>
            <li onClick={() => setActive('Home')}>
                <Link className={`${active === 'Home' ? 'active' : ''}`} to="/">
                    Home
                </Link>
            </li>
            <li onClick={() => setActive('pages')}>
                <Link className={`${active === 'pages' ? 'active' : ''}`} to="pages">
                    People
                </Link>
            </li>
            <li onClick={() => setActive('Resources')}>
                <Link className={`${active === 'Resources' ? 'active' : ''}`} to="gallery">
                    Gallery
                </Link>
            </li>
            <li onClick={() => setActive('Download')}>
                <Link className={`${active === 'Download' ? 'active' : ''}`} to="Download">
                    Download
                </Link>
            </li>
            <li onClick={() => setActive('Pricing')}>
                <Link className={`${active === 'Pricing' ? 'active' : ''}`} to="todo">
                    List
                </Link>
            </li>
        </>
    )
}