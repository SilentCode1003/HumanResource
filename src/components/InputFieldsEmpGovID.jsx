import {validatorgovid} from '../inputfield_validation/validator';
import {validateNumberInput} from '../inputfield_validation/validator';
import React, { useState, useEffect } from "react";



const InputFieldsEmpGovID = () => {

    const [sssid, setInput1] = useState("");
    const [pagibigid, setInput2] = useState("");
    const [philhealth, setInput3] = useState("");
    const [tinid, setInput4] = useState("");
    

    const validatorOnClick = () => {
        validatorgovid(
            sssid,
            pagibigid,
            philhealth,
            tinid,
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
                            <h2 className="mb-4">Employee Government ID</h2>
                            <label className="form-label">Employee ID</label>
                            <input id="employeeid" name="employeeid" type="text" className="form-control fieldcolor" placeholder=""/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">SSS ID</label>
                            <input onChange={(e) => setInput1(e.target.value)} value={sssid} id="sssid" name="sssid" type="text" className="form-control fieldcolor number-validator" placeholder="Enter SSS ID"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Pag-IBIG ID</label>
                            <input onChange={(e) => setInput2(e.target.value)} value={pagibigid} id="pagibigid" name="pagibigid" type="text" className="form-control fieldcolor number-validator" placeholder="Enter Pag-IBIG ID"/>    
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Philhealth</label>
                            <input onChange={(e) => setInput3(e.target.value)} value={philhealth} id="philhealth" name="philhealth" type="tel" className="form-control fieldcolor number-validator" placeholder="Enter philhealth"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">TIN ID</label>
                            <input onChange={(e) => setInput4(e.target.value)} value={tinid} id="tinid" name="tinid"  className="form-control fieldcolor number-validator" placeholder="Enter TIN ID"/>
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

export default InputFieldsEmpGovID