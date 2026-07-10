import React from 'react'
import NavigationBar from './NavigationBar'

const Addpet = () => {
  return (
    <div>
        <NavigationBar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <h2>ADD PET</h2>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="" className="form-label">Pet ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                
                                <label htmlFor="" className="form-label">Pet Name</label>
                            <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Species</label>
                            <input type="text" className="form-control" />
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="" className="form-label">Breed</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="" className="form-label">Age</label>
                            <input type="number" className="form-control" />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="" className="form-label">Gender</label><br></br>
                            <input type="radio" />Male<br></br>
                            <input type="radio" />Female
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="" className="form-label">Vaccinated</label><br></br>
                            <input type="radio" />Yes<br></br>
                            <input type="radio" />No
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="" className="form-label">Adoption Fee</label>
                            <input type="number" className="form-control" />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">



                            <label htmlFor="" className="form-label"> Image Url</label>
                            <input type="url" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="" className="form-label">Description</label>
                            <input type="text" className="form-control" />
                        </div>


                        

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-success">Add Pet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Addpet