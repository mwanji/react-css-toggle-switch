import React from "react";
import classnames from "classnames";

class Light extends React.Component {
  render() {
    const labelClasses = classnames("switch-light", "switch-" + this.props.theme, {
      "switch-candy-blue": this.props.blue === true,
      "switch-candy-yellow": this.props.yellow === true
    });
    
    return (<label className={labelClasses} onclick="">
      <input type="checkbox" defaultChecked={this.props.checked} />
      <strong>{this.props.title}</strong>
      <span>
        <span>{this.props.off}</span>
        <span>{this.props.on}</span>
        <a></a>
      </span>
    </label>);
  }
};

Light.defaultProps = {
  theme: "candy"
};

export default Light;
