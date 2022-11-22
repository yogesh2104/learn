import React, {useState} from "react";
import "./contactus.css";
import { BsPatchQuestion, BsStars, BsArrowUpRight, BsArrowRight} from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const ContactUs = () => {
  const [successMsg, setSuccessMsg] = useState('')
  const [contact, setcontact] = useState(
    {
      name:'',
      email:'',
      phone:'', 
      message:''
    }
  )
  const [validation , setvalidation] = useState({
    name:'',
    email:'',
    message:''
  })
  const checkValidation=()=>{
    let error = validation;
    if(!contact.name.trim()){
      error.name="Name is required."
    }
    else{
      error.name=''
    }
    if(!contact.email.trim()){
      error.email="Email is Required."
    }
    else if(!contact.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|("."))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      error.email="Enter Valid Email."
    }
    else{
      error.email=''
    }
    if(!contact.message.trim()){
      error.message="Message is Required."      
    }
    else{
      error.message="" 
    }
    setvalidation(error)
  }
  
  const handelInputChange=(event)=>{
    setcontact((preProps)=>({
      ...preProps,[event.target.name] : event.target.value
    }))
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    checkValidation()
    const {name, email, message} = validation
    if(name==='' && email==='' && message===''){
      setSuccessMsg("Thank you for your message. It has been sent.")
    }
    setcontact({
      name:'',
      email:'',
      phone:'',
      message:''

    })
  }
  console.log("sdsafsafs:",successMsg);
  return (
    <>
      <section className="keepInTouch">
        <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center mr">
                <h2 className="font text-center">Keep In Touch with Us</h2>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="mr">
                <p className="text-center">
                  Our Customer Care team are available for support Monday –
                  Friday from 9am to 5pm GMT. Alternatively, look to our
                  <a className="hrefA" href="/faqs/">
                    FAQs
                  </a>
                  page for answers to common queries.
                </p>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="mr2">
                <p className="text-center">
                  Contact us on +12 (0)20 654 4522 or use the form below to
                  submit your email, and please note response times are
                  currently up to 48 hours during this busy period.
                </p>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
                <span><input className="w-100 inpCls mb" placeholder="Your Name*" name="name" value={contact.name} onChange={handelInputChange}/>
                {validation.name && <p className="text-danger">{validation.name}</p>}</span>
            </div>
            <div className="col-lg-5">
                <input className="w-100 inpCls" placeholder="Your Email*" name="email" value={contact.email}  onChange={handelInputChange}/>{validation.email && <p className="text-danger">{validation.email}</p>}
            </div>
            <div className="col-lg-1"></div>
          </div>
          <br/>
          <div className="row">
          <div className="col-lg-1"></div>
            <div className="col-lg-10">
                <span><input className="inpCls w-100" placeholder="Your Phone(Optional)" name="phone" value={contact.phone} onChange={handelInputChange}/></span>
            </div>
            <div className="col-lg-1"></div>
          </div>
          <br/>
          <div className="row">
          <div className="col-lg-1"></div>
            <div className="col-lg-10">
                <span className="mb-4"><textarea className="inpCls w-100" placeholder="Message..." cols="40" rows="10" name="message" value={contact.message} onChange={handelInputChange}/>{validation.message && <p className="text-danger">{validation.message}</p>}</span>
            </div>
            <div className="col-lg-1"></div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center">
                <button className="btnCls transiton" type="submit">Send Message</button>
            </div>
            <div className="d-flex justify-content-center mt-4 text-success"><span className="border p-3 text-center">{successMsg}</span></div>
          </div>
        </form>
        </div>
      </section>
      <section className="m-4">
        <div className="row">
            <div className="col-md-4 mb">
                <div className="d-flex justify-content-center divHeight">
                    <div className="text-center BoxCard">
                        <a href="!#" className="anchorTag">
                        <div className="boxIcon"><BsPatchQuestion className="BsIcon"/></div>
                        <div className="boxTitle">FAQ</div>
                        <div className="boxContent">Most questions can be answered here.</div>
                        <div className="boxGoMore">GO TO FAQS<BsArrowUpRight className="pdB"/></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb">
            <div className="d-flex justify-content-center divHeight">
                    <div className="text-center BoxCard">
                        <a href="mailto:contact%20@auriane.com" className="anchorTag">
                        <div className="boxIcon"><TfiEmail className="BsIcon"/></div>
                        <div className="boxTitle">Email</div>
                        <div className="boxContent">Send us an email to speak to an agent directly.</div>
                        <div className="boxGoMore">CONTACT@AURIANE.COM<BsArrowUpRight className="pdB"/></div>
                        </a>
                    </div>
            </div>
            </div> 
            <div className="col-md-4 mb">
            <div className="d-flex justify-content-center divHeight">
                    <div className="text-center BoxCard">
                        <a href="!#" className="anchorTag">
                        <div className="boxIcon"><BsStars className="BsIcon"/></div>
                        <div className="boxTitle">Partnerships</div>
                        <div className="boxContent">Interested in partnering with Auriane?</div>
                        <div className="boxGoMore">APPLY HERE<BsArrowUpRight className="pdB"/></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="google-map map-style m-4">
          <div className="container">
            Map Component Place
          </div>
      </section>
      <section className="newsletter">
        <div className="d-flex justify-content-center">
          <h1>Sign up for our newsletter</h1>
        </div>
        <div className="d-flex justify-content-center ">
          <p className="w-25 text-center p">NEW BLACK FRIDAY FLASH SALES Up to 50% off*</p>
        </div>
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-3 mb"><input className="w-100 inpCls" placeholder="Email Address..."/></div>
          <div className="col-lg-2"><button className="joinBtn">Join<BsArrowRight className="ml"/></button></div>
          <div className="col-lg-3"></div>
        </div>
        <div className="d-flex justify-content-center"><p className="w-50 mt-3 text-center">By signing up you agree with our Terms & Conditions and Privacy Policy. To opt out, click Unsubscribe in our emails.</p></div>
      </section>
    </>
  );
};

export default ContactUs;
