export const SelectCmp = (props) => {
    const { user, handleEnviromentChange, environment, handleUserChange } = props
    return (
        <div className="select-conainer">
            <div className="select-wrapper">
                <select className="form-select" value={environment} aria-label="Default select example" onChange={e => { handleEnviromentChange(e) }}>
                    <option value="">בחר סביבה</option>
                    <option value="1">תנופה פלילי - יצור</option>
                    <option value="2">מח"ש מודיעין </option>
                    <option value="3">תנופה אזרחי - יבוא</option>
                </select>
            </div>
            <div className="select-wrapper">
                <select className="form-select" value={user} aria-label="Default select example" onChange={e => { handleUserChange(e) }}>
                    <option value="">בחר משתמש</option>
                    <option value="1">אברהם כהן</option>
                    <option value="2">משה יונה</option>
                    <option value="3">כרמל צפניה</option>
                </select>
            </div>
        </div>
    )
}