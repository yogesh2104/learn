import React, {useEffect} from "react";
import "./AboutUs.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ExploreCard from "./ExploreCard";

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <section id="wrapper">
      <div className="container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="!#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>About Us</Breadcrumb.Item>
        </Breadcrumb>
        <section id="main">
            <header className="header">
                <h1>About Us</h1>
            </header>
            <div className="row pb">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-sp-12">
                    <div className="block">
                        <img className="img-fliud" src="https://cdn.shopify.com/s/files/1/0905/2012/files/about-00.jpg" alt="main_img" width="100%" height="auto" />
                    </div>
                </div>
            </div>
            <div className="row pb homemade">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-sp-12">
                    <div className="block has-pattern-button">
                    <h4 className="title_">JEWELLERY THAT RESPECTS NATURE AND HUMANKIND</h4>
                    <div className="sub_title">All of our jewellery is handmade with Fairmined gold in our workshop in France</div>
                    </div>
                </div>
            </div>
            <div className="row flex-w pb-120">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-sp-12">
                <img className="img-fliud" src="https://cdn.shopify.com/s/files/1/0905/2012/files/about-01.jpg" alt="main_img" width="100%" height="auto" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-sp-12">
                    <div className="text-w right-side">
                        <h4 className="title_">HOW WE STARTED</h4>
                        <div className="sub_title">Our first studio was the kitchen floor.</div>
                        <p>Chrissy was a single mom, and she wanted to create the perfect personalized  gift. She started making handmade, personalized jewelry out of her kitchen, 
                            and selling on Etsy. When she had to move into the dining room, she thought she had made it big!</p>
                        <p>Six years later, aro has three workspaces and employs over 85 people. And arojewelry makers still use their 
                            hands to create high quality jewelry that’s accessible for all and made personal by you.</p>
                        <p>Not bad for the kitchen floor.</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
      <div className="bg-color">
        <div className="container position">
            <div className="row pt-120 pb-120 about-ceo">
               <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-sp-12">
                <p className="ceo-quotes mt-10">“Every time you make the hard, correct decision you become a bit more courageous, and every time you make the easy, wrong decision you become a bit more cowardly. If you are CEO, 
                these choices will lead to a courageous or cowardly company.”</p>
                <img className="ceo-sign" src="https://cdn.shopify.com/s/files/1/0905/2012/files/southam.svg" alt="sign"/>
                <div className="ceo-name">–Noura Sakkijha, CEO</div>
               </div>
            </div>
            <div className="mt-30 top top-responsive">
                <img className="img-fluid" width="auto" height="auto" src="https://cdn.shopify.com/s/files/1/0905/2012/files/about-03.jpg" alt="ceo_top_positionImg"/>
            </div>
            <div className="buttom bottom-responsive">
                <img className="img-fluid" width="auto" height="auto" src="https://cdn.shopify.com/s/files/1/0905/2012/files/about-10.png" alt="ceo_bottom_positionImg"/>
            </div>
            <div className="right mt-30 mb right-responsive">
                <img className="img-fluid" width="auto" height="auto" src="https://cdn.shopify.com/s/files/1/0905/2012/files/about-02.jpg" alt="ceo_right_positionImg"/>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-res">
            <div className="sub_title pt-120">more to explore</div>
            <ExploreCard />
        </div>

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-sp-12">
            <div className="appointement pt-120">
                <h4 className="title_ pt">TELL US WHAT YOUR DESIRE</h4>
                <div className="sub_title lower">It is important to us that you be thecenter of our attention, and that we accompany you thoroughly in the process of choosingof your jewellery.</div>
                <a href="!#" class="link-primary">TAKE AN APPOINTEMENT</a>
            </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
