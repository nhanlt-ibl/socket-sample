import * as React from "react";
import { Route, Switch } from "react-router-dom";
// import JView from 'react-json-view';
import EventList from "./Features/EventList";
import { Grid, Cell } from "react-md";
import EventData from "./Features/EventData";
export interface IAppProps {}
interface IAppState {
  state: "error" | "success" | "none";
  input: any;
  error: any;
  output: any;
}
export default class IApp extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      state: "none",
      error: "",
      output: {}
    };
  }
  onLoadFile=(rawResult:any)=>{
    if(rawResult){
      console.log(rawResult[0])
      let results = rawResult.split(',')
      console.log("results",results)
      this.setState({
        ...this.state,
        output:results,
        state:'success'
      })
    }

  }
  onInputChange=(e:any)=>{
    const files = e.target.files[0]
    const read = new FileReader()
    read.onload=(file:any)=>{
      this.onLoadFile(file.target.result)
    }
    read.readAsText(files)
  }
  public render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            const { state, output} = this.state;
            if (state === "error") {
              return <div>There is something wrong</div>;
            }
            if (state === "none") {
              return <input  onChange={this.onInputChange} type="file" accept="*.csv" />;
            }
            if (state === "success") {
              return (
                <Grid>
                  <Cell size={2} />
                  <Cell size={2}>
                    <EventList />
                  </Cell>
                  <Cell size={6}>
                    <EventData data={output}/>
                  </Cell>
                  <Cell size={2} />
                </Grid>
              );
            }
            return <div />;
          }}
        />
      </Switch>
    );
  }
}
