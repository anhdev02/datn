import React from 'react'

const HeaderAboutUs = () => {
  return (
    <header id="header" className="header">
        <div className="header__pad l-wrap">
          <span className="header__logo">
            <a href="/eng" className="header__link">
              <svg className="header__svg" viewBox="0 0 120 18">
                <path d="M0 0h3.67v14.39h8.14v3.26H0zm40.82 17.65h3.32v-4.4l1.28-1.31 3.32 5.71h4l-5.05-8.08 4.56-4.7h-3.93l-4.18 4.6V0h-3.32zm26.42 0H79v-3.26h-8.09V0h-3.67zm40.81 0h3.32v-4.4l1.29-1.31 3.34 5.71h4l-5.07-8.08 4.56-4.7h-3.93l-4.19 4.6V0h-3.32zm-88.9-2.29c-2.25 0-2.93-2.06-2.93-4.08s.68-4.11 2.93-4.11 2.94 2.05 2.94 4.11-.68 4.08-2.94 4.08m0-10.84c-3.79 0-6.25 2.68-6.25 6.76S15.36 18 19.15 18s6.26-2.67 6.26-6.72S23 4.52 19.15 4.52m19.66 4.85C38.6 6.11 36 4.53 33.13 4.53 29.2 4.53 27 7.47 27 11.45c0 3.83 2.41 6.55 6.06 6.55a5.5 5.5 0 005.82-5.24h-3.2A2.62 2.62 0 0133 15.35c-2.08 0-2.76-2.2-2.76-4S31 7.17 33.1 7.17a2.31 2.31 0 012.46 2.2zm15 8.28h3.32V11c0-2.59.77-3.66 2.57-3.66 1.54 0 2.13 1 2.13 3.14v7.22h3.32V9.79c0-3.16-.89-5.27-4.42-5.27A4.27 4.27 0 0057 6.65V4.87h-3.18zm32.56-2.29c-2.24 0-2.92-2.06-2.92-4.08s.68-4.11 2.92-4.11 3 2.05 3 4.11-.68 4.08-3 4.08m0-10.84c-3.79 0-6.24 2.68-6.24 6.76S82.59 18 86.38 18s6.27-2.67 6.27-6.72-2.46-6.76-6.27-6.76M106 9.37c-.21-3.26-2.83-4.84-5.68-4.84-3.93 0-6.17 2.94-6.17 6.92 0 3.83 2.45 6.55 6.1 6.55a5.5 5.5 0 005.82-5.24h-3.2a2.61 2.61 0 01-2.64 2.59c-2.08 0-2.76-2.2-2.76-4s.7-4.15 2.83-4.15a2.3 2.3 0 012.45 2.2z" fill="#1d1d1b" />
              </svg>
              <span className="a11y">LocknLock</span>
            </a>
          </span>
          <div id="gnb" className="gnb">
            <div className="gnb__pad">
              <ul className="d1-list">
                <li className="d1 d1--about has-sublist">
                  <a href="/eng/about" className="d1__item">
                    <span className="d1__text">About</span>
                  </a>
                  <div className="sub-wrap">
                    <ul className="d2-list">
                      <li className="d2 for-until-large">
                        <a href="/eng/about" className="d2__item linkline">
                          <span className="d2__text linkline__text">About Home</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/about/brand" className="d2__item linkline">
                          <span className="d2__text linkline__text">Brand</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/about/history" className="d2__item linkline">
                          <span className="d2__text linkline__text">History</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/about/award" className="d2__item linkline">
                          <span className="d2__text linkline__text">Award</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/util/investment-info/notice" className="d2__item linkline">
                          <span className="d2__text linkline__text">Business information</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/about/csr" className="d2__item linkline">
                          <span className="d2__text linkline__text">Social responsibilities</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d1 d1--product has-sublist">
                  <a href="/eng/product" className="d1__item">
                    <span className="d1__text">Product</span>
                  </a>
                  <div className="sub-wrap">
                    <ul className="d2-list">
                      <li className="d2 for-until-large">
                        <a href="/eng/product" className="d2__item linkline">
                          <span className="d2__text linkline__text">All Products</span>
                        </a>
                      </li>
                      <li className="d2 has-sublist">
                        <a href="/eng/product/container" className="d2__item linkline">
                          <span className="d2__text linkline__text">Food Container</span>
                        </a>
                        <ul className="d3-list">
                          <li className="d3">
                            <a href="/eng/product/container/food-storage" className="d3__item linkline">
                              <span className="d3__text linkline__text">Food storage</span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/container/rice-storage" className="d3__item linkline">
                              <span className="d3__text linkline__text">Rice storage
                              </span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/container/fermented-food-storage" className="d3__item linkline">
                              <span className="d3__text linkline__text">Fermented food storage</span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/container/dried-food-storage" className="d3__item linkline">
                              <span className="d3__text linkline__text">Dried food storage</span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/container/lunch-box" className="d3__item linkline">
                              <span className="d3__text linkline__text">Lunch box
                              </span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/container/instant-cooking" className="d3__item linkline">
                              <span className="d3__text linkline__text">Instant cooking
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="d2 has-sublist">
                        <a href="/eng/product/beverage" className="d2__item linkline">
                          <span className="d2__text linkline__text">Beverageware</span>
                        </a>
                        <ul className="d3-list">
                          <li className="d3">
                            <a href="/eng/product/beverage/on-the-go" className="d3__item linkline">
                              <span className="d3__text linkline__text">On-the-go</span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/beverage/on-the-table" className="d3__item linkline">
                              <span className="d3__text linkline__text">On-the-table</span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/beverage/drive" className="d3__item linkline">
                              <span className="d3__text linkline__text">Drive</span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/beverage/outdoor" className="d3__item linkline">
                              <span className="d3__text linkline__text">Outdoor</span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/beverage/beer" className="d3__item linkline">
                              <span className="d3__text linkline__text">Beer</span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/beverage/kids" className="d3__item linkline">
                              <span className="d3__text linkline__text">Kids</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="d2 has-sublist">
                        <a href="/eng/product/cookware" className="d2__item linkline">
                          <span className="d2__text linkline__text">Cookware</span>
                        </a>
                        <ul className="d3-list">
                          <li className="d3">
                            <a href="/eng/product/cookware/special-design" className="d3__item linkline">
                              <span className="d3__text linkline__text">Special design</span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/cookware/convenient-use" className="d3__item linkline">
                              <span className="d3__text linkline__text">Convenient use</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="d2 has-sublist">
                        <a href="/eng/product/appliance" className="d2__item linkline">
                          <span className="d2__text linkline__text">Small Appliance</span>
                        </a>
                        <ul className="d3-list">
                          <li className="d3">
                            <a href="/eng/product/appliance/kitchen" className="d3__item linkline">
                              <span className="d3__text linkline__text">Kitchen</span>
                            </a>
                          </li>
                          <li className="d3">
                            <a href="/eng/product/appliance/care" className="d3__item linkline">
                              <span className="d3__text linkline__text">Care</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="d2">
                        <a href="/eng/product/e-catalog" className="d2__item linkline">
                          <span className="d2__text linkline__text">E-Catalog</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d1 d1--innovation has-sublist">
                  <a href="/eng/innovation" className="d1__item">
                    <span className="d1__text">Innovation</span>
                  </a>
                  <div className="sub-wrap">
                    <ul className="d2-list">
                      <li className="d2 for-until-large">
                        <a href="/eng/innovation" className="d2__item linkline">
                          <span className="d2__text linkline__text">Innovation Home</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/innovation/labs" className="d2__item linkline">
                          <span className="d2__text linkline__text">LL Labs</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/innovation/design-center" className="d2__item linkline">
                          <span className="d2__text linkline__text">Design Center</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d1 d1--story has-sublist">
                  <a href="/eng/story" className="d1__item">
                    <span className="d1__text">Story</span>
                  </a>
                  <div className="sub-wrap">
                    <ul className="d2-list">
                      <li className="d2 for-until-large">
                        <a href="/eng/story" className="d2__item linkline">
                          <span className="d2__text linkline__text">Story Home</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/story/news" className="d2__item linkline">
                          <span className="d2__text linkline__text">News</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/story/lounge" className="d2__item linkline">
                          <span className="d2__text linkline__text">Lounge</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/story/now" className="d2__item linkline">
                          <span className="d2__text linkline__text">Now</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d1 d1--esg has-sublist">
                  <a href="/eng/esg" className="d1__item">
                    <span className="d1__text">ESG</span>
                  </a>
                  <div className="sub-wrap">
                    <ul className="d2-list">
                      <li className="d2 for-until-large">
                        <a href="/eng/esg" className="d2__item linkline">
                          <span className="d2__text linkline__text">ESG Home</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/esg/environment" className="d2__item linkline">
                          <span className="d2__text linkline__text">Environment</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/esg/social" className="d2__item linkline">
                          <span className="d2__text linkline__text">Social</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/esg/governance" className="d2__item linkline">
                          <span className="d2__text linkline__text">Governance</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d1 d1--career has-sublist">
                  <a href="/eng/career/index" className="d1__item">
                    <span className="d1__text">Career</span>
                  </a>
                  <div className="sub-wrap">
                    <ul className="d2-list">
                      <li className="d2 for-until-large">
                        <a href="/eng/career/index" className="d2__item linkline">
                          <span className="d2__text linkline__text">Career Home</span>
                        </a>
                      </li>
                      <li className="d2">
                        <a href="/eng/career/culture" className="d2__item linkline">
                          <span className="d2__text linkline__text">Company Culture</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d1 for-until-large">
                  <a href="/eng/util/global-network" className="d1__item">
                    <span className="d1__text">Global Network</span>
                  </a>
                  <div className="sub-wrap">
                    <ul className="d2-list" />
                  </div>
                </li>
                <li className="d1 for-until-large">
                  <a href="/eng/util/global-network#contact" className="d1__item">
                    <span className="d1__text">Inquiry</span>
                  </a>
                  <div className="sub-wrap">
                    <ul className="d2-list" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="gnb__lang lang for-until-large">
              <button type="button" className="lang__current">ENG</button>
              <div className="lang__option">
                <a href="/kor" className="lang__item">KOR</a>
              </div>
            </div>
            <span id="gnb-line" className="gnb__line" />
          </div>
          <div className="header__util">
            <div className="header__lang lang for-large">
              <button type="button" className="lang__current">ENG</button>
              <div className="lang__option">
                <a href="/kor" className="lang__item">KOR</a>
              </div>
            </div>
            <a href="#header-search" id="go-search" className="header__icon header__icon--search">
              <span className="icon icon-search" />
              <span className="a11y">open search bar</span>
            </a>
            <button type="button" id="close-search" className="header__icon header__icon--search-close">
              <span className="icon icon-close" />
              <span className="a11y">close search bar</span>
            </button>
            <button type="button" className="header__toggle">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
              <span className="a11y">open menu</span>
            </button>
          </div>
        </div>
        <div id="header-search" className="header__search">
          <div className="search">
            <div className="search__wrap l-narrow">
              <form action="/eng/search" className="search__form">
                <div className="search__box">
                  <label htmlFor="site-search" className="a11y">search word</label>
                  <input type="search" name="q" id="site-search" placeholder="Enter search word." className="search__input" />
                  <button type="submit" className="search__btn">
                    <span className="icon icon-search" />
                    <span className="a11y">search</span>
                  </button>
                </div>
              </form>
              <div className="search__recommend">
                <b className="search__tip">Recommendation Keywords</b>
                <a href="/eng/search?q=Airtight+Container" className="tag">Airtight Container</a>
                <a href="/eng/search?q=Tumbler" className="tag">Tumbler</a>
                <a href="/eng/search?q=Metro" className="tag">Metro</a>
                <a href="/eng/search?q=Lunchbox" className="tag">Lunchbox</a>
                <a href="/eng/search?q=Air+Fryer" className="tag">Air Fryer</a>
                <a href="/eng/search?q=Bisfree" className="tag">Bisfree</a>
                <a href="/eng/search?q=Microwave" className="tag">Microwave</a>
                <a href="/eng/search?q=Top+Class" className="tag">Top Class</a>
                <a href="/eng/search?q=Rice+Cooker" className="tag">Rice Cooker</a>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default HeaderAboutUs