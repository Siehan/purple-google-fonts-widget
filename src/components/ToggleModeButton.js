const ToggleModeButton = (props) => {
  const { darkMode, setDarkMode } = props;

  const handleButtonClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {!darkMode ? (
        <button onClick={handleButtonClick} className="btn btn-dark position-absolute top-20 start-50 translate-middle">
          🌒
        </button>
      ) : (
        <button
          onClick={handleButtonClick}
          className="btn btn-light position-absolute top-20 start-50 translate-middle"
        >
          🌔
        </button>
      )}
    </>
  );
};
export default ToggleModeButton;
