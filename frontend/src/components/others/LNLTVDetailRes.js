import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const LNLTVDetailRes = (props) => {
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
    <div id="contents">
      <div className="root_width">
        <div className="xans-element- xans-product xans-product-headcategory LocknLock TV">
          <div className="xans-element- xans-product xans-product-additional">
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
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: tv.details }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LNLTVDetailRes;
