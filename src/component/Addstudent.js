import React from 'react'
import Navebar from './Navebar'

const Addstudent = () => {
  return (
    <div>
      <Navebar/>
      <div className="container">
    <div className="row g-2 ">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="">Name</label><br/>
            <input type="text" className="form-control"/>
            <label for="">Admission number </label><br/>
            <input type="text" className="form-control"/>
            
</div>
                
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="">Roll Number</label><br/>
            <input type="text" className="form-control"/>
            <label for="">University reg number </label><br/>
            <input type="text" className="form-control"/>
            </div>



                <div className="row g-2 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="col">
                        <label for="">college</label><br/>
                        <input type="text" className="form-control"/></div><br/><br/>
                        
                    </div>
                    <div className= " col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success">register</button>

                    </div>

                </div>
            </div>


    </div>
  )
}

export default Addstudent