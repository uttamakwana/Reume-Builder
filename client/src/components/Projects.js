import React, {Component} from 'react';
import ScrollToTop from './ScrollToTop';


class Projects extends Component {
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };

  back = e => {
    e.preventDefault ();
    this.props.prevStep ();
  };

  render () {
    const {values} = this.props;

    return (
      <>
      <ScrollToTop />
      <div className="p-4 bg-clip-padding bg-gray-200 bg-opacity-10  rounded-2xl w-[100%] lg:w-[80%] m-auto" style={{backdropFilter: "blur(20px)"}}>
        <div className="p-4">
              <h3 className="text-2xl font-extrabold  text-white">Project Developed</h3>
            </div>
        <div>
          <div className='w-[90%] m-auto'>
            <div className=''>
              <div>
                <h5 className='my-2 text-white'>Project 1</h5>
              </div>
              <div className='my-3'>
                <input
                className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="title1"
                  placeholder='Title*'
                  label="Title"
                  required
                  value={values.title1}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="link1"
                  label="Link"
                  placeholder='Link*'
                  style={{width: '80%'}}
                  required
                  value={values.link1}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="projectDescription1"
                  placeholder="Description*"
                  style={{width: '80%'}}
                  required
                  value={values.projectDescription1}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <br />
            <hr className='border broder-white' />
            <br />
            <div className=''>
              <div>
                <h5 className='my-2 text-white'>Project 2</h5>
              </div>
              <div className='my-3'>
                <input
                className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="title2"
                  placeholder='Title*'
                  label="Title"
                  required
                  value={values.title2}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="link2"
                  label="Link"
                  placeholder='Link*'
                  style={{width: '80%'}}
                  required
                  value={values.link2}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="projectDescription2"
                  placeholder="Description*"
                  style={{width: '80%'}}
                  required
                  value={values.projectDescription2}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <br />
            <hr className='border broder-white' />
            <br />
            <div className=''>
              <div>
                <h5 className='my-2 text-white'>Project 3</h5>
              </div>
              <div className='my-3'>
                <input
                className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="title3"
                  placeholder='Title*'
                  label="Title"
                  required
                  value={values.title3}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="link3"
                  label="Link"
                  placeholder='Link*'
                  style={{width: '80%'}}
                  required
                  value={values.link3}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className='my-3'>
                <input
                  className="block w-[80%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  name="projectDescription3"
                  placeholder="Description*"
                  style={{width: '80%'}}
                  required
                  value={values.projectDescription3}
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
                <button
                  onClick={this.continue}
                  className = "bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded-full"
                >
                  Next
                </button>
          </div>

          <p className="text-center text-white opacity-[0.2]">Page 2</p>
      </div>
      </>
    );
  }
}

export default Projects;
