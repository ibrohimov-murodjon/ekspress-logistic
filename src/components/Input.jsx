const Input = ({ type, placeholder, required, premium, name }) => {
  return (
    <div
      className={`w-[365px] mobileMd:flex mobileMd:flex-col mobileMd:items-center desktopLg:w-[450px] mobileLg:w-[350px] ${
        premium && "tabletLgMax:max-w-[400px]"
      } ${premium && "tabletLg:max-w-[450px]"} mobileMd:max-w-[300px]`}
    >
      <input
        className={`w-full font-rubik bg-transparent max-w-[400px] text-[#fff] placeholder:pl-3 placeholder:text-[#fff] py-3 border-[2px] border-[#4E5683]  desktopLg:max-w-[500px] mobileLg:max-w-[350px] mobileMd:py-2 mobileSm:max-w-[250px]`}
        placeholder={placeholder}
        type={type}
        required={required}
        name={name}
      />
    </div>
  );
};

export default Input;
