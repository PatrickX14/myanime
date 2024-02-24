import { Layout, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { Outlet } from "react-router-dom";

export const WebTemplate = () => {
  const menuItems: MenuItemType[] = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "Naruto",
      key: "nartuo",
    },
    {
      label: "Pokemon",
      key: "pokemon",
    },
  ];
  const { Header } = Layout;
  return (
    <>
      <Layout>
        <Header>
          <Menu items={menuItems} mode="horizontal" />
        </Header>
      </Layout>
      <Outlet></Outlet>
    </>
  );
};
