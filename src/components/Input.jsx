
export const Input = ({type, 
    placeholder, 
    value, 
    onChange, 
    onMouseDown, 
    onMouseUp,
    name,
    btnText,
}) => {

    const shouldShowTextAreaForComment = () => {
        return name === "comment" && value && value.length >= 8
    }

    return <div>
        {
        shouldShowTextAreaForComment()
        ? <textarea name="" id="" cols="30" rows="10">{value}</textarea>
        : <input
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />}

        {name === "password" &&
            <input 
                type="button"
                value={btnText}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
        />}
    </div>
}