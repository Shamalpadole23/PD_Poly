import {useState} from "react";
import '../styles/navbar.css';
import 'https://kit.fontawesome.com/a076d05399.js';
import Image1 from './drpdpoly.png'
import Image2 from './president.jpg'
import Image3 from './grgosavisir.jpg'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Navbar(){
    return(
        <div className="container">
            <div className="container-items">
                <div className="navbar">
                    <i class="fa fa-envelope"></i><p>principal@drpdpoly.org</p>
                </div>
                <div className="header">
                    <img src={Image1} alt="" /> 
                    <div className="bottom">
                        <ul>
                            <li className="home">Home</li>
                            <li>About Us</li>
                            <li>Academics</li>
                            <li>Infrastructure</li>
                            <li>Laboratories</li>
                            <li>Departments</li>
                            <li>Photo gallary</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>  
                </div>
                <div className="main">
                    <div className="sidebar">
                        <div className="leftside">
                            <div>
                                <div className="heading"><h4>IMPORTANT LINKS</h4></div>
                                <p></p><a href="#">Women's Grievance Cell</a> <p></p> <hr />
                                <p></p> <a href="#">Grievance Redressal  <a href="#">Committee</a> </a> <p></p> <hr />
                                <p></p> <a href="#">Anti Ragging Committee</a> <p></p> <hr />
                                <p></p> <a href="#">Action Against Ragging</a> <p></p> <hr />
                                <p></p><a href="#">RTI Act</a> <p></p> <hr />
                                <p></p><a href="#">Audit Statement Grant - <a href="#"> 2019</a> </a> <p></p> <hr />
                                <p></p><a href="#">Online Activity Conducted <a href="#">by Institute during Lock-</a> <a href="#">Down period</a> </a> <p></p> <hr />
                                <p></p><a href="#">Audit Statement Grant - <a href="#">2020-21</a></a> <p></p> <hr />
                            </div>
                        </div>
                        <div className="rightside">
                            <div>
                                <div className="heading"><h4>IMPORTANT LINKS</h4></div>
                                <p></p><a href="#">Women's Grievance Cell</a> <p></p> <hr />
                                <p></p> <a href="#">Grievance Redressal  <a href="#">Committee</a> </a> <p></p> <hr />
                                <p></p> <a href="#">Anti Ragging Committee</a> <p></p> <hr />
                                <p></p> <a href="#">Action Against Ragging</a> <p></p> <hr />
                                <p></p><a href="#">RTI Act</a> <p></p> <hr />
                                <p></p><a href="#">Audit Statement Grant - <a href="#"> 2019</a> </a> <p></p> <hr />
                                <p></p><a href="#">Online Activity Conducted <a href="#">by Institute during Lock-</a> <a href="#">Down period</a> </a> <p></p> <hr />
                                <p></p><a href="#">Audit Statement Grant - <a href="#">2020-21</a></a> <p></p> <hr />
                            </div>
                        </div>
                        <div className="midside">
                            <marquee behavior="" direction="left">
                            <p>Technical Event: Techno-Stream 2023-Online </p>
                            <p>Branch Wise Choise Code for Admission </p>
                            <p>Additional Non CAP ROUND Schedule</p>
                            <p>Admission 2022-23 Raquired Document</p>
                            </marquee>
                        </div>
                        <div className="bottom">
                            
                            </div> 
                    </div>
                </div> <br /><br />
                <div className="middle">
                    <div className="vision">
                        <i className="fa fa-bookmark"></i>
                        <h2>VISION</h2>
                        <p>To be a leader in imparting technical education to contribute as <br /> a valuable resource for industry and society.</p>
                    </div>    
                    <div className="mission">
                    <i className="fa fa-bookmark"></i>
                        <h2>MISSON</h2>
                        <p>Providing knowledge through the hands-on skills to empower professional qualities.</p>
                    </div>
                </div>  <br />
                <div className="links">
                <Card style={{ width: '25rem', marginLeft:'18%', borderLeft:'5px solid orange'}}>
                <Card.Title style={{fontSize:'16px', paddingTop:'20px', letterSpacing:'3px',marginLeft:'8px', color:'#000000', fontWeight:'1000px',fontStyle:'bold'}} >A WORD</Card.Title>
                <Card.Title style={{fontSize:'30px', paddingTop:'10px',marginLeft:'5px', fontWeight:'1000px', letterSpacing:'0.1px',color:'#000000'}}>From Precident</Card.Title>
       <Card.Img  style={{marginLeft:'50px', paddingTop:'20px'}}  variant="top" src={Image2}/>
      <Card.Body>
        
        <Card.Text>
        <h4 style={{letterSpacing:'2px', color:'#474747', marginLeft:'10px'}}>Shri. Harshavardhan Deshmukh</h4>
        <h4 style={{alignItems:'center', color:'#474747', letterSpacing:'2px', paddingTop:'10px', textAlign:'justify', marginLeft:'10px'}}>The industrial skills assets and social moral values build ideal building blocks of the nation, the students. Since the inception of this institute, it has been observed scrupulously that the motives of the education</h4>
        </Card.Text>
        <Button variant="primary" style={{float:'right', padding:'10px 10px 10px 10px', marginTop:'20px', backgroundColor:'orangered', borderColor:'orangered', color:'white', letterSpacing:'0.2px', fontSize:'18px'}}>Read More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem', marginLeft:'10%', borderLeft:'5px solid orange' }}>
    <Card.Title style={{fontSize:'16px', paddingTop:'20px', letterSpacing:'3px', marginLeft:'10px',  color:'#000000'}} >A WORD</Card.Title>
    <Card.Title style={{fontSize:'30px', paddingTop:'10px',marginLeft:'5px', fontWeight:'1000px', letterSpacing:'0.1px', marginLeft:'10px', color:'#000000'}}>From I/C Principal</Card.Title>
      <Card.Img style={{marginLeft:'50px', paddingTop:'20px'}} variant="top" src={Image3}  />
      <Card.Body>
        
        <Card.Text>
        <h4 style={{letterSpacing:'2px', color:'#474747', marginLeft:'10px', marginTop:'10px'}}>Dr. G.R. Gosavi</h4>
        <h4 style={{alignItems:'center', color:'#474747', letterSpacing:'2px', paddingTop:'10px', textAlign:'justify', marginLeft:'10px'}}>The institute has its tradition set as an aim, to lead in educating the techno disparate aspirants with quality adherent inputs, exemplified as state of art, experienced, linguistic wise rich faculties, comprehensive</h4>

        </Card.Text>
        <Button variant="primary" style={{float:'right', padding:'10px 10px 10px 10px', marginTop:'20px', backgroundColor:'orangered', borderColor:'orangered', color:'white', letterSpacing:'0.2px', fontSize:'18px', marginTop:'40px'}}>Read More</Button>
      </Card.Body>
    </Card>
                </div> <br />
                <br /><br />
                
                <div className="link">
                    <h1>IMPORTANT LINKS <br /> -----------------------</h1>
                    <div className="lnk">
                    <div>Executive Council</div>
                    <div className="womans">Womens Grievance Cell</div>
                    <div>Grievance Redressal Committee</div> <br /> <br /> <br />
                    <div>Anti Ragging Committee</div>
                    <div>Action Against Ragging</div>
                    <div>RTI Act</div>
                    </div>
                </div>
                <div className="cards">
                    <div className="leftside">
                    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card style={{disply:'flex'}}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card> 
        </Col>
      ))}
    </Row>
                    </div>
                    <div className="rightside">2</div>
                </div>
              
                <div className="footer"></div>
            </div>
        </div>   
    )
}




/*   

4table
login form
user databsename
usertable  idname user_id password  mr A 

reciepe   idname desc imageurl  createrid


ingredient id name amount unit reciepe_id

process id step reciepe


*/