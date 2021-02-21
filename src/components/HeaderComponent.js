import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, DropdownToggle, DropdownMenu, Dropdown
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isDropDownOpen: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);

    }

    toggleNav() {
        if (window.innerWidth <= 800) {
            this.setState({
                isNavOpen: !this.state.isNavOpen
            });
        }
    }
    toggleDropDown() {
        console.log(this.state.isDropDownOpen);



        this.setState({
            isDropDownOpen: !this.state.isDropDownOpen,
        });


    }
    closeDropDown() {
        console.log(window.innerWidth);
        if (window.innerWidth > 800) {
            this.setState({
                isDropDownOpen: false,
            });
        } else {
            this.setState({
                isDropDownOpen: false,
                isNavOpen: false

            });
        }
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
            <div className="sticky-nav">
                <Navbar sticky="top" color="white" className="sticky-nav  mr-auto border-bottom border-dark" expand="lg">
                    <NavbarBrand className="ml-auto mr-auto" href="/"><img className="brand" src='assets/images/logo.png' alt='SoundBite' /></NavbarBrand>
                </Navbar >
                <Navbar color="white" className="mr-auto border-bottom border-dark" expand="lg">
                    <Nav className="need-hel-link  nav-menu" navbar>

                        <a navbar href="tel:01149868550" className="need-hel-link" target="_blank" rel="noreferrer">
                            <h5 className="need-help">Need Help <i className="fa fa-phone fa-lg " style={{ color: 'blue' }}></i> Call 011-4986 8550</h5>
                        </a>
                    </Nav>
                    <NavbarToggler className="  navbar-toggler custom-toggler" onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto mr-auto  nav-menu" navbar>
                            <NavItem>
                                <NavLink className="nav-link header-link" activeClassName="active" to='/home' onClick={this.toggleNav} > HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className=" nav-link header-link" activeClassName="active" to='/aboutus' onClick={this.toggleNav} > ABOUT</NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown nav inNavbar activeClassName="active" isOpen={this.state.isDropDownOpen} toggle={this.toggleDropDown}>
                                    <DropdownToggle nav caret className=" nav-link header-link"  >
                                        PRODUCTS
                                </DropdownToggle>
                                    <DropdownMenu
                                        modifiers={{

                                            setMaxWidth: {
                                                enabled: true,
                                                order: 890,
                                                fn: (data) => {
                                                    return {
                                                        ...data,
                                                        styles: {
                                                            ...data.styles,
                                                            overflow: 'auto',
                                                            maxWidth: '100px',
                                                        },
                                                    };
                                                },
                                            },
                                        }}
                                    >
                                        <div className="row ">
                                            <div className="col-12 col-md-4 ">
                                                <NavLink className="nav-link header-link" activeClassName="active" to='/loudspeaker' onClick={this.closeDropDown}>Loudspeakers</NavLink>
                                                <NavLink className="nav-link header-link" activeClassName="active" to='/loudSpeakerSystem' onClick={this.closeDropDown}>LoudSpeaker System</NavLink>
                                                <NavLink className="nav-link header-link" activeClassName="active" to='/microphones' onClick={this.closeDropDown}>Microphones</NavLink>
                                                <NavLink className="nav-link header-link" activeClassName="active" to='/audioCables' onClick={this.closeDropDown}>Audio Cables</NavLink>
                                            </div>
                                            <div className="col-12 col-md-4 ">
                                                <NavLink className="nav-link header-link" activeClassName="active" to='/powerAmplifiers' onClick={this.closeDropDown}>Power Amplifiers</NavLink>
                                                <NavLink className="nav-link header-link" activeClassName="active" to='/crossoverNetwork' onClick={this.closeDropDown}>Crossover Network</NavLink>
                                                <NavLink className="nav-link header-link" activeClassName="active" to='/crossoverDriver' onClick={this.closeDropDown}>Crossover Driver</NavLink>

                                            </div>
                                            <div className="col-12 col-md-4 ">
                                                <NavLink className="nav-link header-link" activeClassName="active" to='/snakeCables' onClick={this.closeDropDown}>Snake Cable</NavLink>
                                                <NavLink className="nav-link header-link" activeClassName="active" to='/digitalCableM' onClick={this.closeDropDown}>Digital Cable (Microphones)</NavLink>
                                                <NavLink className="nav-link header-link" activeClassName="active" to='/digitalCableSL' onClick={this.closeDropDown}>Digital Cable (Speaker Light)</NavLink>
                                            </div>
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>

                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link header-link" activeClassName="active" to='/contactus' onClick={this.toggleNav}>CONTACT</NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>

                </Navbar>
            </div >
        );
    }
}


export default Header;