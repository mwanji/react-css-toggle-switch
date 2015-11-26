import classnames from "classnames";
import React from "react";

class Toggle extends React.Component {
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
        <ToggleItemInput key={child.props.id + "-input"} id={child.props.id} name={this.props.name} checked={this.state.checkedItem === child.props.id} onChange={this.onChange.bind(this, child.props.id)} />,
        <ToggleItemLabel key={child.props.id + "-label"} id={child.props.id} label={child.props.label} />
      ];
    }, this);
  
    return (<div className={classes}>
      {children}
      <a></a>
    </div>);  
  }
}

Toggle.defaultProps = {
  theme: "candy"
};

Toggle.propTypes = {
  checkedItem: React.PropTypes.string,
  theme: React.PropTypes.string,
  blue: React.PropTypes.bool,
  yellow: React.PropTypes.bool
};

class ToggleItem extends React.Component {
  render() {
    return (<span>
      <input id={this.props.id} name={this.props.name} type="radio" defaultChecked={this.props.checked} />
      <label htmlFor={this.props.name} onclick="">{this.props.label}</label>
      </span>);
  }
}

ToggleItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.any.isRequired,
  value: React.PropTypes.any,
  checked: React.PropTypes.bool
};

const ToggleItemInput = ({ id, name, checked, onChange }) => {
  return <input id={id} name={name} type="radio" checked={checked} onChange={onChange} />;
};

const ToggleItemLabel = ({id, label}) => <label htmlFor={id} onclick="">{label}</label>;

Toggle.Item = ToggleItem;
 
export default Toggle;
