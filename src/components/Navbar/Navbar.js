import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import {IconContext} from 'react-icons/lib';
import {Button} from '../../globalStyles';
import { Nav, 
    NavbarContainer, 
    NavLogo,  
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavItemBtn,
    NavBtnLink 
} from './Navbar.elements';


const Navbar = () => {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <IoHome />
                        &nbsp;Mitchell Else
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/Portfolio'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/About'>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/Resume'>
                                Resume
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/Education'>
                                Education
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/Portfolio'>
                                Portfolio
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                            <NavBtnLink to='/'>
                                <Button primary>Contact Me</Button>
                            </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/'>
                                    <Button fontBig primary>
                                        Contact Me
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
