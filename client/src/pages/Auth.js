import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/const";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter login..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter password..."
                    />
                    <div className="row gx-5 mt-3">
                        {isLogin ?
                            <div className="col">
                                Have no account? <NavLink to={REGISTRATION_ROUTE}>Create</NavLink>
                            </div>
                            :
                            <div className="col">
                                Have account? <NavLink to={LOGIN_ROUTE}>Enter</NavLink>
                            </div>
                        }
                        <Button className="col me-4"  variant={"outline-success"}>
                            { isLogin ? 'Log in' : 'Registration' }
                        </Button>
                    </div>

                </Form>
            </Card>

        </Container>
    );
};

export default Auth;