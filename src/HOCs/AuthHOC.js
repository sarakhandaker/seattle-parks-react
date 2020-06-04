import React from "react";

const AuthHOC = WrappedComponent => {

  return class AuthHOC extends React.Component {

    state = {
      authorized: false
    };

    componentDidMount() {
        this.checkLogin()
    }

    checkLogin = () => {
 
      if (!localStorage.getItem("token")) {
        this.props.history.push("/login")
      } else {
        fetch(`http://localhost:3000/check_user`, {
            headers:
        { "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }})
          .then(res => res.json())
        .then((resp) => {
          if (resp.error) {
            this.props.history.push("/login")
          } else {
            this.props.setUser(resp.user)
            this.setState({
              authorized: true
            });
          }
        });
      }
    };

    isAuthorized = () => {
      return this.state.authorized;
    };

    render() {
      return (
        <div>
          {this.isAuthorized() ? (
            <WrappedComponent {...this.props} />
          ) : (
            null
          )}
        </div>
      );
    }
  };
};

export default AuthHOC;