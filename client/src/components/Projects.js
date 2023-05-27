import React, {Component} from 'react';
import ScrollToTop from './ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Projects extends Component {


  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };

  back = e => {
    e.preventDefault ();
    this.props.prevStep ();
  };

  allFieldsFilled = () => {
    const { values } = this.props;

    // Check if all required fields have a value
    if (
      values.project_title1.trim() === "" ||
      values.project_title2.trim() === "" ||
      // values.project_title3.trim() === "" ||
      values.project_link1.trim() === "" ||
      values.project_link2.trim() === "" ||
      // values.project_link3.trim() === "" ||
      values.project_description1.trim() === "" ||
      values.project_description2.trim() === "" ||
      // values.project_description3.trim() === "" ||
      values.project_time1.trim() === "" ||
      values.project_time2.trim() === ""
      // values.project_time3.trim() === ""
    ) {
      return false;
    }

    return true;
  };

  render () {
    const {values} = this.props;


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
      <div className="p-4 bg-clip-padding bg-gray-200 bg-opacity-10  rounded-2xl w-[100%] lg:w-[80%] m-auto" style={{backdropFilter: "blur(20px)"}}>
        <div className="p-4">
              <h3 className="text-2xl font-extrabold  ">Project Details</h3>
            </div>
        <div>
          <div className='w-[90%] m-auto'>
            <div className=''>
              <div>
                <h5 className='my-2 '>Project 1<span className="mandatory">*</span></h5>
              </div>
              <div className='my-3'>
                <input
                className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_title1"
                  type="text"
                  placeholder='project title*'
                  label="project_title1"
                  required
                  value={values.project_title1}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_link1"
                  label="project_link1"
                  placeholder='project link'
                  style={{width: '80%'}}
                  type="text"
                  value={values.project_link1}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_time1"
                  placeholder="Ex. April 2023*"
                  type='month'
                  style={{width: '80%'}}
                  required
                  value={values.project_time1}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_description1"
                  placeholder="description*"
                  style={{width: '80%'}}
                  type='text'
                  required
                  value={values.project_description1}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <br />
            <hr className='border broder-white' />
            <br />
            <div className=''>
              <div>
                <h5 className='my-2 '>Project 2</h5>
              </div>
              <div className='my-3'>
                <input
                className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_title2"
                  type='text'
                  placeholder='project title*'
                  label="project_title2"
                  required
                  value={values.project_title2}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_link2"
                  type='text'
                  label="project_link2"
                  placeholder='project link'
                  style={{width: '80%'}}
                  value={values.project_link2}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_time2"
                  placeholder="Ex. May 2020*"
                  type='month'
                  style={{width: '80%'}}
                  required
                  value={values.project_time2}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_description2"
                  type='text'
                  placeholder="description*"
                  style={{width: '80%'}}
                  required
                  value={values.project_description2}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <br />
            <hr className='border broder-white' />
            <br />
            <div className=''>
              <div>
                <h5 className='my-2 '>Project 3</h5>
              </div>
              <div className='my-3'>
                <input
                className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_title3"
                  type='text'
                  placeholder='project title'
                  label="project_title3"
                  value={values.project_title3}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_link3"
                  type='text'
                  label="project_link3"
                  placeholder='project link'
                  style={{width: '80%'}}
                  value={values.project_link3}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_time3"
                  placeholder="Ex. June 2017"
                  type='month'
                  style={{width: '80%'}}
                  value={values.project_time3}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="project_description3"
                  type='text'
                  placeholder="description"
                  style={{width: '80%'}}
                  value={values.project_description3}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
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

          <p className="text-center  opacity-[0.2]">Page 3</p>
      </div>
      </>
    );
  }
}

export default Projects;
