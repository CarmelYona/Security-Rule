const CheckBox = ({ name, index, checked, handleCheckBoxChange }) => {
    return (
        <div className="checkbox">
            <label htmlFor={index}>{name}</label>
            <input type="checkbox" checked={checked} id={index} name={name} onChange={handleCheckBoxChange} />
        </div>
    )
}
export default CheckBox;