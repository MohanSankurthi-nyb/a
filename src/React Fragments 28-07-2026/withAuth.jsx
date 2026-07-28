function withAuth(WrappedComponent) {
  return function AuthComponent({ isLoggedIn, ...props }) {
    if (!isLoggedIn) {
      return <h2>Please login to access this page.</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;