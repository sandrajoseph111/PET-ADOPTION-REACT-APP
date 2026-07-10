import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const Viewpet = () => {
            const [data, ChangeData]=useState([])
            const fetchData =()=>{

                axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/pet.json").then(

                    (Response)=>{
                        ChangeData(Response.data)}
                ).catch()
            }
            useEffect(

                ()=>{

                    fetchData()
                },[]
            )

  return (
    <div>
        <NavigationBar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h2>VIEW PET</h2>
                    <div className="row g-3">
                        {data.map(

                            (value,index)=>{

                                return(
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card" >
  <img src={value.image}
  
  class="card-img-top" alt="..." height="300"></img>
  <div class="card-body">
    <h5 class="card-title">{value.petName}</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">{value.species}</li>
    <li class="list-group-item">{value.breed}</li>
    <li class="list-group-item">{value.age}</li>
    <li class="list-group-item">{value.gender}</li>
    <li class="list-group-item">{value.vaccinated}</li>
    <li class="list-group-item">{value.adoptionFree}</li>
    <li class="list-group-item">{value.description}</li>
  </ul>
  </div>
</div>
                        </div>

                                )
                            }
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewpet