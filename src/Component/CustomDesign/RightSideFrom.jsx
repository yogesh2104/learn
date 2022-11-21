import React from 'react'
//import ReCAPTCHA from "react-google-recaptcha"; // npm install --save react-google-recaptcha

const RightSideFrom = () => {
  return (
    <>
    <div className='row custom_box padding'>
        <div className="contact_title text-center">
            <p className='mb-0 font-18'>
                <b>Contact Infromation</b>
            </p>
        </div>
        <form>
        <div className='col-md-12 p-0 ml-3'>
            <div className='from_Group col-md-12'>
                <label htmlFor='fname'>First Name<span className='mark_red'>*</span></label>
                <input type="text" className="form_control" id="fname" placeholder='Frist Name'/>
            </div>
            <div className='from_Group col-md-12'>
                <label htmlFor='lname'>Last Name<span className='mark_red'>*</span></label>
                <input type="text" className="form_control" id="lname" placeholder='Last Name'/>
            </div>
            <div className='from_Group col-md-12'>
                <label htmlFor='email'>Email Address<span className='mark_red'>*</span></label>
                <input type="email" className="form_control" id="email" placeholder='Email Address'/>
            </div>
            <div className='from_Group col-md-12'>
                <label htmlFor='contact'>Contact Number<span className='mark_red'>*</span></label>
                <input type="text" className="form_control" id="contact" placeholder='Contact Number'/>
            </div>
            <div className='from_Group col-md-12'>
                <label htmlFor='best_time'>Best Contact Time<span className='mark_red'>*</span></label>
                <input type="date" className="form_control" id="best_time" placeholder='Best Contact Time '/>
            </div>
            <div className='from_Group col-md-12'>
                <label htmlFor='budget'>Budget<span className='mark_red'>*</span></label>
                <div className='input_group'>
                    <span className='input-group-addon'>$</span>
                    <input type="text" className="form_control" id="budget" placeholder='Your Budget'/>
                </div>
            </div>
            <div className='from_Group col-md-12'>
                <label htmlFor='remark'>Remark</label>
                <textarea rows="5" cols="40" placeholder="Remarks" name="Remark" id="remark" class="form_control mb-30"></textarea>
            </div>
            <p className='font-18 mb-0 text-center'>Register Details</p>
            <div className='from_Group col-md-12'>
                <label htmlFor='password'>Password<span className='mark_red'>*</span></label>
                <input type="password" className="form_control" id="password" placeholder='Password' autoComplete='off'/>
            </div>
            <div className='from_Group col-md-12'>
                <label htmlFor='com-password'>Confirm Password<span className='mark_red'>*</span></label>
                <input type="password" className="form_control" id="com-password" placeholder='Confirm Password' autoComplete='off'/>
            </div>
            <div className='from_Group col-md-12'>
                <label htmlFor='address'>Address<span className='mark_red'>*</span></label>
                <textarea rows="2" cols="40" placeholder="Address" name="address" id="address" class="form_control mb-30"></textarea>
            </div>

            <div className='from_Group col-md-12'>
                <label htmlFor='country'>Country<span className='mark_red'>*</span></label>
                <select className='form_control' name="country" id="country">
                    <option>India</option>
                </select>
            </div>

            <div className='from_Group col-md-12'>
                <label htmlFor='state'>State<span className='mark_red'>*</span></label>
                <select className='form_control' name="state" id="state">
                    <option>Gujarat</option>
                </select>
            </div>

            <div className='from_Group col-md-12'>
                <label htmlFor='city'>City<span className='mark_red'>*</span></label>
                <input type="text" className="form_control" id="city" placeholder='City'/>
            </div>

            <div className='from_Group col-md-12'>
                <label htmlFor='post_code'>Post Code<span className='mark_red'>*</span></label>
                <input type="text" className="form_control" id="post_code" placeholder='Post Code'/>
            </div>

            <div className='from_Group col-md-12'>
            {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} /> */}
            </div>

            <div className='col-md-12 margin-top from_Group'>
                <button className='btn submit submit-btn'>Submit</button>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default RightSideFrom