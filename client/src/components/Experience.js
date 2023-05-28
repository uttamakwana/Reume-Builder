import React, { Component } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScrollToTop from './ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Experience extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  allFieldsFilled = () => {
    const { values } = this.props;
    // Check if all required fields have a value
    if (
      values.company1.trim() === "" ||
      values.company2.trim() === "" ||
      values.position1.trim() === "" ||
      values.position2.trim() === "" ||
      values.internship_link1.trim() === "" ||
      values.internship_link2.trim() === "" ||
      values.internship_start_year1.trim() === "" ||
      values.internship_start_year2.trim() === "" ||
      values.internship_end_year1.trim() === "" ||
      values.internship_end_year2.trim() === "" ||
      values.internship_description1.trim() === "" ||
      values.internship_description2.trim() === ""
    ) {
      return true;
    }

    return true;
  };

  render() {
    const { values } = this.props;

    return (
      <>
      <ScrollToTop />
      <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{
            toast: {
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: '#ffff',
            },
          }}
        />

      <div className="p-4 bg-clip-padding bg-gray-700  bg-opacity-10  rounded-2xl w-[100%] lg:w-[80%] m-auto" style={{ backdropFilter: "blur(20px)" }}>
        <div className="p-4">
          <h3 className="text-2xl font-extrabold text-white">Internship / Experience Details</h3>
        </div>
        <div>
          <div className="">
            <div className='w-[100%]'>
              <h5 className='text-white'>
                <CheckCircleIcon  />
                <span className="pl-3 text-white">Internship / Experience - 1</span><span className="pl-1 text-red-500">*</span>
              </h5>
              <div className='flex flex-col' />
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="company1"
                  placeholder="Institue/Organisation/Company name*"
                  style={{ width: '90%' }}
                  value={values.company1}
                  onChange={this.props.handleChange}
                  required
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="position1"
                  placeholder="position*"
                  style={{ width: '90%' }}
                  value={values.position1}
                  onChange={this.props.handleChange}
                  required
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="internship_link1"
                  placeholder="Ex:- https://www.tcs.com/"
                  style={{ width: '90%' }}
                  value={values.internship_link1}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="internship_start_year1"
                  placeholder="start year*"
                  style={{ width: '90%' }}
                  required
                  value={values.internship_start_year1}
                  onChange={this.props.handleChange}

                />
              </div>

              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="internship_end_year1"
                  placeholder="end year*"
                  style={{ width: '90%' }}
                  required
                  value={values.internship_end_year1}
                  onChange={this.props.handleChange}
                />
              </div>

              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  placeholder='description*'
                  style={{ width: '90%' }}
                  name="internship_description1"
                  required
                  value={values.internship_description1}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <br />
            <hr className='border broder-white' />
            <br />
            <div className='w-[100%] text-white'>
              <h5 className=''>
                <CheckCircleIcon />
                <span className="pl-3 text-white">Internship / Experience - 2</span>
              </h5>
              <div className='flex flex-col' />
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="company2"
                  placeholder="Institue/Organisation/Company name"
                  style={{ width: '90%' }}
                  value={values.company2}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="position2"
                  placeholder="position"
                  style={{ width: '90%' }}
                  value={values.position2}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="internship_link2"
                  placeholder="Ex:- https://in.indeed.com/"
                  style={{ width: '90%' }}

                  value={values.internship_link2}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="internship_start_year2"
                  placeholder="start year"
                  style={{ width: '90%' }}
                  value={values.internship_start_year2}
                  onChange={this.props.handleChange}

                />
              </div>

              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="internship_end_year2"
                  placeholder="end year"
                  style={{ width: '90%' }}
                  value={values.internship_end_year2}
                  onChange={this.props.handleChange}
                />
              </div>

              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  placeholder='sescription'
                  style={{ width: '90%' }}
                  name="internship_description2"
                  value={values.internship_description2}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            {/* <div className='w-[100%]'>
              <h5 className=''>
                <CheckCircleIcon />
                <span className="pl-3 text-white">Experience 2</span>
              </h5>
              <div className='flex flex-col' />
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="institute2"
                  placeholder="Institue/Organisation*"
                  style={{ width: '90%' }}
                  required
                  value={values.institute2}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="position2"
                  placeholder="Position*"
                  style={{ width: '90%' }}
                  required
                  value={values.position2}
                  onChange={this.props.handleChange}

                />
              </div>

              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  name="duration2"
                  placeholder="Duration*"
                  style={{ width: '90%' }}
                  required
                  value={values.duration2}
                  onChange={this.props.handleChange}
                />
              </div>

              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border-[1px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm bg-[#3b3b3b] text-white"
                  placeholder='Description*'
                  style={{ width: '90%' }}
                  name="experienceDescription2"
                  required
                  value={values.experienceDescription2}
                  onChange={this.props.handleChange}
                />
              </div>
            </div> */}
            <br />
            <hr className='border broder-white' />
            <br />
          </div>
        </div>
        <div className="m-3 mt-5 flex justify-between">
                <button
                  className='bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded-full'
                  onClick={this.back}
                >
                  Back
                </button>
                {this.allFieldsFilled() ? (
                <button className='bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded-full' onClick={this.continue}>
                  Next
                  <i className="fa fa-long-arrow-right ml-1"></i>
                </button>
              ) : (
                <button className='inline-block bg-gray-400 pt-2.5 pb-2 disabled:opacity-70  text-gray-700 font-bold py-2 px-4 rounded-full ' onClick={()=>{toast.error('Please Fill all required Feilds..!');}}>
                  Next
                  <i className="fa fa-long-arrow-right ml-1"></i>
                </button>
              )}
          </div>

          <p className="text-center  opacity-[0.2]">Page 4</p>
      </div>
      </>
    );
  }
}

export default Experience;
