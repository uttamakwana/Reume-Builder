import React, { Component } from "react";
import ScrollToTop from "./ScrollToTop";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Profile extends Component {

  state = {
    isDiploma : true
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  allFieldsFilled = () => {
    const { values } = this.props;

    // Check if all required fields have a value
    if (
      values.college.trim() === "" ||
      values.university.trim() === "" ||
      values.degree.trim() === "" ||
      values.degree_end_year.trim() === "" ||
      values.degree_start_year.trim() === ""
    ) {
      return false;
    }

    return true;
  };

  render() {
    const { values } = this.props;
    console.log(this.state.isDiploma);
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
        <div className="mt-10">
          <div
            className="p-4 bg-clip-padding bg-gray-200  bg-opacity-10  rounded-2xl w-[100%] lg:w-[80%] m-auto"
            style={{ backdropFilter: "blur(20px)" }}
          >
            <div className="p-4">
              <h3 className="text-2xl font-extrabold  text-white">
                Education Details
              </h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <div className="md:col-span-6">
                  <label
                    className="block mb-2 font-medium  text-white"
                    htmlFor="college"
                  >
                    College
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="text"
                    id="college"
                    placeholder="College name"
                    name="college"
                    value={values.college}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-6">
                  <label
                    className="block mb-2 font-medium  text-white"
                    htmlFor="university"
                  >
                    University
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="text"
                    id="university"
                    placeholder="University name"
                    name="university"
                    value={values.university}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-3">
                  <label
                    className="block mb-2 font-medium  text-white"
                    htmlFor="degree_start_year"
                  >
                    From Year
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="year"
                    id="degree_start_year"
                    name="degree_start_year"
                    value={values.degree_start_year}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-3">
                  <label
                    className="block mb-2 font-medium  text-white"
                    htmlFor="degree_end_year"
                  >
                    To Year
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="year"
                    id="degree_end_year"
                    name="degree_end_year"
                    value={values.degree_end_year}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="md:col-span-6">
                  <label
                    className="block mb-2 font-medium  text-white"
                    htmlFor="degree"
                  >
                    Qualification
                  </label>
                  <input
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="text"
                    placeholder="Qualification"
                    id="degree"
                    name="degree"
                    value={values.degree}
                    onChange={this.props.handleChange}
                  />
                </div>
                {/* <div className="md:col-span-8">
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
                </div> */}
              </div>
            </div>

            <hr className="border borde-white" />


            <div className="p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12">

                  <div className="md:col-span-6">
                    <label className="mr-2 font-medium text-white" >10/12th</label>
                    <input type="radio" name="school" onClick={() => {this.setState({isDiploma : true}); console.log("first", this.state.isDiploma)}}/>
                  </div>

                  <div className="md:col-span-6">
                    <label className="mr-2 font-medium text-white">Diploma</label>
                    <input type="radio" name="school" onClick= {() => {this.setState({isDiploma : false}); console.log("second", this.state.isDiploma)}}/>
                  </div>
                </div>

            </div>
            {this.state.isDiploma ? (
              <>
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                    <div className="md:col-span-4">
                      <label
                        className="block mb-2 font-medium  text-white"
                        htmlFor="ssc"
                      >
                        10th Board
                      </label>
                      <input
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="text"
                        id="ssc"
                        placeholder="SSC"
                        name="ssc"
                        value={values.ssc}
                        onChange={this.props.handleChange}
                      />
                    </div>
                    <div className="md:col-span-4">
                      <label
                        className="block mb-2 font-medium  text-white"
                        htmlFor="ssc_school"
                      >
                        School Name
                      </label>
                      <input
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="text"
                        id="ssc_school"
                        name="ssc_school"
                        placeholder="School name"
                        value={values.ssc_school}
                        onChange={this.props.handleChange}
                      />
                    </div>
                    <div className="md:col-span-4">
                      <label
                        className="block mb-2 font-medium  text-white"
                        htmlFor="ssc_year"
                      >
                        10th passing year
                      </label>
                      <input
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="year"
                        id="ssc_year"
                        placeholder="Ex. 2018"
                        name="ssc_year"
                        value={values.ssc_year}
                        onChange={this.props.handleChange}
                      />
                    </div>

                    <div className="md:col-span-4">
                      <label
                        className="block mb-2 font-medium  text-white"
                        htmlFor="hsc"
                      >
                        12th Board
                      </label>
                      <input
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="text"
                        id="hsc"
                        placeholder="HSC"
                        name="hsc"
                        value={values.hsc}
                        onChange={this.props.handleChange}
                      />
                    </div>
                    <div className="md:col-span-4">
                      <label
                        className="block mb-2 font-medium  text-white"
                        htmlFor="hsc_school"
                      >
                        School Name
                      </label>
                      <input
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="text"
                        id="hsc_school"
                        name="hsc_school"
                        placeholder="School name"
                        value={values.hsc_school}
                        onChange={this.props.handleChange}
                      />
                    </div>
                    <div className="md:col-span-4">
                      <label
                        className="block mb-2 font-medium  text-white"
                        htmlFor="hsc_year"
                      >
                        12th passing year
                      </label>
                      <input
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="year"
                        id="hsc_year"
                        placeholder="Ex. 2020"
                        name="hsc_year"
                        value={values.hsc_year}
                        onChange={this.props.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <label
                      className="block mb-2 font-medium  text-white"
                      htmlFor="diploma"
                    >
                      Diploma
                    </label>
                    <input
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      type="text"
                      id="diploma"
                      placeholder="Diploma degree name"
                      name="diploma"
                      value={values.diploma}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="md:col-span-4">
                    <label
                      className="block mb-2 font-medium  text-white"
                      htmlFor="diploma_place"
                    >
                      University Name
                    </label>
                    <input
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      type="text"
                      id="diploma_place"
                      name="diploma_place"
                      placeholder="University name"
                      value={values.diploma_place}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="md:col-span-4">
                    <label
                      className="block mb-2 font-medium  text-white"
                      htmlFor="diploma_start_year"
                    >
                      Start year
                    </label>
                    <input
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      type="year"
                      id="diploma_start_year"
                      name="diploma_start_year"
                      placeholder="Ex. 2018"
                      value={values.diploma_start_year}
                      onChange={this.props.handleChange}
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label
                      className="block mb-2 font-medium  text-white"
                      htmlFor="diploma_end_year"
                    >
                      End year
                    </label>
                    <input
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      type="year"
                      id="diploma_end_year"
                      name="diploma_end_year"
                      placeholder="Ex. 2020"
                      value={values.diploma_end_year}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="m-3 mt-5 flex justify-between">
              <button
                className="bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded-full"
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

            <p className="text-center text-white opacity-[0.2]">Page 2</p>
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
