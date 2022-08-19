import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="text-dark fw-bold mb-4 ">About Us</h1>
                        <p className="lead mb-4" style={{textAlign:"justify"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? Dicta, non exercitationem in consectetur totam dolorum at voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. 
                        </p>
                        <Link to="/contact" className="btn btn-outline-dark px-3">Contact Us</Link>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="/assets/images/home/gallery-1.jpg" alt="About Us" height="300px" width="500px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
