import {validatorempexp} from '../inputfield_validation/validator';
import React, { useState } from "react";

const InputFieldsEmpExp = () => {

    const [company, setInput1] = useState("");
    const [jobtitle, setInput2] = useState("");
    const [jobdescription, setInput3] = useState("");
    
    const validatorOnClick = () => {
        validatorempexp(
            company,
            jobtitle,
            jobdescription,
        );
      };

    return (
        <div className="row mb-2 ">
        <div className="col-lg-12 ">
            <div className="card inpufieldmargin inputfieldcolors shadow">
                <div className="card-body inputfieldcolors">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <h2 className="mb-4">Employee Work Experience</h2>
                            <label className="form-label">Employee ID</label>
                            <input id="employeeid" name="employeeid" type="text" className="form-control fieldcolor" placeholder=""/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Company</label>
                            <input onChange={(e) => setInput1(e.target.value)} value={company} id="company" name="company" type="text" className="form-control fieldcolor" placeholder="Enter company"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Job Title</label>
                            <input onChange={(e) => setInput2(e.target.value)} value={jobtitle} id="jobtitle" name="jobtitle" type="text" className="form-control fieldcolor" placeholder="Enter job title"/>    
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <label className="form-label">Start Date</label>
                            <input type="date" id="startdate" name="startdate" className="entry-input form-control fieldcolor" />        
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">End Date</label>
                            <input type="date" id="enddate" name="enddate" className="entry-input form-control fieldcolor" />        
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Job Description</label>
                            <input onChange={(e) => setInput3(e.target.value)} value={jobdescription} id="jobdescription" name="jobdescription"  className="form-control fieldcolor" placeholder="Enter job description"/>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <button id="addBtn" name="addBtn" className="d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm w-50 inputbtn" onClick={validatorOnClick} variant="outline-danger">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            Add
                        </button> 
                    </div>
                </div>      
            </div>
        </div>
    </div>
    )
}

export default InputFieldsEmpExp