import React from 'react'
import Navebar from './Navebar'

const Seachstudent = () => {
  return (
    <div>
      <Navebar/>
      <div class="container">
        <div class="row">
            
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-2">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="">University Reg No</label>
                        <input type="text" name="" id="" class="form-control"/>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button class="btn btn-success">search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


        </div>
                              
    )
}

export default Seachstudent