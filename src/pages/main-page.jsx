import { useState } from "react"

export const MainPage = () => {
    const [environment, setEnvironment] = useState(null)
    const [user, setUser] = useState(null)
    const [securityRule, setSecurityRule] = useState([])

    const handleChange=()=>{


    }

    return (
        <section className="main-page">
            <div className="main-page-container container">

                <header>
                    <h1> CRM כלי לניהול הרשאות במערכות </h1>
                </header>

                <main className="main-container">
                    <div className="select-conainer">
                        <div>
                            <select onChange={handleChange} class="form-select" aria-label="Default select example">
                                <option selected>בחר סביבה</option>
                                <option value="1">תנופה פלילי - יצור</option>
                                <option value="2">מח"ש מודיעין </option>
                                <option value="3">תנופה אזרחי - יבוא</option>
                            </select>
                        </div>

                        <div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>בחר משתמש</option>
                                <option value="1">אברהם כהן</option>
                                <option value="2">משה יונה</option>
                                <option value="3">כרמל צפניה</option>
                            </select>
                        </div>
                    </div>

                    <div className="check-box-wrapper">
                        <div className="checkbox">
                            <label for="menger1">מנהל מערכת</label>
                            <input type="checkbox" name="" id="menger1" />
                        </div>
                        <div className="checkbox">
                            <label for="praklit">פרקליט</label>
                            <input type="checkbox" name="" id="praklit" />
                        </div>
                        <div className="checkbox">
                            <label for="secretary">מזכירה</label>
                            <input type="checkbox" name="" id="secretary" />
                        </div>
                        <div className="checkbox">
                            <div>מטפל בתקריות</div>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="checkbox">
                            <div>מנהל מערכת</div>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="checkbox">
                            <div>מנהל מערכת</div>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="checkbox">
                            <div>מנהל מערכת</div>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="checkbox">
                            <div>מנהל מערכת</div>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="checkbox">
                            <div>מנהל מערכת</div>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="checkbox">
                            <div>מנהל מערכת</div>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="checkbox">
                            <div>מנהל מערכת</div>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="checkbox">
                            <div>מנהל מערכת</div>
                            <input type="checkbox" name="" id="" />
                        </div>
                    </div>

                    <div className="save-wrapper">
                        <button>שמור שינויים</button>
                    </div>
                </main>
            </div>
        </section>
    )
}