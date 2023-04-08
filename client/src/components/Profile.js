import React, { Component } from 'react';
import ScrollToTop from './ScrollToTop';




class Profile extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;

    return (
      <>
      <ScrollToTop />
        <div className="p-4 bg-clip-padding bg-gray-200  bg-opacity-10  rounded-2xl w-[100%] lg:w-[80%] m-auto" style={{backdropFilter: "blur(20px)"}}>
          <div className="font-bold mb-10 text-2xl text-white">Personal Details</div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">

            <div>
              <label className="block text-white font-bold mb-2">
                First Name
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="text"
                placeholder="First Name"
                name="firstname"
                required
                value={values.firstname}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">
                Last Name
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="text"
                placeholder="Last Name"
                name="lastname"
                required
                value={values.lastname}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Email</label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="email"
                placeholder="Email"
                name="email"
                required
                value={values.email}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">
                Phone Number
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={values.phone}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">
                Your Website
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="url"
                placeholder="Your Website"
                name="website"
                value={values.website}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">GitHub</label>
              <input
                className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="url"
                placeholder="GitHub"
                name="github"
                value={values.github}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">
                Linked In
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="url"
                placeholder="Linked In"
                name="linkedin"
                value={values.linkedin}
                onChange={this.props.handleChange}
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">
                Twitter
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                type="url"
                placeholder="Twitter"
                name="twitter"
                value={values.twitter}
                onChange={this.props.handleChange}
              />
            </div>

          </div>

          <div className="m-3 mt-5 flex justify-between">
                <button
                  className='inline-block bg-gray-400 pt-2.5 pb-2 disabled:opacity-70  text-gray-700 font-bold py-2 px-4 rounded-full hover:cursor-not-allowed'
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

          <p className="text-center text-white opacity-[0.2]">Page 1</p>
        </div>


      </>
    );
  }
}

export default Profile;
