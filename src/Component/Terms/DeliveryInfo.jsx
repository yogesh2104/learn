import React from 'react';
import SideBar from "./SideBar";
import "./terms.css";

const DeliveryInfo = () => {
  return (
    <>
    <section className="bg padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div>
                <p className="head_title">The Expression of Love</p>
                <h2 className="title">Delivery Information</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 ">
              <SideBar/>
            </div>
            <div className="col-lg-9 col-md-8">
             <p className="head_title">DELIVERY INFORMATION</p>
             <p className="txt">Meraya believes in providing a hassle-free shopping experience to its customers. We believe that our job extends to the time after you receive your order. We have a simple shipping procedure to make the customers’ lives easy. We ensure the products to be delivered are fully insured until your package reaches your doorstep. We would appreciate it if you check the order thoroughly once you receive it. In case of any discrepancy, get in touch with us.</p>
             <p className="txt">We do a thorough process of inspection before shipping your order. We believe not only in delivering quality but also in exceptional customer service. We would advise you to go through our delivery policy to get a better understanding of our services.</p>
             <p className="head_title">Courier partners</p>
             <p className="privacy-txt">We have partnered with reputed and ethical courier companies. They include both local and international courier companies. The delivery above value of US$ 3000 does not add any additional charges on your order value. The delivery time of the products will depend on the quantity of the order and location of the shipping address. We make sure that your order is properly packed and there is no harm or damage to your courier during the transit.</p>
             <p className="head_title">Free shipping/shipping costs</p>
             <p className="txt">The shipping costs will depend on the quantity of the order. We provide free shipping services of the order above US$ 3000. The regular shipping on products will not incur any additional charges in India. However, Meraya won’t be responsible for additional charges that might get levied on international orders. The additional charges such as customs duties, VAT, taxes, or surcharges may be imposed by the country on your package. Meraya won’t be responsible for any kind of additional charges. So, it is advised that you check in with the local government authorities before placing an order to get an idea of additional charges that might be levied.</p>
             <p className="head_title">Delivery location</p>
             <p className="txt">We deliver worldwide. We deliver to the address given by the customer while placing the order. Please note that current waiver of shipping fees is limited to India and USA. Shipping charges may vary depending on Shipping location. The rerouting of the packages to the alternate addresses is not possible once the order is in transit. However, if you want the package to be held, you can reach out to us.</p>
             <p className="head_title">Delivery time</p>
             <p className="txt">You will receive your order within the time frame of 7 to 10 business working days in India. In the case of international orders, the delivery time will vary from one week to three weeks.</p>
             <p className="head_title">Delivery instructions</p>
             <p className="txt">We deliver your orders only to physical addresses and not P.O. Box addresses. The shipping address you provide can be a home, business, office or, alternate address you want to provide. You or, someone on your behalf needs to be physically present to acknowledge the package. The signature of the person who is collecting the package will also be recorded.</p>
             <p className="head_title">Insurance</p>
             <p className="txt">Meraya believes in delivering the products in fit and fine condition. It makes every effort to prevent the loss or damage that may occur during the transit. All the orders are insured for the whole transit until the time they reach your doorstep.</p>
             <p className="head_title">Packaging</p>
             <p className="txt">We believe in crafting world-class lab grown diamonds at Meraya. We always focus on quality than quantity. Our products undergo a thorough process of several quality checks before they are out for order.  The packaging is the most important factor through which we ensure the safe delivery of our products.  We put a conscious thought in designing the packaging styles that are both safe and eye-pleasing. Our packing involves multiple layers of covers that ensure there are no shipping mishaps.</p>
             <p className="head_title">Orders Tracking</p>
             <p className="privacy-txt">Once you place the order, the unique transaction ID will be generated. This ID will help you to track your order. You will receive an email regarding all the details about your order. The email will also contain the estimated delivery time for your order to be delivered. For further tracking information, you can reach out to us at (<a href="tel:+1 (202) 985-2182">+1 (202) 985-2182</a>)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DeliveryInfo