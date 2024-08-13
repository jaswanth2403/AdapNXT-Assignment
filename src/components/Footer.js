import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

function Footer() {
  return (
    <>
      <Navbar fixed="bottom" bg="dark" data-bs-theme="dark" className='footer-container'>
        <Container>
          <div className='footer-text'>
            <h6>TO CONNECT WITH ME !</h6>
          </div>
          <div className='icons-container'>
            <div className='icons'>
              <a style={{color:"white",textDecoration:"none"}} href='https://www.linkedin.com/in/jaswanthsaganaboina/' target='_blank' rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className='icons'>
              <a style={{color:"white",textDecoration:"none"}} href="mailto:jaswanthsaganaboina@gmail.com">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
            <div className='icons'>
              <a style={{color:"white",textDecoration:"none"}} href='https://github.com/jaswanth2403' target='_blank' rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
