import React, { Component } from 'react';
import ScrollToTop from './ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Profile extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleClick = () => {
    window.location.reload();
  };

  allFieldsFilled = () => {
    const { values } = this.props;
    // Check if all required fields have a value
    if (
      values.firstname.trim() === "" ||
      values.lastname.trim() === "" ||
      values.email.trim() === "" ||
      values.phone.trim() === "" ||
      values.address.trim() === "" ||
      values.imgValue === false
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

        <div className="p-4 bg-clip-padding bg-gray-200  bg-opacity-10  rounded-2xl w-[100%] lg:w-[80%] m-auto" style={{backdropFilter: "blur(20px)"}}>
          <div className="font-bold mb-10 text-2xl ">Personal Details</div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">

            <div>
              <label className="block  font-bold mb-2">
                First Name<span className="mandatory">*</span>
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="text"
                placeholder="first name"
                name="firstname"
                required
                value={values.firstname}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block  font-bold mb-2">
                Last Name<span className="mandatory">*</span>
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="text"
                placeholder="last name"
                name="lastname"
                required
                value={values.lastname}
                onChange={this.props.handleChange}
              />
            </div>



            <div>
              <label className="block  font-bold mb-2">Email<span className="mandatory">*</span></label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="email"
                placeholder="email"
                name="email"
                required
                value={values.email}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block  font-bold mb-2">
                Phone Number<span className="mandatory">*</span>
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="tel"
                placeholder="phone number"
                name="phone"
                value={values.phone}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block  font-bold mb-2">
                Your Website
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="url"
                placeholder="Ex:- https://www.gecg28.ac.in/"
                name="website"
                value={values.website}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block  font-bold mb-2">GitHub</label>
              <input
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="url"
                placeholder="Ex:- https://github.com/username"
                name="github"
                value={values.github}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block  font-bold mb-2">
                LinkedIn
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="url"
                placeholder="Ex:- https://linkedin.com/in/username"
                name="linkedin"
                value={values.linkedin}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block  font-bold mb-2">
                Address<span className="mandatory">*</span>
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="text"
                placeholder="Ex. Gandhinagar(Only city name)"
                name="address"
                value={values.address}
                onChange={this.props.handleChange}
              />
            </div>

          </div>

          <div className='my-3'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:" for="file_input">
                Image<span className="mandatory">*</span>
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none p-0"
                type="file"
                id="file_input"
                name="profile_img_url"
                accept='image/*'
                onChange={this.props.handleChange}
                required
              />
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG  (MAX. 800x400px).</p>
            </div>

          <div className="m-3 mt-5 flex justify-between">
                <button
                  className='inline-block bg-gray-400 pt-2.5 pb-2 disabled:opacity-70  text-gray-700 font-bold py-2 px-4 rounded-full' onClick={this.handleClick}
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

          <p className="text-center opacity-[0.2]">Page 1</p>
        </div>


      </>
    );
  }
}

export default Profile;
