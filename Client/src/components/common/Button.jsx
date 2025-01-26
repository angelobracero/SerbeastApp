const Button = ({
  children,
  className = "bg-lightblue rounded-full py-2 px-6",
  onClick = undefined,
}) => {
  return (
    <button
      className={`text-base transition duration-300 hover:brightness-150  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
