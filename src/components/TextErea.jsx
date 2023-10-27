function TextErea({value,name,title,setInputText}) {


    return (

        <>
            <label className='self-start'>{title}</label>
            <textarea
                name={name}
                className='border-2 rounded-md h-20 outline-none pl-2 resize-none'
                placeholder='Detailed comments about the condition'
                onChange={setInputText}
            ></textarea>
        </>
    )
}


export default TextErea