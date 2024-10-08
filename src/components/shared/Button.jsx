const Button = ({ children, variant = "primary", classes }) => {
  const variants = {
    primary:
      "flex-1  px-[22px] rounded-md py-2 text-base font-medium text-white hover:opacity-70",
    secondary:
      " rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark", // Variant for 'Sign Up' button
  };
  return (
    <button className={`${classes} ${variants[variant]} `}>{children}</button>
  );
};

export default Button;
