import React from "react";
import classnames from "classnames";

export default React.createClass({
  getDefaultProps() {
    return {
      theme: "candy"
    };
  },
  render() {
    console.log("theme=" + this.props.theme);
    
    const labelClasses = classnames("switch-light", "switch-" + this.props.theme, {
      "switch-candy-blue": this.props.blue === true,
      "switch-candy-yellow": this.props.yellow === true
    });
    
    return (<label className={labelClasses} onclick="">
      <input type="checkbox" />
      <strong>{this.props.title}</strong>
      <span>
        <span>{this.props.off}</span>
        <span>{this.props.on}</span>
        <a></a>
      </span>
    </label>);
  }
});