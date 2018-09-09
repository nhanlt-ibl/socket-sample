import * as React from "react";
import { Route, Switch } from "react-router-dom";
// import JView from 'react-json-view';
import EventList from "./Features/EventList";
import { Grid, Cell } from "react-md";
import EventData from "./Features/EventData";
export interface IAppProps { }
interface IAppState {
  output: any;
}
export default class IApp extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      output: {}
    };
  }

  public render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            const { output } = this.state;
            return (
              <Grid>
                <Cell size={4}>
                  <EventList />
                </Cell>
                <Cell size={8}>
                  <EventData data={output} />
                </Cell>
              </Grid>
            );
          }
          }
        />
      </Switch>
    );
  }
}
