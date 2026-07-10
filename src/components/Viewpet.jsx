import React from 'react'
import NavigationBar from './NavigationBar'

const Viewpet = () => {
  return (
    <div>
        <NavigationBar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPf_062JKWOBQr9rKxfyjLtlwzCn6Wwx_fJ6vQDIAgQ&s=10" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  </div>
</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewpet