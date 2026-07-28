function withBorder(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div
        style={{
          border: "2px solid blue",
          padding: "15px",
          margin: "15px",
          borderRadius: "10px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withBorder;