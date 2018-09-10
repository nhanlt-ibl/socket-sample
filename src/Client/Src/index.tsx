import * as React from "react";
import { Route, Switch } from "react-router-dom";
// import JView from 'react-json-view';
import EventList from "./Features/EventList";
import { Grid, Cell, Snackbar } from "react-md";
import EventData from "./Features/EventData";
import Socket649 from './Module/socket649';
import { Data } from '../../Sample/ListEvents'
export interface IAppProps { }
interface IAppState {
  output: any;
  toasts: any[]
  connected: boolean
}
export const openSocket649 = new Socket649('649')
export default class IApp extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      output: Data,
      toasts: [],
      connected: false,
    };
  }
  componentWillMount() {
    openSocket649.initConnection((res, err) => {
      if (res) {
        this.setState({
          toasts: [{ text: 'Socket connection establish' }],
          connected: true,
        })
      }
      if (err) {
        this.setState({
          toasts: [{ text: 'Establish socket error' }]
        })
      }
    })
  }
  addToast = (event: string) => {
    this.setState({
      ...this.state,
      toasts: [...this.state.toasts, { text: `${event} SEND` }]
    })

  }
  onDismiss = () => {
    const [, ...toasts] = this.state.toasts
    this.setState({
      ...this.state,
      toasts: toasts
    })

  }
  onEditEvent = (data: any) => {
    let newOut = this.state.output
    newOut[data.event] = data
    this.setState({
      ...this.state,
      output: newOut
    })
  }
  public render() {
    const { connected } = this.state
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            const { output, toasts } = this.state;
            return (
              <Grid>
                <Cell size={4}>
                  <EventList />
                </Cell>
                <Cell size={8}>
                  <EventData
                    data={output}
                    addToast={(event: string) => this.addToast(event)}
                    connected={connected}
                    editEvent={(data: any) => this.onEditEvent(data)}
                  />
                </Cell>
                <Snackbar
                  toasts={toasts}
                  autohide={true}
                  autohideTimeout={1500}
                  onDismiss={this.onDismiss}
                  style={{ background: "#ff6e40", color: "white", textAlign: "center" }}
                />
              </Grid>
            );
          }
          }
        />
      </Switch>
    );
  }
}
