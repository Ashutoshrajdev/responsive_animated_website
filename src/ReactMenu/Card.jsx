import React from 'react';
// import pic from '../image/laptop.jpg'
import {Link} from "react-router-dom"

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.image} alt="..." className='card-img-top' />
                    <div className="card-body">
                        <h5 className="card-title  font-weight-bold">{props.title}.</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illo molestiae maiores.</p>
                        <Link to="/" className="btn btn-primary">Subscribe here</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;