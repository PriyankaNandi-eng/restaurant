import React from 'react'
import { Link } from 'react-router-dom';
import DATA from '../Data'

const Product = () => {

    const cardItem = (item) => {
        return (
            <div className="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} className="card-img-top" alt={item.title}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <Link to="/contact" className="btn btn-outline-dark">Order Now</Link>
                    </div>
</div>
                );
    }

                return (
                <div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className='text-dark fw-bold'>Product</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {DATA.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Product;
