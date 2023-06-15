import {validatoremped} from '../inputfield_validation/validator';
import React, { useState } from "react";

const InputFieldsEmpEd = () => {

    const [degree, setInput1] = useState("");
    const [fieldofstudy, setInput2] = useState("");
    const [institution, setInput3] = useState("");
    

    const validatorOnClick = () => {
        validatoremped(
            degree,
            fieldofstudy,
            institution,
        );
      };

    return (
        <div className="row mb-2 ">
        <div className="col-lg-12 ">
            <div className="card inpufieldmargin inputfieldcolors shadow">
                <div className="card-body inputfieldcolors">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <h2 className="mb-4">Employee Education</h2>
                            <label className="form-label">Employee ID</label>
                            <input id="employeeid" name="employeeid" type="text" className="form-control fieldcolor" placeholder=""/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Degree</label>
                            <input onChange={(e) => setInput1(e.target.value)} value={degree} id="degree" name="degree" type="text" className="form-control fieldcolor" placeholder="Enter degree"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Field of Study</label>
                            <input onChange={(e) => setInput2(e.target.value)} value={fieldofstudy} id="fieldofstudy" name="fieldofstudy" type="text" className="form-control fieldcolor" placeholder="Enter field of study"/>    
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Institution</label>
                            <input onChange={(e) => setInput3(e.target.value)} value={institution} id="institution" name="institution" type="tel" className="form-control fieldcolor" placeholder="Enter institution"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Graduation Date</label>
                            <input type="date" id="graduationdate" name="graduationdate" className="entry-input form-control fieldcolor" />        
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

export default InputFieldsEmpEd