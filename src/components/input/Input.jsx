import './Input.css'

const Input = ({placeholder, data, children,type,defaultValue,required,onChange}) => {
  return (
    <div className='containerInput'>
        <label className='label'>{children}</label>
        <input
            className='input'
            data={data}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            required={required}
         />
    </div>
  )
}
export default Input
