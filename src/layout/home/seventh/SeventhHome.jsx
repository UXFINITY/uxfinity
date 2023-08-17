import React from 'react'
import './SeventhHome.css'
import person from "../../../assets/others/Person.png"
import person2 from "../../../assets/others/Person2.jpg"

const comentarios=[
  {
    id:31,
    name:'Philip Jhonas',
    company:'Refisal Ltmd',
    comment:'“Fast, effective, comunicative, work with UXFinity is a great xperiences, they understood and found our problem. I recommend really them” ',
    img:person
  },{
    id:31,
    name:'Johanna Miller',
    company:'Refisal Ltmd',
    comment:'“Fast, effective, comunicative, work with UXFinity is a great xperiences, they understood and found our problem. I recommend really them” ',
    img:person2
  }
]


function SeventhHome() {
  return (
    <div className='sv_container'>
{comentarios.map((com,ind)=>(
  <section className={`sv_s_container ${(ind%2!=0)?'sv_s_container_invert':''}`} key={com.id}>
  <picture><img src={com.img} alt={com.name} /></picture>
  <div className='sv_s_text'>
      <p>{com.comment} </p>
      <div className='sv_s_name'>
          <h3>{com.name}</h3>
          <span>{com.company}</span>
      </div>
  </div>
</section>
))}
    </div>
  )
}

export default SeventhHome