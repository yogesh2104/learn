import React, {useState, useEffect} from 'react';
import './labGrow.css';
import InfiniteScroll from "react-infinite-scroll-component"; //! npm install --save react-infinite-scroll-component
// import HorizontalScroll from 'react-horizontal-scrolling'
const LabGrow = () => {
    const [select, setSelected] = useState('')
    const baseurl = "http://192.168.1.215/stage_dioraadams/api/parameters";
  const [getresults, setShapeResult] = useState([]);


    useEffect(() => {
        getData();
      }, []);
    const getData = async () => {
        let formData = new FormData();
        formData.append("type", "diamond");
        formData.append("paraname[]", "Shape");
        formData.append("paraname[]", "Clarity");
        formData.append("paraname[]", "Color");
    
        await fetch(baseurl, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            setShapeResult(data?.data);
          });
      };
    
    const handleChange = (e) => {
        const { name, checked } = e.target;
        if(checked){
          if(name==="Shape"){
             setSelected(e.target.value);
          }
        }
      };

    //   console.log(select)
  return (
    <>
    <div className='parallax parallax_bg'>
        <div>
        <div className='container'>
            <div className='banner-div'>
                <h1 className='title'>What is a lab grown diamond?</h1>
                <p className='p-text'>Would you be excited if we told you diamonds can be manufactured in a lab? Lab created diamonds are the technology product that converts carbon seeds into the diamonds. The phenomenon of creation of mined diamonds takes place under the mother earth at extreme pressure and temperature conditions. Whereas for the creation of lab grown diamonds the scientists replicate the same process but in the laboratory. The creation of these diamonds is similar to the process of farming in a greenhouse.</p>
            </div>
        </div>
        </div>
    </div>
    <section className='why-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-7 mb-30'>
                <div>
                    <h1 className='title'>Why lab grown diamonds?</h1>
                    <p className='p-text'> You might be wondering why we should purchase lab grown diamonds, they are not even real.  But, they are as real as mined diamonds. They are created under the same extreme pressure and heat situations under which the mined diamonds were created in the earth’s crust. The only difference is the origin of the creation.</p>
                    <p className='p-text'> The lab grown diamonds cost around 50%-60% less than the mined diamonds. Imagine the amount of saving you would make by purchasing a lab grown diamond. Moreover, fashion changes every day and you surely don’t want to wear outdated designs. Lab grown diamonds provide you a room to invest in more than one jewelry due to its affordable rates. You can ace your fashion game by buying Meraya’s exclusive and latest lab grown diamonds and jewelry.</p>
                    <p className='p-text'>Lab grown diamonds are strong and durable. So put a full stop to your worries and you can be assured to hand them over to the next generation.</p>
                    <p className='p-text'>The lab grown diamonds also go through the same certification process as mined diamonds. There is no compromise in the quality of the diamonds at Meraya. We always believe in quality over quantity. We deliver valuable and high-quality lab grown diamonds to our customers by adopting a proper certification process.</p>
                </div>
                </div>
                <div className='col-md-5 mb-30'>
                    <div>
                        <img src="https://www.meraya.one/webassets/images/staticpage/deal-hero-image.png" className='img-fluid' alt="deal_hero"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='why-section bg'>
        <div className='container'>
            <h1 className='title text-center'>Benefits of using Lab grown diamonds</h1>
            <p className='text-center'>Meraya provides an exotic collection of Lab Grown Diamonds</p>
            <br/>
            <ul className='pl-0 ul_class'>
                <label className='budget_friend_title'>Budget-Friendly</label>
                <li>
                    <p className='p-text'>Looking for an elegant diamond but tight on budget? Lab grown diamonds cost 50-60% less than mined diamonds that make them extremely affordable. You can ace your fashion game by buying Meraya’s exclusive diamond and jewelry collection without hurting your pockets.</p>
                </li>
                <label className='budget_friend_title'>Sustainable Choice</label>
                <li>
                    <p className='p-text'>Lab grown diamonds are a sustainable choice in a way that they do not result of mining, deforestation, and land degradation. It helps the customer to make a comparatively responsible and green choice.</p>
                </li>
                <label className='budget_friend_title'>Quality Assurance</label>
                <li>
                    <p className='p-text'>We provide top and exquisite quality lab grown diamonds to celebrate the love and beauty of your relationships. The value of a diamond is determined by its quality and we always believe in creating quality over quantity.</p>
                </li>
            </ul>
        </div>
       
    </section>
    <section className='why-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='h1_class title text-center'>Shop Diamond By Shapes</h1>
                    <p className='text-center mb-20'>Collection of lab-created diamonds</p>
                </div>
                <div className='text-center demo'>
                <InfiniteScroll dataLength={6} >
                    {
                        getresults?.Shape?.map((item, index)=>{
                            return(
                                <label key={index} className="option_itm main">
                                    <input type="radio"className="checkbox none_display"onChange={handleChange} name='Shape' value={item.id}/>
                                    <div className='item option_in main'>
                                        <img className='mt-3' src={item.image} alt={item.name} width="80px" height="60px"/>
                                        <label className='labels'>{item.name}</label>
                                    </div>
                                </label>
                            )
                        })
                    }
                </InfiniteScroll>
                <br/>
                <br/>
                <br/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-5 mb-30'>
                    <div>
                        <img src="https://www.meraya.one/webassets/images/staticpage/Diamonds.png" className='img-fluid' alt="deal_hero"/>
                    </div>
                </div>
                <div className='col-md-7 mb-30'>
                <div>
                    <h1 className='title'>How our lab grown diamonds are certified and graded?</h1>
                    <p className='p-text'> The lab grown diamonds are graded and certified in the same way as mined diamonds. A proper certification process is followed to certify a lab grown diamond.</p>
                    <p className='p-text'> The 4C’s- Cut, Color, Clarity, and Carat are the common parameters that form the basis of the foundation of the grading and certification process. It depends on the certification labs what is the combination of criteria they want to use.</p>
                    <p className='p-text'>There are various certification labs available all over the world. Each certification lab has a unique process of grading and certification of diamonds. Each diamond is graded by several gemologists at the lab. The individual grades are compiled and analyzed to determine the final grade. This process is designed to give an unbiased grade to every diamond.</p>
                    <p className='p-text'>Meraya, one of the prominent lab-grown diamond manufacturers in India, focuses on conducting a proper quality check process to ensure the quality of the products. The diamonds are checked and graded by in house team of gemologists and then are sent to the reputed certification labs. It has partnered with the most trusted and popular certification labs for the certification process of the diamonds.</p>
                </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className='row'>
                <div className='col-md-7 mb-30'>
                <div>
                    <h1 className='title'>Lab Grown Diamonds V/s. Mined DiamondsHow our lab grown diamonds are certified and graded?</h1>
                    <p className='p-text'> Let us understand the comparison between Lab Grown Diamonds V/s. Mined Diamonds in this section.</p>
                    <p className='p-text'> The major difference between the lab grown and mined diamonds is the origin of the creation. The mined diamonds were the creation of nature’s miracles and its mystical significance. They share physical and chemical compounds and properties.</p>
                    <p className='p-text'>The intensity of the difference is created by the perspective of the shopper or visitor. What is more important to you- price, quality, or origin? It depends whether you are in awe of nature’s miracles or intrigued by the incredible technological progression.</p>
                    <p className='p-text'>It is more about how you feel and which diamond will be able to best express your love or compliment your beauty.</p>
                </div>
                </div>
                <div className='col-md-5 mb-30'>
                    <div>
                        <img src="https://www.meraya.one/webassets/images/staticpage/lab-grown-diamonds-uk.png" className='img-fluid' alt="deal_hero"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LabGrow;
