import { NavLink } from "react-router-dom";
import './navbar.css'

export const Navbar = () => {


    //TO DO: Llevar esto a algún archivo de constantes o algo así
    const navItems = [
        {
            name: 'Home',
            url: ''
        },
        {
            name: 'Goals',
            url: 'goals'
        },
        {
            name: 'New Registry',
            url: 'new'
        },
        {
            name: 'Contact',
            url: 'contact'
        },
    ]

    // const prueba = (algo) => {
    //     console.log(algo)
    // }

    return (
        <>
            <ul className="d-flex list-unstyled justify-content-center m-0">
                {
                    navItems.map(nav => (
                        <li key={ nav.name }>
                            <NavLink to={ nav.url }>{ nav.name }</NavLink>
                        </li>
                    ))
                }
            </ul>
            {/* <nav className="navbar navbar-expand-md fixed-top px-2">
                <NavLink to='' className="navbar-brand">
                    <img src="/src/assets/white-spiderweb.png" alt="spider-web" className="d-inline-block align-text-top nav-logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title title" id="offcanvasNavbarLabel">All Alvarez</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {
                                navItems.map(( item ) => (
                                    <li className="nav-item ms-3 align-self-auto align-self-md-center" key={ item.name } >
                                        <NavLink to={ item.url } className="nav-link fw-bold" aria-current="vh-100" data-bs-dismiss="offcanvas">{ item.name }</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav> */}
        </>
    )
}
