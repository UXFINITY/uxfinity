import React from 'react'
import "./FouthHome.css"
function FouthHome() {
  return (
    <div className='ft_container'>
        <section className='ft_items_container'>
            <div className='ft_items ft_text'>
                <h3>
                Your MVP in 30 days
                </h3>
                <h2>your idea into prototype in 30 days</h2>
                <p>Instead of jumping into long and expensive development processes, we build out the initial prototype in a way that allows to either change it quickly, or scale it with <span className='ft_items_sub'>additional technologies</span><span className='ft_items_sub'> when necessary.*</span>
</p>
            </div>
            <div className='ft_items ft_buttons'>
                <button>First muck ups ready in 1 week 📧</button>
                <button>We can start in the next 2 days or less 👨‍💻</button>
                <button>Prototye  in 30 days🚀</button>
            </div>
        </section>
    </div>
  )
}

export default FouthHome