import * as React from "react";
import { Events, Types } from "../../../../Sample/ListEvents";
import { List, ListItem, Divider, Subheader } from "react-md";
interface IAppProps {}

const IApp: React.SFC<IAppProps> = props => {
  return (
    <div className="md-grid">
      {Types.map(item => {
        return (
          <List style={{ width: "300px" }}>
            <Divider />
            <Subheader primaryText={item} />
            {Events[item].map(item => {
              return <ListItem primaryText={item} />;
            })}
          </List>
        );
      })}
    </div>
  );
};

export default IApp;