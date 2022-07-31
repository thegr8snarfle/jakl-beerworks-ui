import { MenuItem, NextPageWithLayout, data } from "../api";
import {ReactElement } from "react";
import Beverage from "../components/Beverage";
import {GetStaticProps} from "next/types";
import {InferGetStaticPropsType} from "next";

export const getStaticProps: GetStaticProps<{ menuItems: MenuItem[]; }> = async (context) => {
  console.log('getting menu items...');
  return {
    props: {
      menuItems: data.ITEMS
    }
  }
}

const MenuPage: NextPageWithLayout<{ menuItems: MenuItem[]; }> =
  (
    { menuItems } : InferGetStaticPropsType<typeof getStaticProps>
  ) => {

  return (
    <>
      <h2 className="text-secondary border-bottom border-5 border-secondary py-3 px-3 mb-4">Menu</h2>
      {
        menuItems && menuItems?.map(item => <Beverage bevvy={item} key={item.id} />)
      }
    </>
  )
}

MenuPage.getLayout = (page: ReactElement) => page;

export default MenuPage