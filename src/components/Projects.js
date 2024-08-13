import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';
const details=[
{
  proLink:'https://weatherapp-kraftshala.netlify.app/',
  icon:<i class="bi bi-cloud-lightning-rain-fill"></i>,
  Name:'Weather Forecast',
  description:'Developed a weather forecast website where users can browse through current weather conditions , hourly forecasts and weather-related news for various locations.',
  techUsed:"React|HTML|CSS|Open Weather API|Bootstrap|Javascript"
},{
  proLink:'https://foodmunchjb.ccbp.tech/#',
  icon:<i class="bi bi-cart-check-fill"></i>,
  Name:'Food Munch',
  description:'Developed a responsive website for food store where users can see a list of food items, detailed information about a food items, offers.',
  techUsed:"HTML|CSS|Bootstrap|Javascript"
},
{
  proLink:'https://todojb.ccbp.tech/',
  icon:<i class="bi bi-list-task"></i>,
  Name:'GoogleKeep-clone-TODOS',
  description:'Developed a persistent todo application with CRUD operations to track list of tasks',
  techUsed:"HTML|CSS|Bootstrap|Javascript"

}

]
const Projects = () => {
  return (
    <div className='pro-container'>
      {details.map((each)=>
        <Card className='div-pro' style={{ width: '18rem' }}>
        <div className='pro-div'>{each.icon}</div>
      <Card.Body>
        <Card.Title>{each.Name}</Card.Title>
        <Card.Text>
          {each.description}
        </Card.Text>
        <button className='pro-button' ><a href={each.proLink} target='__blank'>Project Link</a></button>
      </Card.Body>
    </Card>
      )}
    </div>
  )
}

export default Projects
