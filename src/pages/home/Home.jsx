import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Banner from "./Banner";
import OurSellers from "./OurSellers";
import News from "./News";
import { Helmet } from "react-helmet";
import FadeInSection from "../../Animations/FadeInSection.jsx";
import "../../Styles/StylesHome.css"; // Optional additional styles

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="main-content">
    <div className="home-container px-4 sm:px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
      {/* Set the title for the Home Page */}
      <Helmet>
        <title>{t("home_title")}</title>
        <meta name="description" content={t("home_meta_description")} />
      </Helmet>

      {/* 🏡 Welcome Message */}
      <FadeInSection>
        <section className="text-center py-8">
          <h1 className="text-3xl font-bold" style={{ color: "#A67C52" }}>
            {t("home")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3 px-2">
            <Trans i18nKey="home_intro_html">
              Welcome to <strong>Wahret Zmen Boutique</strong>, where tradition meets elegance.
              Explore our handcrafted garments, inspired by Tunisia’s rich cultural heritage.
              Experience timeless fashion that blends history with modern refinement.
            </Trans>
          </p>
        </section>
      </FadeInSection>

      {/* ✨ Banner Section */}
      <FadeInSection delay={0.2}>
        <section className="mb-12">
          <Banner />
          <div className="text-center mt-6">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto px-2">
              {t("home_banner_text")}
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* 🛍️ Our Sellers Section */}
      <FadeInSection delay={0.3}>
        <section className="py-10 bg-gray-100 rounded-2xl shadow-md mt-10">
          <div className="text-center px-2 sm:px-4">
            <h2 className="text-2xl font-semibold" style={{ color: "#8A5D3B" }}>
              {t("our_sellers")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
              <Trans i18nKey="our_sellers_intro_html">
                Explore our collection of traditional garments, each crafted with care and cultural authenticity.
                From elegant <strong>Kaftans</strong> to classic <strong>Jebbas</strong>, discover the beauty of heritage in every piece.
              </Trans>
            </p>
          </div>
          <OurSellers />
        </section>
      </FadeInSection>

      {/* 🆕 Latest News & Trends Section */}
      <FadeInSection delay={0.4}>
        <section className="py-10 bg-white rounded-2xl shadow-md mt-10">
          <div className="text-center px-2 sm:px-4">
            <h2 className="text-2xl font-semibold" style={{ color: "#5C3D2E" }}>
              {t("latest_news")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
              {t("latest_news_intro")}
            </p>
          </div>
          <News />
        </section>
      </FadeInSection>
    </div>
    </div>
  );
};

export default Home;
