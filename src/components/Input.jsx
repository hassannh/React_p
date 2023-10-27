function Input ({title,type,name,setInputText,value}) {

return(
  <>
 <label>{title}</label>
 <input className='border-2 rounded-md h-10 outline-none pl-5' type={type} name={name} onChange={setInputText} />
  
  </>
 
)


}



export default Input
      
