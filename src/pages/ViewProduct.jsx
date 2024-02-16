import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByID } from "../services/product";
import Navbar from "../partial/navbar";
import Footer from "../partial/footer";
import { Row, Col, Button } from 'reactstrap'
import { toast } from 'react-toastify'
import { checkLogin } from "../Config/index";
export function ViewProduct() {

    // const View = () => {

    // .container img {
    //     width: 100%;
    //     height: 100%;
    //     /* z-index: -1;
    //     opacity: 2.5; */
    //   }

    // .container {
    //     /* box-sizing: content-box; */
    //     width: 50%; /* Adjust the width as needed */
    //     margin: auto; /* Center*/
    //     padding: 15px 16px;
    //     height: 100vh;
    //     border: 2px solid #2f69fe;
    //     border-radius: 20px;
    // }

    // .image {
    //     background-image: url(https://intellsys-optimizer.b-cdn.net/interviews/978ea909-91ec-49c2-bd69-d494c097d38d/header.jpg);
    //     width: 100%;
    //     height 100% 
    //     border-radius: 20px;
    //     -webkit-border-radius: 20px;
    //     /* -moz-border-radius: 20px; */

    //   }

    // .container img {
    //     width: 100%;
    //     height: 100%;
    //     /* z-index: -1;
    //     opacity: 2.5; */
    //   }


    // }

    const { productID } = useParams();
    const [product, setProduct] = useState(null);

    const addtocart = (id) => {
        if (!checkLogin()) {
            toast.warn("Login Please")
        }
        else toast.success("Added to Cart")
    }
    useEffect(() => {
        console.log("HAHAhA")
        async function fetchData() {
            console.log("his iD is " + productID);
            try {
                const response = await getProductByID(productID);
                setProduct(response)

                console.log(JSON.stringify(response))

            } catch (error) {
                toast.warn("Try again")
            }
        }
        fetchData();
    }, [productID])

    const display = () => {
        return (
            <Row>
                <Col sm={5} style={{ "textAlign": "center" }}>
                    <img style={{ "width": "100%" }}
                        src="https://intellsys-optimizer.b-cdn.net/interviews/978ea909-91ec-49c2-bd69-d494c097d38d/header.jpg" alt="Product" />
                </Col>
                <Col sm={7} className="info">
                    <h2>{product.name}</h2>
                    <br />
                    <br />
                    <p>{product.description}</p>
                    <Row className="buttonRow">
                        <Col style={{ "textAlign": "right" }}>
                            <p>Price: {product.price}</p>
                            <p>Quantity Available: {product.quantity}</p>
                        </Col>
                        <Col style={{ "textAlign": "center" }}>
                            {/* <a> */}
                            <Button onClick={() => { addtocart(productID) }} id="buy" variant="primary">
                                Add To Cart
                            </Button>
                            <p>Vendor: {product.vendor}</p>
                            {/* </a> */}
                        </Col>

                    </Row>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }

    console.log(product);
    return (
        <>
            <Navbar />
            <div className="item" style={{
                "marginTop": "6rem",
                "marginLeft": "15px",
                "marginRight": "15px"
            }}>
                {(product ? display() : <h1>Product not present</h1>)}
            </div>
            <Footer />
        </>
    );
}

