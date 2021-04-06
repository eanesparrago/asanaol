import styled from "styled-components";

import { Menu } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import Logo from "components/Logo";

const { SubMenu } = Menu;

function Sidebar() {
  return (
    <S.Menu
      defaultOpenKeys={["projects"]}
      mode="inline"
      theme="light"
      inlineCollapsed={false}
    >
      <div className="Sidebar__header-block">
        <Logo />
      </div>

      <SubMenu key="projects" icon={<UnorderedListOutlined />} title="Projects">
        <Menu.Item key="project1">Project 1</Menu.Item>
      </SubMenu>
    </S.Menu>
  );
}

const S = {} as any;

S.Menu = styled(Menu)`
  width: 16rem;
  height: 100vh;

  .Sidebar__header-block {
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;

    > * {
      line-height: normal;
    }
  }
`;

export default Sidebar;
