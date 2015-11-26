const off = <i>First</i>
var checkedItem = "month";

function onChange(id) {
  console.log(id);
  checkedItem = id;
}

function render() {
  ReactDOM.render(<div>
    <div><ToggleSwitch.Light title="abc" off={off} on="second" theme="ios" /></div>
    <div>
      <ToggleSwitch.Toggle name="view" theme="candy" blue onChange={onChange} checked={checkedItem}>
        <ToggleSwitch.Toggle.Item id="week" value="w">Week</ToggleSwitch.Toggle.Item>
        <ToggleSwitch.Toggle.Item id="year" value="y" checked>Year</ToggleSwitch.Toggle.Item>
        <ToggleSwitch.Toggle.Item id="month" value="m">Month</ToggleSwitch.Toggle.Item>
      </ToggleSwitch.Toggle>
    </div>
  </div>, document.getElementById("examples"));
}

render();
