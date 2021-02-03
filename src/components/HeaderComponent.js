import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);


    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    render() {
        return (
            <div>
                <Navbar sticky expand="md">
                    <div className="container">
                        <NavbarToggler className="navbar-toggler custom-toggler" onClick={this.toggleNav} />
                        <NavbarBrand href="/"><img src='assets/images/logo.png' width='203' alt='SoundBite' /></NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" activeClassName="active" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" activeClassName="active" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            <span className="fa fa-list fa-lg"></span> Products
                                        </DropdownToggle>
                                        <DropdownMenu className="menu">
                                            <div className="container menu">
                                                <div className="row ">
                                                    <div className="col-12 col-md-4 ">
                                                        <NavLink className="nav-link" activeClassName="active" to='/loudspeaker'>Loudspeakers</NavLink>

                                                        <NavLink className="nav-link" activeClassName="active" to='/mixer'>Mixers</NavLink>
                                                        <NavLink className="nav-link" activeClassName="active" to='/crossovernetworks'>Crossover Networks</NavLink>
                                                        <NavLink className="nav-link" activeClassName="active" to='/paamplifiers'>P.A Amplifiers</NavLink>
                                                    </div>
                                                    <div className="col-12 col-md-4 ">
                                                        <NavLink className="nav-link" activeClassName="active" to='/loudspeakersystem'>Loudspeaker System</NavLink>
                                                        <NavLink className="nav-link" activeClassName="active" to='/amplifiers'>Amplifiers</NavLink>
                                                        <NavLink className="nav-link" activeClassName="active" to='/wallmountspeakers'>Wallmount Speakers</NavLink>

                                                    </div>
                                                    <div className="col-12 col-md-4 ">
                                                        <NavLink className="nav-link" activeClassName="active" to='/microphones'>Microphones</NavLink>
                                                        <NavLink className="nav-link" activeClassName="active" to='/compressiondrivers'>Compression Drivers</NavLink>
                                                        <NavLink className="nav-link" activeClassName="active" to='/activecrossover'>Active Crossover</NavLink>
                                                    </div>

                                                </div>
                                            </div>
                                        </DropdownMenu>

                                    </UncontrolledDropdown>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" activeClassName="active" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>

                            </Nav>

                        </Collapse>

                    </div>
                </Navbar>

            </div >
        );
    }
}


export default Header;