function RadioOption({children,resource,handleRadioChange,name}) {
    return (
        <div className="form-check">
            <input 
                className="form-check-input" 
                type="radio" 
                name={name} 
                id={resource.id} 
                value={resource.id} 
                onChange={handleRadioChange} 
            />
            <label className="form-check-label" htmlFor={resource.id}>{children}</label>
         </div>
    )
}

export default RadioOption