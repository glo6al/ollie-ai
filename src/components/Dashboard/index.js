import React from  'react';
import Card from 'react-bootstrap/Card';
import Andrew from '../../assets/Andrew.JPG';
import Jorge from '../../assets/Jorge.jfif'
import Amanda from '../../assets/Amanda.jpg';

function Dashboard() {
    return (
        <section className='dashboard d-flex flex-wrap justify-content-center'>
            <Card className="bg-light text-white client mx-2 mt-3">
                <Card.Img src={Andrew} alt="Card image" />
            </Card>

            <Card className="bg-light text-dark client mx-2 mt-3">
                <Card.Img src={Jorge} alt="Card image" />
            </Card>

            <Card className="bg-light text-dark client mx-2 mt-3">
                <Card.Img src={Amanda} alt="Card image" />
            </Card>
        </section>
    )
}

export default Dashboard;