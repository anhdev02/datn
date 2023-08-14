import React from "react";
import { Helmet } from "react-helmet";
const PrintOrderHelmet = () => {
  return (
    <>
      <Helmet>
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        <link
          rel="stylesheet"
          href="../../admin/assets/css/printorder.css"
          class="template-customizer-core-css"
        />
      </Helmet>
    </>
  );
};

export default PrintOrderHelmet;
