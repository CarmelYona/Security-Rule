import { useState, useEffect } from "react";
import { CheckboxList } from "../cmps/checkbox-list";
import { Header } from "../cmps/header";
import { SelectCmp } from "../cmps/select";

export const MainPage = () => {
    const securityRulesData = [
        { name: "מזכירה", checked: false },
        { name: "פרקליט", checked: false },
        { name: "שוטר", checked: false },
        { name: "מנהל מערכת", checked: false },
        { name: "לקוח", checked: false },
        { name: "עובד מדינה", checked: false },
        { name: "מורה", checked: false },
        { name: "גננת", checked: false },
    ];
    const [environment, setEnvironment] = useState("");
    const [user, setUser] = useState("");
    const [securityRules, setSecurityRules] = useState([]);

    useEffect(() => {
        setSecurityRules([...securityRulesData]);
    }, []);

    const handleEnviromentChange = ({ target: { value } }) => {
        setEnvironment(value);
    };

    const handleUserChange = ({ target: { value } }) => {
        setUser(value);
    };

    const handleCheckBoxChange = ({ target: { id } }) => {
        let tempSecurityRules = [...securityRules];
        tempSecurityRules[id].checked = !securityRules[id].checked;
        setSecurityRules(tempSecurityRules);
    }

    return (
        <section className="main-page">
            <div className="main-page-container container">
                <Header />
                <main className="main-container">
                    <SelectCmp handleEnviromentChange={handleEnviromentChange} handleUserChange={handleUserChange} environment={environment} user={user} />
                    <CheckboxList handleCheckBoxChange={handleCheckBoxChange} securityRules={securityRules} />
                    <div className="save-wrapper">
                        <button className="w-100 btn btn-lg btn-primary">שמור שינויים</button>
                    </div>
                </main>
            </div>
        </section>
    )
}