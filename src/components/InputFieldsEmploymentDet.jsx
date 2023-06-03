
const InputFieldsEmploymentDet = () => {
    return (
        <div className="row mb-2 ">
        <div className="col-lg-12 ">
            <div className="card inpufieldmargin inputfieldcolors">
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
                            <input id="department" name="department" type="text" className="form-control fieldcolor" placeholder="Enter department"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Date of Hired</label>
                            <input id="dateofhire" name="dateofhire" type="text" className="form-control fieldcolor" placeholder="Enter date of hired"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Employment Status</label>
                            <input id="employmentstatus" name="employmentstatus" type="text" className="form-control fieldcolor" placeholder="Enter employment status"/>    
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <label className="form-label">Salary</label>
                            <input id="salary" name="salary" type="tel" className="form-control fieldcolor" placeholder="Enter Salary"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Probation Period</label>
                            <input id="probationperiod" name="probationperiod"  className="form-control fieldcolor" placeholder="Enter probation period"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Performance Review Schedule</label>
                            <input id="performancereviewschedule" name="performancereviewschedule"  className="form-control fieldcolor" placeholder="Enter performance review schedule"/>
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

export default InputFieldsEmploymentDet