import React from "react";
import { Link } from "react-router-dom";

const FooterAboutUs = () => {
  return (
    <footer id="footer" className="footer">
      <div className="l-wrap">
        <Link to="" id="back-to-top" className="back-to-top">
          <span className="icon icon-backtotop" />
          <span className="a11y">back to top</span>
        </Link>
        <div className="footer-logo">
          <Link to="" className="footer-logo__link">
            <svg className="footer-logo__svg">
              <path
                d="M0 0h3.67v14.39h8.14v3.26H0zm40.82 17.65h3.32v-4.4l1.28-1.31 3.32 5.71h4l-5.05-8.08 4.56-4.7h-3.93l-4.18 4.6V0h-3.32zm26.42 0H79v-3.26h-8.09V0h-3.67zm40.81 0h3.32v-4.4l1.29-1.31 3.34 5.71h4l-5.07-8.08 4.56-4.7h-3.93l-4.19 4.6V0h-3.32zm-88.9-2.29c-2.25 0-2.93-2.06-2.93-4.08s.68-4.11 2.93-4.11 2.94 2.05 2.94 4.11-.68 4.08-2.94 4.08m0-10.84c-3.79 0-6.25 2.68-6.25 6.76S15.36 18 19.15 18s6.26-2.67 6.26-6.72S23 4.52 19.15 4.52m19.66 4.85C38.6 6.11 36 4.53 33.13 4.53 29.2 4.53 27 7.47 27 11.45c0 3.83 2.41 6.55 6.06 6.55a5.5 5.5 0 005.82-5.24h-3.2A2.62 2.62 0 0133 15.35c-2.08 0-2.76-2.2-2.76-4S31 7.17 33.1 7.17a2.31 2.31 0 012.46 2.2zm15 8.28h3.32V11c0-2.59.77-3.66 2.57-3.66 1.54 0 2.13 1 2.13 3.14v7.22h3.32V9.79c0-3.16-.89-5.27-4.42-5.27A4.27 4.27 0 0057 6.65V4.87h-3.18zm32.56-2.29c-2.24 0-2.92-2.06-2.92-4.08s.68-4.11 2.92-4.11 3 2.05 3 4.11-.68 4.08-3 4.08m0-10.84c-3.79 0-6.24 2.68-6.24 6.76S82.59 18 86.38 18s6.27-2.67 6.27-6.72-2.46-6.76-6.27-6.76M106 9.37c-.21-3.26-2.83-4.84-5.68-4.84-3.93 0-6.17 2.94-6.17 6.92 0 3.83 2.45 6.55 6.1 6.55a5.5 5.5 0 005.82-5.24h-3.2a2.61 2.61 0 01-2.64 2.59c-2.08 0-2.76-2.2-2.76-4s.7-4.15 2.83-4.15a2.3 2.3 0 012.45 2.2z"
                fill="#1d1d1b"
              />
            </svg>
            <span className="a11y">LocknLock</span>
          </Link>
        </div>
        <div className="footer__pad row">
          <div className="footer-nav col-sm-6 col-lg-8">
            <div className="footer-nav__pad">
              <ul className="d1-list">
                <li className="d1 d1--about has-sublist">
                  <Link to="" className="d1__item linkline">
                    <span className="linkline__text">
                      <span className="d1__text">About</span>
                    </span>
                  </Link>
                  <div className="sub-wrap displaynone">
                    <ul className="d2-list">
                      <li className="d2">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">Brand</span>
                        </Link>
                      </li>
                      <li className="d2">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            History
                          </span>
                        </Link>
                      </li>
                      <li className="d2">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">Award</span>
                        </Link>
                      </li>
                      <li className="d2">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            Business information
                          </span>
                        </Link>
                      </li>
                      <li className="d2">
                        <Link to="" className="d2__item linkline">
                          <span className="d2__text linkline__text">
                            Social responsibilities
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d1 d1--product has-sublist">
                  <Link to="" className="d1__item linkline">
                    <span className="linkline__text">
                      <span className="d1__text">Product</span>
                    </span>
                  </Link>
                  <div className="sub-wrap displaynone">
                    <ul className="d2-list">
                      <li className="d2 has-sublist">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            Food Container
                          </span>
                        </Link>
                      </li>
                      <li className="d2 has-sublist">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            Beverageware
                          </span>
                        </Link>
                      </li>
                      <li className="d2 has-sublist">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            Cookware
                          </span>
                        </Link>
                      </li>
                      <li className="d2 has-sublist">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            Small Appliance
                          </span>
                        </Link>
                      </li>
                      <li className="d2">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            E-Catalog
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d1 d1--innovation has-sublist">
                  <Link to="" className="d1__item linkline">
                    <span className="linkline__text">
                      <span className="d1__text">Innovation</span>
                    </span>
                  </Link>
                  <div className="sub-wrap displaynone">
                    <ul className="d2-list">
                      <li className="d2">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            LL Labs
                          </span>
                        </Link>
                      </li>
                      <li className="d2">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            Design Center
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d1 d1--story has-sublist">
                  <Link to="" className="d1__item linkline">
                    <span className="linkline__text">
                      <span className="d1__text">Story</span>
                    </span>
                  </Link>
                  <div className="sub-wrap displaynone">
                    <ul className="d2-list">
                      <li className="d2">
                        <Link to="" className="d2__item linkline">
                          <span className="d2__text linkline__text">News</span>
                        </Link>
                      </li>
                      <li className="d2">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            Lounge
                          </span>
                        </Link>
                      </li>
                      <li className="d2">
                        <Link to="" className="d2__item linkline">
                          <span className="d2__text linkline__text">Now</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d1 d1--esg has-sublist">
                  <Link to="" className="d1__item linkline">
                    <span className="linkline__text">
                      <span className="d1__text">ESG</span>
                    </span>
                  </Link>
                  <div className="sub-wrap displaynone">
                    <ul className="d2-list">
                      <li className="d2">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            Environment
                          </span>
                        </Link>
                      </li>
                      <li className="d2">
                        <Link to="" className="d2__item linkline">
                          <span className="d2__text linkline__text">
                            Social
                          </span>
                        </Link>
                      </li>
                      <li className="d2">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            Governance
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d1 d1--career has-sublist">
                  <Link to="" className="d1__item linkline">
                    <span className="linkline__text">
                      <span className="d1__text">Career</span>
                    </span>
                  </Link>
                  <div className="sub-wrap displaynone">
                    <ul className="d2-list">
                      <li className="d2">
                        <Link
                          to=""
                          className="d2__item linkline"
                        >
                          <span className="d2__text linkline__text">
                            Company Culture
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-info col-sm-6 col-lg-4">
            <ul className="footer-sns">
              <li className="footer-sns__item">
                <Link to="" target="_blank" className="footer-sns__link">
                  <span className="icon icon-sns-instagram">
                    <span className="a11y">go to instagram</span>
                  </span>
                </Link>
              </li>
              <li className="footer-sns__item">
                <Link to="" target="_blank" className="footer-sns__link">
                  <span className="icon icon-sns-youtube">
                    <span className="a11y">go to youtube</span>
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="footer-links footer-links--bottom">
              <li>
                <Link
                  to=""
                  className="footer-link linkline"
                >
                  <span className="linkline__text">Global Network</span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="footer-link linkline"
                >
                  <span className="linkline__text">Inquiry</span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="footer-link linkline"
                >
                  <b className="linkline__text">Cookies Policy</b>
                </Link>
              </li>
              <li>
                <Link to="" className="footer-link linkline">
                  <span className="linkline__text">Sitemap</span>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="footer-link linkline"
                >
                  <span className="linkline__text">Ethical Management</span>
                </Link>
              </li>
            </ul>
            <ul className="footer-toggle">
              <li className="footer-toggle__item footer-address">
                <span className="footer-toggle__btn footer-copyright">
                  © 2021 LocknLock Co. All Rights Reserved.
                </span>
                <div className="footer-toggle__pad">
                  <div className="footer-toggle__cont">
                    <address>
                      LocknLock Co. , 20F, Grand Central A
                      <br className="for-large" />
                      Sejong-daero 14, Jung-gu, Seoul, 04527,
                      <br className="for-large" />
                      Republic of Korea , RD: Jaeho Lee,
                      <br className="for-large" />
                      Business registration number : 214-85-34765
                    </address>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAboutUs;
