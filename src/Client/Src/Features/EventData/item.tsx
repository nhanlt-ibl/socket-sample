import * as React from 'react'
import { Chip } from 'react-md'
import JSView from 'react-json-view'
interface IAppProps {
    name: string;
    src: any
}

class IApp extends React.Component<IAppProps, any> {
    render() {
        const props = this.props
        return (
            <div id={props.name} style={{ marginTop: "30px" }}>
                <Chip
                    label={props.name}
                    style={{ margin: "5px" }}
                />
                <JSView name={props.name} src={props.src} theme="ocean" />
            </div>
        );
    }
};

export default IApp;