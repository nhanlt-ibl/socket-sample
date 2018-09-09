import * as React from "react";
import { Events } from "../../../../Sample/ListEvents";
import { List, ListItem, Divider, Subheader, Drawer } from "react-md";
import * as $ from 'jquery'
interface IAppProps { }
const preRender = () =>
  Object.keys(Events).map(item => {
    return (
      <List>
        <Divider />
        <Subheader primaryText={item} />
        {Events[item].map(item => {
          return <a
            style={{ textDecoration: "none" }}
            href={`javascript:void(0)`}
            onClick={() => {
              $([document.documentElement, document.body]).animate({
                scrollTop: $(`#${item}`).offset().top - 150
              }, 500);
            }}
          ><ListItem primaryText={item} /></a>;
        })}
      </List>
    );
  })
const IApp: React.SFC<IAppProps> = props => {
  const navRenderItems = preRender()
  return (
    <div className="md-grid">
      <Drawer
        type={Drawer.DrawerTypes.PERSISTENT}
        visible={true}
        position='left'
        navItems={navRenderItems}
      />
    </div>
  );
};

export default IApp;