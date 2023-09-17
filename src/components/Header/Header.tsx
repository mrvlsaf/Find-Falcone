import "./Header.css";

const Header = ({
  handleReset,
}: {
  handleReset: React.Dispatch<React.SetStateAction<Boolean>>;
}): JSX.Element => {
  return (
    <div className="header">
      <h1>Finding Falcone !</h1>
      <button className="reset" onClick={() => handleReset(true)}>
        Reset
      </button>
    </div>
  );
};

export default Header;
