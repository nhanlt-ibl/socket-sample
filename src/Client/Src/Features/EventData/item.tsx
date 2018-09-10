import * as React from 'react'
import { Chip } from 'react-md'
import JSView from 'react-json-view'
import { openSocket649 } from '../../'
interface IAppProps {
    name: string;
    src: any;
    editEvent: (data: any) => void
    addToast: () => void
}

class IApp extends React.Component<IAppProps, any> {
    render() {
        const props = this.props
        return (
            <div id={props.name} style={{ marginTop: "30px" }}>
                <Chip
                    label={props.name}
                    style={{ margin: "5px" }}
                    onClick={() => {
                        openSocket649.write('NEW_EVENT', props.src)
                        this.props.addToast()
                    }}
                />
                <JSView
                    name={props.name}
                    src={props.src}
                    theme="ocean"
                    onEdit={(props) => {
                        this.props.editEvent(props.updated_src)
                    }}
                />
            </div>
        );
    }
};

export default IApp;