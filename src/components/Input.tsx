interface InputProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
}

const Input = ({ type, name, label, placeholder }: InputProps) => {
  return (
    <div className="relative">
      <label className="absolute left-4 -top-3 bg-white px-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="py-4 px-6 w-full font-bold border-solid border-[3px] border-black rounded-lg"
        type={type}
        name={name}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

export default Input;
