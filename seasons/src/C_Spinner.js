import React from "react";

class C_Spinner extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui massiv text loader">{this.props.message}</div>
      </div>
    );
  }
}

C_Spinner.defaultProps = {
  message: "loading...."
};

export default C_Spinner;
