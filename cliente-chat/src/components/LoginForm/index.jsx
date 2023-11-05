const LoginForm = ({ username, setUsername, setIsLoged }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoged(true);
    sessionStorage.setItem("username", username);
  };

  return (
    <form className="bg-red-500">
      <label />
      Name:
      <input
        type="text"
        name="name"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input type="submit" value="Submit" onClick={handleLogin} />
    </form>
  );
};

export default LoginForm;
