import * as React from 'react';
import { Events, Data } from '../../../../Sample/ListEvents'
import EventItem from './item'
interface IAppProps {
  data: any
  addToast: (event) => void
  connected: boolean
}

interface IAppState {
  input_file: any
}
export default class App extends React.Component<IAppProps, IAppState>{
  render() {
    return (
      <div>
        {
          (() => {
            let results: any = []
            let index = 1
            Object.keys(Events).forEach(element => {
              const result = (Events[element].map((event) => {
                return <EventItem addToast={() => this.props.addToast(event)} key={index++} name={event} src={Data[event]} />
              }))
              results = [...results, ...result]
            });
            return results
          })()
        }
      </div>
    )
  }
}