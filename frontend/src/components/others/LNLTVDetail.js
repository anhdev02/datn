import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const LNLTVDetail = (props) => {
  const [tv, setTV] = useState({});

  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/tv/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setTV(data);
      })
      .catch((error) => console.error(error));
  }, [props.id]);
  return (
    <div id="wrap" style={{marginTop: "-30px"}}>
      <div id="container">
        <div id="contents">
          <div className="xans-element- xans-product xans-product-headcategory LocknLock TV ">
            <div className="root_width">
              <div className="title xans-product-headcategory xans-product-headcategoryB">
                <div className="xans-product-headcategory-none xans-product-headcategory-TV">
                  <h2 className="product_headcategory_h2 LockTv-h2">
                    LocknLock TV
                  </h2>
                  <p className="text-headcategory">
                    Hãy xem biết về các sản phẩm của LocknLock.
                  </p>
                </div>
              </div>
            </div>
            <div className="xans-element- xans-product xans-product-additional ">
              <div id="prdDetail" className="ec-base-tab gFlex">
                <div className="root_width">
                  <div className="cont">
                    <div className="recipe-section">
                      <div className="recipe-box">
                        <div className="align-center">
                          <div className="wrap-iframe">
                            <iframe
                              width={1140}
                              height="641.3"
                              src={tv.link}
                              title="YouTube video player"
                              frameBorder={0}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{ __html: tv.details }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
    </div>
  );
};

export default LNLTVDetail;
