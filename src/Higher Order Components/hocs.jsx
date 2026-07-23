import React from "react";
// Authentication HOC
export const withAuthentication = (WrappedComponent) => {
  return function Authentication(props) {
    const isAuthenticated = true; // Change to false to test
    if (!isAuthenticated) {
      return <h2>Please log in to continue.</h2>;
    }
    return <WrappedComponent {...props} />;
  };
};
// Loading HOC
export const withLoading = (WrappedComponent) => {
  return function Loading({ isLoading, ...props }) {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};
// Authorization HOC
export const withAuthorization = (WrappedComponent) => {
  return function Authorization(props) {
    const userRole = "admin"; // Change to "user" to test

    if (userRole !== "admin") {
      return <h2>Access Denied</h2>;
    }
    return <WrappedComponent {...props} />;
  };
};