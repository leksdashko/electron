import React, { useContext } from 'react';
import {Context} from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"#fff"}} to={SHOP_ROUTE}>BuyDevice</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Dashboard</Button>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Logout</Button>
                    </Nav>   
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Sign In</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;