import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import tw, { styled } from "twin.macro";
import { css } from "@emotion/react";
import backgroundImg from "../images/section2background.jpg";

// Components
import Layout from "../components/layout";

// Styles
import { linkStyleIndex } from "./index.module.css";

// Tailwind-Emotion Styled Components
const SectionOneDiv = tw.div`
  flex justify-center items-center lg:flex-row flex-col bg-[#faebd7] px-10 py-14 lg:gap-28 gap-14
`;

const SectionTwoDiv = styled.div`
  // Tailwind
  ${tw`
        flex flex-col justify-center items-center text-white lg:p-52 md:p-32 p-12
    `}

  // Background Image
  background-image: url(${backgroundImg});
  background-color: #cccccc;

  // Parallax scrolling effect
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);

  // Display
  // padding: 200px;
  gap: 30px;
`;

const SectionThreeDiv = tw.div`
  bg-[#faebd7] flex flex-col items-center p-16 gap-8
`;

const Button = tw.button`
  bg-yellow-900 hover:bg-yellow-800 text-white p-2 rounded px-4
`;

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        {/* Section 1 */}
        <SectionOneDiv>
          <StaticImage
            src="../images/sushi1.jpg"
            alt="Sushi"
            css={css`
              min-width: 50%;
              width: 55%;
              max-width: 60% @media (max-width: 1000px) {
                width: 65%;
              }
              @media (max-width: 600px) {
                width: 80%;
              }
            `}
          />
          <p
            css={css`
              font-family: "Reggae One", cursive;
              font-size: 17px;
            `}
          >
            Sushi like no other. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam eu gravida magna. Nam interdum ipsum sed urna
            consectetur consequat. Integer gravida vehicula ultricies. Nunc
            porttitor mattis neque sit amet ultricies.
          </p>
        </SectionOneDiv>

        {/* Section 2 */}
        <SectionTwoDiv>
          <h2
            css={css`
              font-family: "Reggae One", Helvetica, Arial, sans-serif;
              text-align: center;
              font-size: 20px;
            `}
          >
            Made With Passion. Exciting Filler Words.
          </h2>
          <p
            css={css`
              font-family: "Reggae One", Helvetica, Arial, sans-serif;
              text-align: center;
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button>
            <Link className={linkStyleIndex} to="/menu">
              View the Menu
            </Link>
          </Button>
        </SectionTwoDiv>

        {/* Section 3 */}
        <SectionThreeDiv>
          <h2
            css={css`
              font-family: "Reggae One", Helvetica, Arial, sans-serif;
              text-align: center;
              font-size: 32px;
            `}
          >
            Reservations
          </h2>
          <Button>Book</Button>
        </SectionThreeDiv>
      </Layout>
    </main>
  );
};

export default IndexPage;
