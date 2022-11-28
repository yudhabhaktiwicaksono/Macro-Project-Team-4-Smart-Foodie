import React from "react";
import logo6 from "./images/logo6.png";
import logo7 from "./images/logo7.png";
import logo8 from "./images/logo8.png";
import logo9 from "./images/logo9.png";
import logo10 from "./images/logo10.png";
import payment from "./images/payment.png"
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyle.js";

const Footer = () =>{
    const sectionStyle = {
        display: 'flex',
        justifyContent:'center',
        alignItems :'center',
        marginTop:'50px',
        fontSize:'20px',
        
    }
    return(

        <Box>
            <div className="subscribe">
                <img src={logo6} alt="" />
                <input type="text" placeholder="Enter Your Email Here...."/>
                <button>Submit</button>
            </div>
            <section style={sectionStyle}>
                <div>
                    <span>FOLLOW US ON</span>
                </div>

                <div className="icon">
                    <a href=""> <img src={logo7} alt="" /> </a>
                    <a href=""> <img src={logo8} alt="" /> </a>
                    <a href=""> <img src={logo9} alt="" /> </a>
                    <a href=""> <img src={logo10} alt="" /> </a>
                </div>
                
            </section>    
           
      <Container>
        <Row>
          <Column>
            <Heading>About The Company</Heading>
            <FooterLink href="#">Since 2022, 1DayFresh is actively helping
             to simplified our society life by providing fresh groceries to your door.
            </FooterLink>
            
          </Column>
          <Column>
            <Heading>Payment Options</Heading>
            <FooterLink href="#">
                <img  src={payment} alt="" />
            </FooterLink>

          </Column>
          <Column>
            <Heading>User Area</Heading>
            <FooterLink href="#">My Account</FooterLink>
            <FooterLink href="#">My Cart</FooterLink>
            <FooterLink href="#">My Order</FooterLink>
            <FooterLink href="#">My Wishlist</FooterLink>
          </Column>
          <Column>
            <Heading>Shoping Guide</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink>
                <h3>Phone :</h3>
                <span>+62 711 247 555</span>
            </FooterLink>
            <FooterLink href="#">
            <h3>Mail :</h3>
            <span>info@1dayfresh.com</span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
       
    )            
}


export default Footer;