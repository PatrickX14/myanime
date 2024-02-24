import { Layout, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { Outlet, useNavigate } from "react-router-dom";

export const WebTemplate = () => {
  const navigate = useNavigate();
  const menuItems: MenuItemType[] = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "Naruto",
      key: "/naruto",
    },
    {
      label: "Pokemon",
      key: "/pokemon",
    },
  ];
  const handleNavigation = (key: string) => {
    navigate(key);
  };
  const { Header, Content, Footer } = Layout;
  return (
    <>
      <Layout>
        <Header>
          <Menu
            items={menuItems}
            mode="horizontal"
            onClick={(e) => handleNavigation(e.key)}
          />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>
          <div>
            <h1>Test</h1>
          </div>
        </Footer>
      </Layout>
    </>
  );
};
