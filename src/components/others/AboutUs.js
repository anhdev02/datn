import React from 'react'

const AboutUs = () => {
  return (
    <main id="main" className="main">
        <h1 className="a11y">Locknlock</h1>
        <header className="hero-swiper swiper-container">
          <ul className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
            <li className="hero swiper-slide is-invert reveal-bg swiper-slide-active" style={{width: '1269px'}}>
              <div className="hero__bg">
                <div className="bg" style={{opacity: 1, transform: 'translate(0px, 0px)'}}>
                  <div className="video-rwd">
                    <video className="bg__video" autoPlay src="assets/imgs/main-hero-1-sm.mp4" />
                  </div>
                </div>
              </div>
              <div className="hero__cont reveal" style={{opacity: 1}}>
                <div className="l-content">
                  <h2 className="hero__h h2">Store your life</h2>
                  <span className="hero__sub h6">A better life suggested by LocknLock</span>
                </div>
              </div>
            </li>
            <li className="hero swiper-slide is-invert reveal-bg swiper-slide-next" style={{width: '1269px'}}>
              <div className="hero__bg">
                <div className="bg" style={{opacity: 1, transform: 'translate(0px, 0px)'}}>
                  <div className="video-rwd">
                    <video className="bg__video" autoPlay src="assets/imgs/main-hero-0-sm.mp4" />
                  </div>
                </div>
              </div>
              <div className="hero__cont reveal" style={{opacity: 1}}>
                <div className="l-content">
                  <h2 className="hero__h h2">Add good things</h2>
                  <span className="hero__sub h6">A better life suggested by LocknLock</span>
                </div>
              </div>
            </li>
          </ul>
          <div className="swiper-button-prev swiper_lt">
            <img src="assets/imgs/arrow_left.svg" alt="wingbanner" />
          </div>
          <div className="swiper-button-next swiper_rt">
            <img src="assets/imgs/arrow_right.svg" alt="wingbanner" />
          </div>
          <div className="swiper-controller swiper-controller--invert">
            <div className="l-content">
              <div className="swiper-controller__pad">
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </header>
        <section className="prd-d1 reveal-bg">
          <div className="prd-d1__bg bg" style={{opacity: 1, transform: 'translate(0px, 0px)'}}>
            <picture className="bg__img">
              <source srcSet="assets/imgs/46783496ckon.jpg" media="(min-width: 720px)" />
              <img className="lazy entered loaded" alt="" src="assets/imgs/46783496ckon.jpg" />
            </picture>
          </div>
          <div className="prd-d1__box">
            <div className="l-content">
              <div className="prd-d1__cont reveal" style={{opacity: 1}}>
                <h2 className="prd-d1__h h3">
                  Add safety<br />
                  LocknLock airtight containers
                </h2>
                <p className="prd-d1__desc">
                  Lessen discomfort and add safety by understanding our
                  lifestyle and getting inspiration from them.
                </p>
                <div className="prd-d1__func">
                  <a href="/eng/product/container" className="prd-d1__btn btn">
                    <span className="btn__text">View More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="prd-d1 reveal-bg">
          <div className="prd-d1__bg bg" style={{opacity: 1, transform: 'translate(0px, 0px)'}}>
            <picture className="bg__img">
              <source srcSet="assets/imgs/46783528pnmr.jpg" media="(min-width: 720px)" />
              <img className="lazy entered loaded" alt="" src="assets/imgs/46783528pnmr.jpg" />
            </picture>
          </div>
          <div className="prd-d1__box">
            <div className="l-content">
              <div className="prd-d1__cont reveal" style={{opacity: 1}}>
                <h2 className="prd-d1__h h3">
                  Add story<br />
                  LocknLock tumbler
                </h2>
                <p className="prd-d1__desc">
                  Create a design and a function with whatever that is in the
                  tumbler to serve as the best match for every moment of my
                  life.
                </p>
                <div className="prd-d1__func">
                  <a href="/eng/product/beverage" className="prd-d1__btn btn">
                    <span className="btn__text">View More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="prd-d1 reveal-bg">
          <div className="prd-d1__bg bg" style={{opacity: 1, transform: 'translate(0px, 0px)'}}>
            <picture className="bg__img">
              <source srcSet="assets/imgs/46783559wgcl.jpg" media="(min-width: 720px)" />
              <img className="lazy entered loaded" alt="" src="assets/imgs/46783559wgcl.jpg" />
            </picture>
          </div>
          <div className="prd-d1__box">
            <div className="l-content">
              <div className="prd-d1__cont reveal" style={{opacity: 1}}>
                <h2 className="prd-d1__h h3">
                  Add comfort<br />
                  LocknLock cookware
                </h2>
                <p className="prd-d1__desc">
                  Relish in the joy of cooking from cooking to serving on the
                  table with comfortable use and feel-good design.
                </p>
                <div className="prd-d1__func">
                  <a href="/eng/product/cookware" className="prd-d1__btn btn">
                    <span className="btn__text">View More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="prd-d1 reveal-bg">
          <div className="prd-d1__bg bg" style={{opacity: 1, transform: 'translate(0px, 0px)'}}>
            <picture className="bg__img">
              <source srcSet="assets/imgs/46783591hnjl.jpg" media="(min-width: 720px)" />
              <img className="lazy entered loaded" alt="" src="/eng/image/sub/2021/06/25/46783596nzzf.jpg" />
            </picture>
          </div>
          <div className="prd-d1__box">
            <div className="l-content">
              <div className="prd-d1__cont reveal" style={{opacity: 1}}>
                <h2 className="prd-d1__h h3">
                  Add convenience<br />
                  LocknLock small appliances
                </h2>
                <p className="prd-d1__desc">
                  Enrich our daily lives by making our cooking experience more
                  convenient and tasty and our daily lifestyle safer!
                </p>
                <div className="prd-d1__func">
                  <a href="/eng/product/appliance" className="prd-d1__btn btn">
                    <span className="btn__text">View More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pad reveal-block">
          <div className="l-content">
            <div className="main-header reveal" style={{opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
              <h2 className="main-header__h h2">News</h2>
              <a href="/eng/story/news" className="main-header__more btn-more">
                <span className="a11y">View More</span>
              </a>
            </div>
            <ul className="shelf" style={{position: 'relative', height: '447.763px'}}>
              <li className="shelf__item reveal" style={{position: 'absolute', left: '0px', top: '0px', opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
                <a href="/eng/story/news/id/56" className="shelf__link linkblock">
                  <span className="shelf__thumb linkblock__box">
                    <img src="assets/imgs/86696887giru.png" className="shelf__img linkblock__img" alt="" />
                  </span>
                  <div className="shelf__cont">
                    <span className="badge">Product</span>
                    <strong className="shelf__h linkline h6">
                      <span className="linkline__text">LocknLock launches upgraded Baby Food Container
                      </span>
                    </strong>
                    <div className="tagtext-box" />
                    <span className="shelf__date">2022. 09. 30</span>
                  </div>
                </a>
              </li>
              <li className="shelf__item reveal" style={{position: 'absolute', left: '396.625px', top: '0px', opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
                <a href="/eng/story/news/id/52" className="shelf__link linkblock">
                  <span className="shelf__thumb linkblock__box">
                    <img src="assets/imgs/86696887giru.png" className="shelf__img linkblock__img" alt="" />
                  </span>
                  <div className="shelf__cont">
                    <span className="badge">Company</span>
                    <strong className="shelf__h linkline h6">
                      <span className="linkline__text">LocknLock launches upgraded Baby Food Container
                      </span>
                    </strong>
                    <div className="tagtext-box" />
                    <span className="shelf__date">2022. 08. 04</span>
                  </div>
                </a>
              </li>
              <li className="shelf__item reveal" style={{position: 'absolute', left: '793.249px', top: '0px', opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
                <a href="/eng/story/news/id/51" className="shelf__link linkblock">
                  <span className="shelf__thumb linkblock__box">
                    <img src="assets/imgs/86696887giru.png" className="shelf__img linkblock__img" alt="" />
                  </span>
                  <div className="shelf__cont">
                    <span className="badge">Product</span>
                    <strong className="shelf__h linkline h6">
                      <span className="linkline__text">LocknLock caters to wide range of home-cooked
                        meals</span>
                    </strong>
                    <div className="tagtext-box" />
                    <span className="shelf__date">2022. 07. 04</span>
                  </div>
                </a>
              </li>
              <li className="shelf__gutter" />
            </ul>
          </div>
        </section>
        <section className="pad pad--gray reveal-block">
          <div className="l-content">
            <div className="main-header reveal" style={{opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
              <h2 className="main-header__h h2">Lounge</h2>
              <a href="/eng/story/lounge" className="main-header__more btn-more">
                <span className="a11y">View More</span>
              </a>
            </div>
            <div className="lounge-swiper swiper-container swiper-container-initialized swiper-container-horizontal">
              <ul className="lounge-list swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                <li className="lounge reveal swiper-slide swiper-slide-active" style={{opacity: 1, transform: 'translate(0px, 0px)', width: '1130px', visibility: 'inherit', marginRight: '60px'}}>
                  <a href="/eng/story/lounge/id/708" className="lounge__link linkblock linkblock--bg">
                    <div className="bg">
                      <picture className="bg__img linkblock__img">
                        <source srcSet="assets/imgs/lounge-11-main-d.jpg" media="(min-width: 720px)" />
                        <img className="lazy entered loaded" alt="" src="/eng/image/story/lounge/do/hp/htbuhttl/thumbnail/lounge-11-main-m.jpg" />
                      </picture>
                    </div>
                    <div className="lounge__cont">
                      <strong className="lounge__h h4 linkline">
                        <span className="linkline__text">Who Says It’s Hard to Wash Airtight Container Lid?
                          Coming Soon: LocknLock Glass ‘Top Class’ with
                          Detachable Silicone and Clip</span>
                      </strong>
                      <div className="tagtext-box">
                        <span className="tagtext">Airtightcontainer</span>
                        <span className="tagtext">newly-weds</span>
                        <span className="tagtext">one-personhousehold</span>
                        <span className="tagtext">design</span>
                      </div>
                      <span className="lounge__date">2021. 06. 23</span>
                    </div>
                  </a>
                </li>
                <li className="lounge reveal swiper-slide swiper-slide-next" style={{opacity: 1, transform: 'translate(0px, 0px)', width: '1130px', visibility: 'inherit', marginRight: '60px'}}>
                  <a href="/eng/story/lounge/id/710" className="lounge__link linkblock linkblock--bg">
                    <div className="bg">
                      <picture className="bg__img linkblock__img">
                        <source srcSet="
                            /eng/image/story/lounge/nr/jl/ddrltxwy/thumbnail/lounge-13-main-d.jpg
                          " media="(min-width: 720px)" />
                        <img className="lazy entered loaded" alt="" src="/eng/image/story/lounge/nr/jl/ddrltxwy/thumbnail/lounge-13-main-m.jpg" />
                      </picture>
                    </div>
                    <div className="lounge__cont">
                      <strong className="lounge__h h4 linkline">
                        <span className="linkline__text">This Was Cooked by the Steam Air Fryer?!: ‘Active
                          Steam’ Steam Air Fryer</span>
                      </strong>
                      <div className="tagtext-box">
                        <span className="tagtext">SmallAppliance</span>
                        <span className="tagtext">Kitchen</span>
                        <span className="tagtext">Steam</span>
                        <span className="tagtext">Airfryer</span>
                      </div>
                      <span className="lounge__date">2021. 06. 23</span>
                    </div>
                  </a>
                </li>
                <li className="lounge reveal swiper-slide" style={{opacity: 1, transform: 'translate(0px, 0px)', width: '1130px', visibility: 'inherit', marginRight: '60px'}}>
                  <a href="/eng/story/lounge/id/703" className="lounge__link linkblock linkblock--bg">
                    <div className="bg">
                      <picture className="bg__img linkblock__img">
                        <source srcSet="
                            /eng/image/story/lounge/lg/gm/mqkjiqls/thumbnail/lounge-05-main-d.jpg
                          " media="(min-width: 720px)" />
                        <img data-src="/eng/image/story/lounge/lg/gm/mqkjiqls/thumbnail/lounge-05-main-m.jpg" className="lazy" alt="" />
                      </picture>
                    </div>
                    <div className="lounge__cont">
                      <strong className="lounge__h h4 linkline">
                        <span className="linkline__text">Matching Items</span>
                      </strong>
                      <div className="tagtext-box">
                        <span className="tagtext">Smallappliance</span>
                        <span className="tagtext">airtightcontainer</span>
                        <span className="tagtext">locknlocksteamairfryer</span>
                        <span className="tagtext">family</span>
                      </div>
                      <span className="lounge__date">2021. 06. 23</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="reveal" style={{opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
                <div className="swiper-pagination swiper-pagination-progressbar">
                  <span className="swiper-pagination-progressbar-fill" style={{transform: 'translate3d(0px, 0px, 0px) scaleX(0.333333) scaleY(1)', transitionDuration: '400ms'}} />
                </div>
                <div className="lounge-swiper__controller">
                  <button type="button" className="swiper-button-prev swiper-button-disabled">
                    <span className="a11y">prev</span>
                  </button>
                  <div className="fraction">
                    <span className="fraction__current">1</span>
                    <span className="fraction__length">3</span>
                  </div>
                  <button type="button" className="swiper-button-next">
                    <span className="a11y">next</span>
                  </button>
                </div>
              </div>
              <span className="swiper-notification" />
            </div>
          </div>
        </section>
        <section className="pad reveal-block">
          <div className="l-content">
            <div className="main-header reveal" style={{opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
              <h2 className="main-header__h h2">ESG</h2>
              <a href="/eng/esg" className="main-header__more btn-more">
                <span className="a11y">더보기</span>
              </a>
            </div>
            <div className="esg_container">
              <div className="bg">
                <picture className="bg__img linkblock__img environment"> </picture>
              </div>
              <div className="esg__cont__22 esg_banner_Wrap">
                <div className="esg_banner_mn envirionment linkline esg_banner_select">
                  <strong className="esg__h__22">
                    <span className="linkline__text">Environment</span>
                  </strong>
                  <div className="tagtext-box__22">
                    <div className="tagtext__22">Do it now for the environment</div>
                    <div className="tagtext__22">and people of the future</div>
                  </div>
                </div>
                <div className="esg_banner_mn social linkline">
                  <strong className="esg__h__22">
                    <span className="linkline__text">Social</span>
                  </strong>
                  <div className="tagtext-box__22">
                    <div className="tagtext__22">Human rights and diversities</div>
                    <div className="tagtext__22">
                      are recognized, and co-prosperity
                    </div>
                    <div className="tagtext__22">and safety are ensure</div>
                  </div>
                </div>
                <div className="esg_banner_mn governance linkline">
                  <strong className="esg__h__22">
                    <span className="linkline__text">Governance</span>
                  </strong>
                  <div className="tagtext-box__22">
                    <div className="tagtext__22">Commitment to transparent</div>
                    <div className="tagtext__22">
                      and trusted management practices
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ESG END */}
        <div className="banner reveal-bg">
          <div className="banner__bg">
            <div className="bg" style={{opacity: 1, transform: 'translate(0px, 0px)'}}>
              <picture className="prd-d2__img bg__img">
                <source srcSet="assets/imgs/banner-lg.jpg" media="(min-width: 560px)" />
                <img className="lazy entered loaded" alt="" src="/eng/image/common/main/banner-sm.jpg" />
              </picture>
            </div>
          </div>
          <div className="banner__cont">
            <div className="l-content">
              <div className="banner__box">
                <h2 className="banner__h h5">
                  We transform from Korea’s leading kitchen life and culture
                  company<br className="for-large" />
                  into the global company admired by people from around the
                  world.
                </h2>
                <div className="banner banner__func">
                  <a href="/eng/util/global-network/" className="btn btn--ghost">
                    <span className="btn__text">View More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="pad reveal-block">
          <div className="l-content">
            <div className="main-header reveal" style={{opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
              <h2 className="main-header__h h2">Now</h2>
              <a href="/eng/story/now" className="main-header__more btn-more">
                <span className="a11y">View More</span>
              </a>
            </div>
            <ul className="shelf shelf--square" style={{position: 'relative', height: '733.474px'}}>
              <li className="shelf__item reveal" style={{position: 'absolute', left: '0px', top: '0px', opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
                <a href="#st" target="_blank" className="shelf__link linkblock">
                  <span className="shelf__thumb linkblock__box">
                    <img src="assets/imgs/82486899ehcb.png" className="shelf__img linkblock__img" alt="" />
                    <span className="shelf__icon shelf__icon--instagram" />
                  </span>
                  <span className="a11y">goto instagram</span>
                </a>
              </li>
              <li className="shelf__item reveal" style={{position: 'absolute', left: '396.625px', top: '0px', opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
                <a href="#st" target="_blank" className="shelf__link linkblock">
                  <span className="shelf__thumb linkblock__box">
                    <img src="assets/imgs/82486899ehcb.png" className="shelf__img linkblock__img" alt="" />
                    <span className="shelf__icon shelf__icon--instagram" />
                  </span>
                  <span className="a11y">goto instagram</span>
                </a>
              </li>
              <li className="shelf__item reveal" style={{position: 'absolute', left: '793.249px', top: '0px', opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
                <a href="#st" target="_blank" className="shelf__link linkblock">
                  <span className="shelf__thumb linkblock__box">
                    <img src="assets/imgs/82486899ehcb.png" className="shelf__img linkblock__img" alt="" />
                    <span className="shelf__icon shelf__icon--instagram" />
                  </span>
                  <span className="a11y">goto instagram</span>
                </a>
              </li>
              <li className="shelf__item reveal" style={{position: 'absolute', left: '0px', top: '336.737px', opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
                <a href="#st" target="_blank" className="shelf__link linkblock">
                  <span className="shelf__thumb linkblock__box">
                    <img src="assets/imgs/82486899ehcb.png" className="shelf__img linkblock__img" alt="" />
                    <span className="shelf__icon shelf__icon--instagram" />
                  </span>
                  <span className="a11y">goto instagram</span>
                </a>
              </li>
              <li className="shelf__item reveal" style={{position: 'absolute', left: '396.625px', top: '336.737px', opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
                <a href="#st" target="_blank" className="shelf__link linkblock">
                  <span className="shelf__thumb linkblock__box">
                    <img src="assets/imgs/82486899ehcb.png" className="shelf__img linkblock__img" alt="" />
                    <span className="shelf__icon shelf__icon--instagram" />
                  </span>
                  <span className="a11y">goto instagram</span>
                </a>
              </li>
              <li className="shelf__item reveal" style={{position: 'absolute', left: '793.249px', top: '336.737px', opacity: 1, transform: 'translate(0px, 0px)', visibility: 'inherit'}}>
                <a href="#st" target="_blank" className="shelf__link linkblock">
                  <span className="shelf__thumb linkblock__box">
                    <img src="assets/imgs/82486899ehcb.png" className="shelf__img linkblock__img" alt="" />
                    <span className="shelf__icon shelf__icon--instagram" />
                  </span>
                  <span className="a11y">goto instagram</span>
                </a>
              </li>
              <li className="shelf__gutter" />
            </ul>
          </div>
        </section>
      </main>
  )
}

export default AboutUs