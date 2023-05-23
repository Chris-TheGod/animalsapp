export const App = () => {
  const handleClick = () => {
    console.log("x");
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
};
