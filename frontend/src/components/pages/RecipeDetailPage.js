import React from 'react'
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderAccountRes from '../common/HeaderAccountRes';
import FooterRes from '../common/FooterRes';
import RecipeDetail from '../others/RecipeDetail';
import Header from '../common/Header';
import Footer from '../common/Footer';
import RecipeDetailRes from '../others/RecipeDetailRes';
import "../assets/scss/html_13335.scss";
import "../assets/scss/displaynone_532.scss";
import "../assets/scss/fr_view_888.scss";
import "../assets/scss/html_12857.scss";
import { useParams } from 'react-router-dom';

const RecipeDetailPage = () => {
    const isTablet = useMediaQuery({ maxWidth: 820 });
    const [headerFlag, setHeaderFlag] = useState(false);
    const {id} = useParams();

    return isTablet ? (
      <div id="wrap" className="fr_view_888 displaynone_532 html_12857">
        <div id="container">
            <HeaderAccountRes title='Recipe'/>
            <RecipeDetailRes id={id}/>
            <FooterRes/>
        </div>
      </div>
      ) : (
        <div className="html_13335 displaynones_523">
          <Header headerFlag={headerFlag} />
          <RecipeDetail id={id} />
          <Footer />
        </div>
      );
}

export default RecipeDetailPage