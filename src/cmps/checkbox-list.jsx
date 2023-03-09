import CheckBox from "./check-box"


export const CheckboxList = (props) => {
    const {handleCheckBoxChange,securityRules } = props
    return (
        <div className="check-box-wrapper">
            {securityRules.map((securityRule, index) => {
                return <CheckBox key={index} name={securityRule.name} checked={securityRule.checked} index={index} handleCheckBoxChange={handleCheckBoxChange} />
            })}
        </div>
    )
}