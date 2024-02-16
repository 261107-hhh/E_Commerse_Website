// import '../Style/footer.css';
// import '../Style/Card.css'
// import Heading from './Heading';
// import Title from './Title';
// import Image from './Image';
// const Card = ({ index, product }) => {


//     // console.log(product)
//     return (
//         <>
//             {/* <div className="cards">
//             {/* {product} */}
//             {/* <div className="card">
//                     {/* <Image imgPoster={product.srno} /> */}
//             {/* <div className="title">  */}
//             <h1> hi there card</h1>

//             <Heading name={product.name} />
//             <Title title={product.description} />
//             <Title title={product.price} />
//             <Title title={product.vendor} />
//             {/* <a href={props.link} target="_blank" rel="noreferrer" className="anchor">
//                             <button>Add TO Cart</button>
//                         </a>
//                         <a href={props.link} target="_blank" rel="noreferrer" className="anchor">
//                             <button>VIEW</button>
//                         </a> */}
//             {/* </div>
//                 </div>
//             </div> */}
//         </>
//     )
// }

// export default Card;


// import Title from "./Title";
// import Heading from "./Heading";
// import { Button } from "@mui/material";
import { Button } from "reactstrap";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../Config/index";
import { toast } from "react-toastify";
// import '../Style/product.css'
function Card({ product }) {

    const navigate = useNavigate();

    const toView = (id) => {
        navigate(`/viewProduct/${id}`)
    }
    const addToCart = (id) => {
        if(!checkLogin()){
            toast.warn("Login Please")
        }       
        else toast.success("Added to Cart")
    }
    const pro = () => {
        return (
            <>

                <div className="product-card">
                    {/* <img src={prod} alt="Product 2" /> */}
                    <h3>Product 14 {product.name}</h3>
                    {/* <p>{product.description}</p> */}
                    <p>{product.price}</p>
                    {/* <p>{product.vendor}</p> */}
                    {/* <Heading name={product.name} />
                    <Title title={product.description} />
                    <Title title={product.vendor} />
                    <Title title={product.price} /> */}
                    <Button className=".btn-primary" onClick={() => toView(product.srno)}>View Product</Button>
                    
                    <Button onClick={() => addToCart(product.srno)}>Add To Cart</Button>
                    {/* <a href={product.link} target="_blank" rel="noreferrer" className="anchor">
                        <button>Buy Now</button>
                    </a> */}
                </div>
            </>
        )
    }

    return (
        <>
            {(product) ? pro() : <h1>Try Again Later</h1>}
        </>
    )
}

export default Card;