import React from 'react';
import { Container, Button } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2">Add type</Button>
            <Button variant={"outline-dark"} className="mt-2">Add brand</Button>
            <Button variant={"outline-dark"} className="mt-2">Add device</Button>

            <CreateBrand/>
            <CreateType/>
            <CreateDevice show={true}/>
        </Container>
    );
};

export default Admin;