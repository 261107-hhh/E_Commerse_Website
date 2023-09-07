import { email, address, phone } from '../config'
import Navbar from '../partial/navbar';
import Footer from '../partial/footer';
import '../Style/about.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className='container1'>
                <h1>AboutUs</h1>
                <p>We are Kumaun Store, a small but motivated company specializing in Homemade Products.
                    We are passionate about homemade products and believe in supporting local artisans and creators.
                    We believe passionately in great bargains and excellent service, which is why we commit ourselves
                    to giving you the best of both.

                    If you’re looking for something new, you’re in the right place. We strive to be industrious
                    and innovative, offering our customers something they want, putting their desires at the top
                    of our priority list.</p>
                <div>
                    <h2>About Us</h2>
                    <p>Welcome to our retail app! We are passionate about homemade products and believe in supporting local artisans and creators.</p>

                    <h3>Our Mission</h3>
                    <p>Our mission is to provide a platform for talented individuals who create high-quality homemade products. We aim to connect customers with unique, handcrafted items that are made with love and care.</p>

                    <h3>What We Offer</h3>
                    <p>At our retail app, you'll find a wide variety of homemade products ranging from artisanal food and beverages to handmade crafts and clothing. We carefully curate our selection to ensure that each item meets our standards of quality and craftsmanship.</p>

                    <h3>Supporting Local Communities</h3>
                    <p>We are committed to supporting local communities by promoting small-scale producers and entrepreneurs. When you purchase a homemade product through our app, you are not only getting a one-of-a-kind item but also supporting the livelihoods of talented individuals.</p>

                    <h3>
                        Why Choose Us:
                    </h3>
                    <p>Unique and Authentic: Your products are handcrafted, ensuring each item is unique and reflects the authentic artistry of the Kumaoni culture.

                    </p>
                    Support Local Artisans: By choosing your products, customers contribute to the livelihood of local artisans and support the preservation of traditional craftsmanship.

                    <p>

                        Sustainable and Eco-Friendly: Hand-made products are often created using sustainable materials and eco-friendly practices, reducing the environmental impact.

                    </p>
                    Cultural Connection: Customers can connect with the rich cultural heritage of Kumaun through the intricate designs and traditional techniques used in the products.
                    <p>

                        High-Quality Craftsmanship: Hand-made items are crafted with attention to detail and quality, ensuring customers receive products that are made to last.
                    </p>

                    Customization: Depending on your offerings, customers may have the opportunity to request personalized touches or custom designs, making each purchase special.
                    <p>

                        Social Impact: Supporting local artisans can have a positive social impact by empowering communities and preserving their artistic traditions.
                    </p>
                    <p>

                        Gifting with Meaning: Your products can make thoughtful and meaningful gifts, conveying a sense of appreciation for the recipient's individuality.

                        Overall, choosing your hand-made products from Kumaun not only means acquiring beautifully crafted items but also contributing to a more sustainable and culturally rich world</p>
                    {/* <p>
                        Authenticity: We collaborate directly with local artisans, ensuring that every product is a genuine representation of Kumauni artistry.
                    </p>
                    <p>
                        Quality: Our commitment to quality means that each item is crafted with precision and utmost care, reflecting the mastery of its creator.
                    </p>
                    <p>Ethical Sourcing: We value fair trade practices and strive to provide artisans with fair compensation for their exceptional work.
                    </p>
                    <p>Cultural Connection: Through our products, we invite you to experience the rich cultural heritage of Kumaun and cherish the artistic stories behind each piece.
                    </p> */}


                    <hr></hr>

                    {/* <div className="about-section">
                        <h1>About Us Page</h1>
                        <p>Some text about who we are and what we do.</p>
                        <p>Resize the browser window to see that this page is responsive by the way.</p>
                    </div>

                    <h2>Our Team</h2>
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <img src="/w3images/team1.jpg" alt="Jane" />
                                <div className="container">
                                    <h2>Jane Doe</h2>
                                    <p className="title">CEO & Founder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>jane@example.com</p>
                                    <p><button className="button">Contact</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <img src="/w3images/team2.jpg" alt="Mike" />
                                <div className="container">
                                    <h2>Mike Ross</h2>
                                    <p className="title">Art Director</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>mike@example.com</p>
                                    <p><button className="button">Contact</button></p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <img src="/w3images/team3.jpg" alt="John" />
                                <div className="container">
                                    <h2>John Doe</h2>
                                    <p className="title">Designer</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>john@example.com</p>
                                    <p><button className="button">Contact</button></p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <h1>Contact Us</h1>

                    <p>If you have any questions, feedback, or would like to collaborate with us, please don't hesitate to reach out. We'd love to hear from you!</p>

                    <ul className="list-unstyled">
                        <p><AlternateEmailIcon />Email: {email}</p>
                        <p><LocalPhoneIcon />Phone: {phone}</p>
                        <p><HomeIcon />Address:  {address}</p>
                    </ul>
                </div>
            </div>
            <Footer />
        </>

    )

}

export default AboutUs;
