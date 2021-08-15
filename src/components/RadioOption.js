function RadioOption({children,resource,handleRadioChange,name,setChecked,checked}) {
    return (
        <div className="form-check">
            <input 
                className="m-2" 
                type="radio" 
                name={name} 
                id={resource.id}
                checked={checked === resource.id} 
                value={resource.id} 
                onChange={handleRadioChange} 
                onClick={() => setChecked(resource.id)}
            />
            <label className="form-check-label" htmlFor={resource.id}>{children}</label>
         </div>
    )
}

export default RadioOption