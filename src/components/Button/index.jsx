const Button = ({ value, handleClick, userName }) => {
  return (
    <button onClick={() => handleClick(!value)}>
      {value ? `Signout out of ${userName}` : 'Login'}
    </button>
  );
};

export default Button;
