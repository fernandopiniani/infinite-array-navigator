# Infinity Array Navigator
Infinity Array Navigator is a functional circular array implementation which let you navigate through arrays endlessly, focusing on one or more elements of a ordinary array.

# Example
You can check it working [here](https://codesandbox.io/s/l9wnpm79wm).

```javascript
import ReactDOM from "react-dom";
import React, { Component } from "react";
import InfinityArrayNavigator, { normalizeIndex} from "infinity-array-navigator";

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    selected: 0
    };
  }
  selectNext = () => {
    this.setState({
    selected: normalizeIndex(this.state.selected - 1, array)
    });
  };
  selectPrevious = () => {
    this.setState({
    selected: normalizeIndex(this.state.selected + 1, array)
    });
  };
  render() {
    return (
      <div>
        <h1>Infinite Array Navigator</h1>
        <p><b>Original Array: </b>{array}</p>
        <p><button onClick={this.selectNext}>previous</button></p>
        <p><b>Result Array: </b>{InfinityArrayNavigator(array, this.state.selected, 2)}</p>
        <p><button onClick={this.selectPrevious}>next</button></p>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("root"));
```