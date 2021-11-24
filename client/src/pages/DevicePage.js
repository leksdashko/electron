import React from 'react';
import {Col, Row, Container, Image, Card, Button} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const device = {id:1, name:'Iphone 12 pro', price:1500, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTj14U7hPi4ul4_XKLWQ8lU6007wGZFQXuPg&usqp=CAU'}
    const description = [
        {title: 'ras', description: 'aga'},
        {title: 'dva', description: 'be'},
        {title: 'ras', description: 'aga'},
        {title: 'dva', description: 'be'}
    ]  

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div 
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize:64}}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card 
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width:300, height:300, fontSize:32, boder: '5px solid lightgray'}}
                    >
                        <h3>{device.price}</h3>
                        <Button variant={"outline-dark"}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>Technical Details</h2>
                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent'}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;