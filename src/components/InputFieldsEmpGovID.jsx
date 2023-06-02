
const InputFields = () => {
    return (
        <div className="row mb-2 ">
        <div className="col-lg-12 ">
            <div className="card inpufieldmargin inputfieldcolors">
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
                            <input id="sssid" name="sssid" type="text" className="form-control fieldcolor" placeholder="Enter your firstname"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Pag-IBIG ID</label>
                            <input id="pagibigid" name="pagibigid" type="text" className="form-control fieldcolor" placeholder="Enter your middlename"/>    
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Philhealth</label>
                            <input id="philhealth" name="philhealth" type="tel" className="form-control fieldcolor" placeholder="Enter your contact number"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">TIN ID</label>
                            <input id="tinid" name="tinid" className="form-control fieldcolor" placeholder="Enter your email add"/>
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

export default InputFields