function Input({label, type}) {
    return ( 
        <>
            {
                type === "checkbox" ? 
                <div className="block-check">
                    <input type={type}/>
                    <p className="para-check">{label}</p>
                </div> :
                <div className="block-form">
                    <label>{label}</label>
                    <input type={type}/>
                </div>
            }
        </> 
    );
}

function Textarea({label,maxLength,rows}) {
    return ( 
        <>
           <div className="block-form">
                <label>{label}</label>
                <textarea maxLength={maxLength} rows={rows}></textarea>
            </div> 
        </>
    );
}

function Button({value,type}) {
    return ( 
        <>
           <div className="block-button">
                <button type={type === "" ? "button" : type}>{value}</button>
            </div> 
        </>
    );
}

export {Input,Textarea,Button};