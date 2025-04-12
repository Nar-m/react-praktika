import { Link, Outlet } from "react-router-dom"
import NavLink from "./NavLink"
import './layout.css';

export default function Layout() {
    return (
        <>
            <header id="header">
                <div className="flex items-center justify-around p-2">
                    <div className="logo">
                        <Link to="/">
                            <img style={{ width: '106px' }} src="https://www.any.do/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo.4645495f.webp&w=384&q=75" />
                        </Link>
                        <div className="wrapper">
                            <nav id="navbar">
                                <ul className="flex items-center list-none">
                                    <NavLink />
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="btn">
                            <button id="login">Login</button>
                        </div>
                    </div>
                </div>
            </header>
            <main style={{ marginTop: '100px' }}>
                <Outlet />
            </main>
        </>
    )
}