import "./inputfeild.css";
const InputFeild = ({
  img,
  label,
  name,
  type,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="input-feild">
      <label htmlFor="name">{label}</label>
      <img src={img} alt="input img" />
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputFeild;
