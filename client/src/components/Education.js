import React, { Component } from 'react';
import ScrollToTop from './ScrollToTop';



class Profile extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <>
      <ScrollToTop />
        <div className='mt-10'>
          <div className="p-4 bg-clip-padding bg-gray-200  bg-opacity-10  rounded-2xl w-[100%] lg:w-[80%] m-auto" style={{backdropFilter: "blur(20px)"}} >
            <div className="p-4">
              <h3 className="text-2xl font-extrabold  text-white">Education Details</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <div className="md:col-span-4">
                  <label className="block mb-2 font-medium  text-white" htmlFor="college">
                    College/University
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="text"
                    id="college"
                    placeholder='college'
                    name="college"
                    value={values.college}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-4">
                  <label className="block mb-2 font-medium  text-white" htmlFor="fromyear1">
                    From Year
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="date"
                    id="fromyear1"
                    name="fromyear1"
                    value={values.fromyear1}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-4">
                  <label className="block mb-2 font-medium  text-white" htmlFor="toyear1">
                    To Year
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="date"
                    id="toyear1"
                    name="toyear1"
                    value={values.toyear1}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-4">
                  <label className="block mb-2 font-medium  text-white" htmlFor="qualification1">
                    Qualification
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="text"
                    placeholder='qualification'
                    id="qualification1"
                    name="qualification1"
                    value={values.qualification1}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-8">
                  <label className="block mb-2 font-medium  text-white" htmlFor="description1">
                    Description
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="text"
                    id="description1"
                    placeholder='description'
                    name="description1"
                    value={values.description1}
                    onChange={this.props.handleChange}
                  />
                </div>
              </div>
            </div>

              <hr className='border borde-white' />
            <div className="p-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <div className="md:col-span-4">
                  <label className="block mb-2 font-medium  text-white" htmlFor="college">
                    SCHOOL
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="text"
                    id="school"
                    placeholder='school'
                    name="school"
                    value={values.school}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-4">
                  <label className="block mb-2 font-medium  text-white" htmlFor="fromyear1">
                    From Year
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="date"
                    id="fromyear2"
                    name="fromyear2"
                    value={values.fromyear2}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-4">
                  <label className="block mb-2 font-medium  text-white" htmlFor="toyear1">
                    To Year
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="date"
                    id="toyear2"
                    name="toyear2"
                    value={values.toyear2}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-4">
                  <label className="block mb-2 font-medium  text-white" htmlFor="qualification1">
                    Qualification
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="text"
                    placeholder='qualification'
                    id="qualification2"
                    name="qualification2"
                    value={values.qualification2}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-8">
                  <label className="block mb-2 font-medium  text-white" htmlFor="description1">
                    Description
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="text"
                    id="description2"
                    placeholder='description'
                    name="description2"
                    value={values.description2}
                    onChange={this.props.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="m-3 mt-5 flex justify-between">
                <button
                  className='bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded-full'
                  onClick={this.back}
                >
                  Back
                </button>
                <button
                  onClick={this.continue}
                  className = "bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded-full"
                >
                  Next
                </button>
          </div>

          <p className="text-center text-white opacity-[0.2]">Page 2</p>

          </div>
          </div>
        </>
        );
  }
}
export default Profile;
