import React from 'react';
import {Container, Form} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight - 54}}
        >
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form>
                    <Form.Control 
                        className="mt-3"
                        placeholder="Type your email..."
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Type your password..."
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                        <div>
                            <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                        </div>
                        :
                        <div>
                            <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
                        </div>
                        }
                        <Button 
                            className="mt-3 align-self-end"
                        >
                            {isLogin ? 'Login' : 'Registration'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;