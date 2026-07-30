function FuncComp() {

  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <h2>Event Binding Example</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default FuncComp;