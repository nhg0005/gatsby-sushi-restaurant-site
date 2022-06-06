import * as React from "react";
import tw, { styled } from "twin.macro";
import { css } from "@emotion/react";

// Components
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";

// Tailwind-Emotion Styled Components
const MenuDiv = tw.div`
  flex flex-col items-center bg-[#faebd7]
`;

const MenuContentDiv = tw.div`
  flex flex-col items-center bg-[#ecdcba] rounded-3xl my-5
`;

const MenuListItem = tw.div`
  flex flex-col items-center gap-5 mt-2.5
`;

const MenuListItemText = tw.p`
  px-8 text-center
`;

// Data
const mockMenuData = [
  {
    id: 0,
    item: "Philly Roll",
    price: "$6",
    description: "Salmon and cream cheese",
  },
  {
    id: 1,
    item: "Philly Roll",
    price: "$6",
    description: "Salmon and cream cheese",
  },
  {
    id: 2,
    item: "Philly Roll",
    price: "$6",
    description: "Salmon and cream cheese",
  },
  {
    id: 3,
    item: "Philly Roll",
    price: "$6",
    description: "Salmon and cream cheese",
  },
];

const MenuPage = () => {
  // Sanity Menu Data
  const menuData = useStaticQuery(graphql`
    query {
      allSanityMenu {
        nodes {
          name
          price
          id
          description
        }
      }
    }
  `);

  return (
    <main>
      <Layout>
        <MenuDiv>
          <h2
            css={css`
              font-family: "Reggae One", Helvetica, Arial, sans-serif;
              font-size: 1.25rem;
              margin-top: 32px;
            `}
          >
            Menu
          </h2>
          <MenuContentDiv>
            {menuData.allSanityMenu.nodes.map((menuItem) => (
              <MenuListItem key={menuItem.id}>
                <MenuListItemText>
                  {menuItem.name} | ${menuItem.price}
                </MenuListItemText>
                <MenuListItemText>{menuItem.description}</MenuListItemText>
                <hr
                  css={css`
                    border-color: black;
                    width: 350px;
                  `}
                ></hr>
              </MenuListItem>
            ))}
          </MenuContentDiv>
        </MenuDiv>
      </Layout>
    </main>
  );
};

export default MenuPage;
