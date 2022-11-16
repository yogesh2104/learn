import React from 'react'
import Form from 'react-bootstrap/Form';
const LeftSideFrom = () => {
  return (
    <>
    <div className='col-md-12 custom-form'>
        <br/>
        <div>
            <div className='col-md-12 form-group'>
                <label className='font-18'>Choose jewelry type<span className='mark_red'>*</span></label>
                <div className='d-block'>
                    {/* <label className='col-md-3 radio-new'>Rings
                          <input type="radio" data-value="rings" id="rings" value="rings"/>
                          <span className="radio-check"></span>
                    </label> */}
                    <Form.Check
                        inline
                        label="1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LeftSideFrom