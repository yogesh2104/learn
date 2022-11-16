import React from 'react'

const LeftSideFrom = () => {
  return (
    <>
    <div className='col-md-12 custom-form'>
        <br/>
        <div>
            <div className='col-md-12 form-group'>
                <label className='font-18'>Choose jewelry type<span className='mark_red'>*</span></label>
                <div className='d-block'>
                    <label className='col-md-3 radio-new'>Rings
                          <input type="radio" data-value="rings" id="rings" value="rings"/>
                          <span className="radio-check"></span>
                    </label>
                    <label className='col-md-3 radio-new'>Bracelets
                          <input type="radio" data-value="bracelets" id="bracelets" value="rings"/>
                          <span className="radio-check"></span>
                    </label>
                   
                    
                </div>
            </div>
            <div className='col-md-12'>

            </div>
        </div>
    </div>
    </>
  )
}

export default LeftSideFrom