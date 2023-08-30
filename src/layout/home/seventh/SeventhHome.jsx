import React from 'react'
import './SeventhHome.css'
import person from "../../../assets/others/Person.png"
import person2 from "../../../assets/others/Person2.jpg"
import LazyLoad from '../../../helpers/LazyLoad'
import HelpersFunction from '../../../helpers/HelpersFunction'
const comentarios=[
  {
    id:31,
    name:'Philip Jhonas',
    company:'Refisal Ltmd',
    comment:'“Fast, effective, comunicative, work with UXFinity is a great xperiences, they understood and found our problem. I recommend really them” ',
    img:person
  },{
    id:32,
    name:'Johanna Miller',
    company:'Refisal Ltmd',
    comment:'“Fast, effective, comunicative, work with UXFinity is a great xperiences, they understood and found our problem. I recommend really them” ',
    img:person2
  }
]


function SeventhHome() {

  const sevenRef=LazyLoad(true,{threshold:0})

  if(sevenRef.visible){
    const {current}=sevenRef.domRef
    HelpersFunction.LazyDisplay(current,'.sv_s_container','flex')
    HelpersFunction.LazyDisplay(current,'.sv_s_container_invert','flex')
  }

  return (
    <div className='sv_container' ref={sevenRef.domRef}>
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