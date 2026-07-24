function withMessage(Component) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <h3>This is added by HOC</h3>
        <Component {...props} />
      </div>
    );
  };
}

export default withMessage;