import * as React from 'react';
import { Route,Switch } from 'react-router-dom';
import JView from 'react-json-view';
export interface IAppProps {
}

export default class IApp extends React.Component<IAppProps, any> {
  public render() {
    return (
      <Switch>
        <Route exact path="/" render={()=>{
            return (
                <JView src={{test:123}}/>
            )
        }}/>
      </Switch>
    );
  }
}
