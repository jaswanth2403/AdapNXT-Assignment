import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const details=[{
  uniName:"Acharya Nagarjuna University , Guntur",
  instName:"Krishnaveni Degree College",
  year:"2018-2021",
  stream:"Bachelor of Science in Computer Science",
  grade:"82 % "
},
{
  uniName:"Board Of Intermediate Education , Andhra Pradesh",
  instName:"Scholars Junior College",
  year:"2016-2018",
  stream:"MPC",
  grade:"92 % "
},
{
  uniName:"Board Of Secondary Education , Andhra Pradesh",
  instName:"Scholars International School",
  year:"2015-2016",
  stream:"",
  grade:"92 % "
}
]
const Dashboard = () => {
  return (
    <div className='edu-container'>{details.map((each)=>
      <div className='edu-items'>
      <h4><i style={{color:"red"}} class="bi bi-mortarboard-fill">  </i>{each.uniName}</h4>
      <h6>{each.instName}</h6>
      <h6>{each.year}</h6>
      <p>{each.stream} - {each.grade}</p>
    </div>
    )}
      
    </div>
  )
}

export default Dashboard
