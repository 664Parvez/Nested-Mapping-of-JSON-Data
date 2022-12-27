import React from 'react'
import Card from "../Api/card.json"

const Home = () => {
    

  return (

    <>

        
            {
                Card.map((items) => {
                    return(
                        <>
                            <h1 className='text-center'>{items.name}</h1>
                            <div className="row">
                                {
                                    items.card.map((items_card) => {
                                        return(
                                            <div className="col-lg-4">
                                                <div className="card">
                                                    <h3 className='card-title'>{items_card.title}</h3>
                                                    <p>{items_card.paragraph}</p>
                                                </div>
                                            </div> 
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                })
            }
 
            
        

        
    </>
  )
}

export default Home