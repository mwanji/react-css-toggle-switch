import classnames from "classnames";
import React from "react";

class ToggleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItem: props.checkedItem
    };
  }
  
  onChange(id) {
    this.props.onChange(id);
    this.setState({
      checkedItem: id
    });
  }
  
  render() {
    const classes = classnames("switch-toggle", "switch-" + this.props.theme, {
      "switch-candy-blue": this.props.blue === true,
      "switch-candy-yellow": this.props.yellow === true
    });
  
    const children = React.Children.map(this.props.children, (child) => {
      return [
        <input key={child.props.id + "-input"} id={child.props.id} name={this.props.name} type="radio" checked={this.state.checkedItem === child.props.id} onChange={this.onChange.bind(this, child.props.id)} />,
        <label key={child.props.id + "-label"} htmlFor={child.props.id} onclick="">{child.props.children}</label>
      ];
    }, this);
  
    return (<div className={classes}>
      {children}
      <a></a>
    </div>);  
  }
}

ToggleComponent.defaultProps = {
  theme: "candy"
};

ToggleComponent.propTypes = {
  checkedItem: React.PropTypes.string,
  theme: React.PropTypes.string,
  blue: React.PropTypes.bool,
  yellow: React.PropTypes.bool
};

class ToggleItem extends React.Component {
  render() {
    return (<span>
      <input id={this.props.id} name={this.props.name} type="radio" defaultChecked={this.props.checked} />
      <label htmlFor={this.props.name} onclick="">{this.props.children}</label>
      </span>);
  }
}

ToggleComponent.Item = ToggleItem;
 
export default ToggleComponent;
