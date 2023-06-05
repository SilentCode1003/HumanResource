
const InputFieldsEmpEd = () => {
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
                            <input id="degree" name="degree" type="text" className="form-control fieldcolor" placeholder="Enter degree"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Field of Study</label>
                            <input id="fieldofstudy" name="fieldofstudy" type="text" className="form-control fieldcolor" placeholder="Enter field of study"/>    
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Institution</label>
                            <input id="institution" name="institution" type="tel" className="form-control fieldcolor" placeholder="Enter institution"/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Graduation Date</label>
                            <input id="graduationdate" name="graduationdate"  className="form-control fieldcolor" placeholder="Enter graduation date"/>
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

export default InputFieldsEmpEd