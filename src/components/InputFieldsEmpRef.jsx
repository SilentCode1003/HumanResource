
const InputFieldsEmpRef = () => {
    return (
        <div className="row mb-2 ">
        <div className="col-lg-12 ">
            <div className="card inpufieldmargin inputfieldcolors shadow">
                <div className="card-body inputfieldcolors">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <h2 className="mb-4">Employee Reference</h2>
                            <label className="form-label">Employee ID</label>
                            <input id="employeeid" name="employeeid" type="text" className="form-control fieldcolor" placeholder=""/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <label className="form-label">Reference Name</label>
                            <input id="referencename" name="referencename" type="text" className="form-control fieldcolor" placeholder="Enter reference name"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Relationship</label>
                            <input id="relationship" name="relationship" type="text" className="form-control fieldcolor" placeholder="Enter relationship"/>    
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Contact Info</label>
                            <input id="contactinfo" name="contactinfo" type="text" className="form-control fieldcolor" placeholder="Enter contact info"/>    
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

export default InputFieldsEmpRef