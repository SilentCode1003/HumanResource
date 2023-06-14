import {validatoremplodet} from '../inputfield_validation/validator';
import {validateNumberInput} from '../inputfield_validation/validator';
import React, { useState, useEffect } from "react";

const InputFieldsEmploymentDet = () => {

    const [salary, setInput1] = useState("");
    const [employmentstatus, setInput2] = useState("");

    const validatorOnClick = () => {
        validatoremplodet(
            salary,
            employmentstatus,
        );
      };

      useEffect(() => {
        validateNumberInput();
      }, []);

    return (
        <div className="row mb-2 ">
        <div className="col-lg-12 ">
            <div className="card inpufieldmargin inputfieldcolors shadow">
                <div className="card-body inputfieldcolors">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <h2 className="mb-4">Employment Details</h2>
                            <label className="form-label">Employee ID</label>
                            <input id="employeeid" name="employeeid" type="text" className="form-control fieldcolor" placeholder=""/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <label className="form-label">Department</label>
                            <select className="entry-input form-control fieldcolor" name="department" id="department">
                                <option value="">- - - Select Department - - -</option>
                                <option value="married">IT</option>
                                <option value="divorced">HR</option>
                                <option value="separated">MAINTENANCE</option>
                                <option value="nvmarried">FIELD</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Date of Hired</label>
                            <input type="date" id="dateofhire" name="dateofhire" className="entry-input form-control fieldcolor" />        
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Employment Status</label>
                            <input onChange={(e) => setInput2(e.target.value)} value={employmentstatus} id="employmentstatus" name="employmentstatus" type="text" className="form-control fieldcolor" placeholder="Enter employment status"/>    
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <label className="form-label">Salary</label>
                            <input onChange={(e) => setInput1(e.target.value)} value={salary} id="salary" name="salary" type="tel" className="form-control fieldcolor number-validator" placeholder="Enter Salary"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Probation Period</label>
                            <input type="date" id="probationperiod" name="probationperiod" className="entry-input form-control fieldcolor" />        
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Performance Review Schedule</label>
                            <input type="date" id="performancereviewschedule" name="performancereviewschedule" className="entry-input form-control fieldcolor" />        
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <button id="addBtn" name="addBtn" className="d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm w-50 inputbtn" onClick={validatorOnClick}>
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

export default InputFieldsEmploymentDet