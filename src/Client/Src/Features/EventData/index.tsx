import * as React from 'react';
import EventItem from './item'
interface IAppProps {
  data: any
  editEvent: (data: any) => void
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
          Object.keys(this.props.data).map((item: string, index: number) => {
            return <EventItem
              addToast={() => this.props.addToast(event)}
              key={index}
              name={item}
              editEvent={(data: any) => this.props.editEvent(data)}
              src={this.props.data[item]} />
          })
        }
      </div>
    )
  }
}