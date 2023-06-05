
const InputFieldsEmpDet = () => {
    return (
        <div className="row mb-2 ">
        <div className="col-lg-12 ">
            <div className="card inpufieldmargin inputfieldcolors shadow">
                <div className="card-body inputfieldcolors">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <h2 className="mb-4">Employee Details</h2>
                            <label className="form-label">Employee ID</label>
                            <input id="employeeid" name="employeeid" type="text" className="form-control fieldcolor" placeholder=""/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <label className="form-label">Firstname</label>
                            <input id="firstname" name="firstname" type="text" className="form-control fieldcolor" placeholder="Enter your firstname"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Middlename</label>
                            <input id="middlename" name="middlename" type="text" className="form-control fieldcolor" placeholder="Enter your middlename"/>    
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Lastname</label>
                            <input id="lastname" name="lastname" type="text" className="form-control fieldcolor" placeholder="Enter your lastname"/>    
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <label className="form-label">Contact number</label>
                            <input id="contactnumber" name="contactnumber" type="tel" className="form-control fieldcolor" placeholder="Enter your contact number"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">E-mail address</label>
                            <input id="email" name="email" type="email" className="form-control fieldcolor" placeholder="Enter your email add"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Gender</label>
                            <input id="gender" name="gender" type="" className="form-control fieldcolor" placeholder="Enter your gender"/>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-md-6">
                            <select className="entry-input form-control mb-2 fieldcolor" name="dateofbirth" id="dateofbirth">
                                <option value="">- - - Select Birthday - - -</option>
                            </select>        
                        </div>
                        <div className="col-md-6">
                            <select className="entry-input form-control fieldcolor" name="address" id="address">
                                <option value="">- - - Select Address - - -</option>
                            </select>       
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Emergency Contact Name</label>
                            <input id="emergencycontactname" name="emergencycontactname" type="tel" className="form-control fieldcolor" placeholder="Enter emergency name"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Emergency Contact Number</label>
                            <input id="emergencycontactnumber" name="emergencycontactnumber" className="form-control fieldcolor" placeholder="Enter emergency number"/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <select className="entry-input form-control mb-2 fieldcolor" name="nationality" id="nationality">
                                <option value="">- - - Select Nationality - - -</option>
                            </select>        
                        </div>
                        <div className="col-md-6">
                            <select className="entry-input form-control fieldcolor" name="maritalstatus" id="maritalstatus">
                                <option value="">- - - Select Marital Status - - -</option>
                            </select>       
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <button id="addBtn" name="addBtn" className="d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm w-50 homebtn">
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

export default InputFieldsEmpDet