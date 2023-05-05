import React, { Component } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScrollToTop from "./ScrollToTop";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class AOTAchievement extends Component {
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
      values.interest1.trim() === "" ||
      values.interest2.trim() === "" ||
      values.interest3.trim() === "" ||
      values.achievement1.trim() === "" ||
      values.achievement2.trim() === "" ||
      values.prof_name1.trim() === "" ||
      values.prof_link1.trim() === "" ||
      values.prof_description1.trim() === ""
    ) {
      return false;
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
        <div
          className="p-2 lg:p-3 bg-clip-padding bg-gray-200  bg-opacity-10  rounded-2xl w-[100%] lg:w-[60%] m-auto"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div className="p-4">
            <h3 className="text-2xl font-extrabold  text-white">
              Extra Details - 1
            </h3>
          </div>
          <div>
            <div>
              <div className="flex flex-col">
                <h5 className="text-white">
                  <CheckCircleIcon />
                  <span className="pl-3">Area of Interest</span>
                </h5>
                <br />
                <div className="flex flex-wrap items-center justify-center">
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="interest1"
                      placeholder="Interest 1"
                      value={values.interest1}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="interest2"
                      placeholder="Interest 2"
                      value={values.interest2}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="interest3"
                      placeholder="Interest 3"
                      value={values.interest3}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="interest4"
                      placeholder="Interest 4"
                      value={values.interest4}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="interest5"
                      placeholder="Interest 5"
                      value={values.interest5}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="interest6"
                      placeholder="Interest 6"
                      value={values.interest6}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
              </div>

              <hr className="border border-white mt-5" />
              <br />
              <br />
              <div className="flex flex-col">
                <h5 className="text-white">
                  <CheckCircleIcon />
                  <span className="pl-3">Major Achievements</span>
                </h5>
                <br />
                <div className="flex flex-wrap items-center justify-center">
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="achievement1"
                      placeholder="Achievement 1"
                      value={values.achievement1}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="achievement2"
                      placeholder="Achievement 2"
                      value={values.achievement2}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="achievement3"
                      placeholder="Achievement 3"
                      value={values.achievement3}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="achievement4"
                      placeholder="Achievement 4"
                      value={values.achievement4}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
              </div>

              <hr className="border border-white mt-5" />
              <br />
              <br />


              <div className="flex flex-col">
                <h5 className="text-white">
                  <CheckCircleIcon />
                  <span className="pl-3">References</span>
                </h5>
                <br />
                <div className="flex flex-wrap items-center justify-center">
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="prof_name1"
                      placeholder="Professor Name 1"
                      value={values.prof_name1}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="prof_link1"
                      type="url"
                      placeholder="Professor Link 1"
                      value={values.prof_link1}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="prof_description1"
                      placeholder="Professor Description 1"
                      value={values.prof_description1}
                      onChange={this.props.handleChange}
                    />
                  </div>

                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="prof_name2"
                      placeholder="Professor Name 2"
                      value={values.prof_name2}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="prof_link2"
                      type="url"
                      placeholder="Professor Link 2"
                      value={values.prof_link2}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="m-3">
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="prof_description2"
                      placeholder="Professor Description 2"
                      value={values.prof_description2}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

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
        </div>
      </>
    );
  }
}

export default AOTAchievement;
