import React from "react";
import ReactDOM from "react-dom";

import LightComponent from "./Light";
import ToggleComponent from "./Toggle";

const ToggleSwitch = {
  Light: LightComponent, Toggle: ToggleComponent
};

export default ToggleSwitch;
export const Light = LightComponent;
export const Toggle = ToggleComponent;
