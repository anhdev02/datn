import React from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../common/Header";
import FooterRes from "../common/FooterRes";
import { useState } from "react";
import Footer from "../common/Footer";
import Recipe from "../others/Recipe";
import HeaderBlogRes from "../common/HeaderBlogRes";
import RecipeRes from "../others/RecipeRes";

const RecipePage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  const [headerFlag, setHeaderFlag] = useState(false);

  return isTablet ? (
    <div id="wrap" className="displaynone_632 body_8094">
      <div id="container">
        <HeaderBlogRes title="Recipe" />
        <RecipeRes />
        <FooterRes />
      </div>
    </div>
  ) : (
    <div className="xans_layout_statelogoff displaynone_743">
      <Header headerFlag={headerFlag} />
      <Recipe />
      <Footer />
    </div>
  );
};

export default RecipePage;
