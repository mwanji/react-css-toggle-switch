const off = <i>First</i>
var checkedItem = "year";

function onChange(id) {
  console.log(id);
  checkedItem = id;
}

function render() {
  ReactDOM.render(<div>
    <div><ToggleSwitch.Light title="abc" off={off} on="second" theme="ios" /></div>
    <div>
      <ToggleSwitch.Toggle name="view" theme="candy" blue onChange={onChange} checkedItem={checkedItem}>
        <ToggleSwitch.Toggle.Item id="week" value="w" label="Week" />
        <ToggleSwitch.Toggle.Item id="year" value="y" label="Year" checked />
        <ToggleSwitch.Toggle.Item id="month" value="m" label="Month" />
      </ToggleSwitch.Toggle>
    </div>
  </div>, document.getElementById("examples"));
}

render();
