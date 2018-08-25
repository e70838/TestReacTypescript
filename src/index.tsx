import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
//import Login from "./Login";
import { Input } from "./input";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { user: "nemo" };
  }

  public render() {
    if (this.state.user == "nemo") {
      return (
        <div>
          <Input name="hjk" />
        </div>
      );
    } else {
      return (
        <div>
          <Hello name="CodeSandbox" />
          <h2>Start editing to see some magic happen {"\u2728"}</h2>
        </div>
      );
    }
  }
}

render(<App />, document.getElementById("root"));
