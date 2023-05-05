import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScrollToTop from './ScrollToTop';


class Experience extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  createAndDownloadPDF = () => {
    axios
      .post("http://localhost:4000/api/create-pdf", this.props.values, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log(res.data);
        saveAs(res.data, `${this.props.values.firstname}'s Resume.pdf`);
      })
      .catch(err => {
        console.log(err, "Uttam Makwadfsdfna");
      })
  };

  render() {
    const { values } = this.props;

    return (
      <>
        <ScrollToTop />
        <div className="p-4 bg-clip-padding bg-gray-200  bg-opacity-10  rounded-2xl w-[100%] lg:w-[60%] m-auto" style={{ backdropFilter: "blur(20px)" }}>
          <div className="p-4">
            <h3 className="text-2xl font-extrabold  text-white">Extra Details - 2</h3>
          </div>
          <div>
            <div>
              <div className='flex flex-col'>
                <h5 className='text-white'>
                  <CheckCircleIcon />
                  <span className="pl-3">Skills</span>
                </h5>
                <br />
                <div className='flex flex-wrap items-center justify-center'>
                  <div className='m-3'>
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="skill1"
                      placeholder="Skill 1"
                      value={values.skill1}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className='m-3' >
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="skill2"
                      placeholder="Skill 2"
                      value={values.skill2}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className='m-3'>
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="skill3"
                      placeholder="Skill 3"
                      value={values.skill3}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className='m-3'>
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="skill4"
                      placeholder="Skill 4"
                      value={values.skill4}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className='m-3'>
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="skill5"
                      placeholder="Skill 5"
                      value={values.skill5}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className='m-3'>
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="skill6"
                      placeholder="Skill 6"
                      value={values.skill6}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
              </div>

              <hr className='border border-white mt-5' />
              <br />
              <br />
              <div className='flex flex-col'>
                <h5 className='text-white'>
                  <CheckCircleIcon />
                  <span className="pl-3">Programming Languages</span>
                </h5>
                <br />
                <div className='flex flex-wrap items-center justify-center'>
                  <div className='m-3'>
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="pl1"
                      placeholder="PL1"
                      value={values.pl1}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className='m-3' >
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="pl2"
                      placeholder="PL2"
                      value={values.pl2}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className='m-3'>
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="pl3"
                      placeholder="PL3"
                      value={values.pl3}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className='m-3'>
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="pl4"
                      placeholder="PL4"
                      value={values.pl4}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className='m-3'>
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="pl5"
                      placeholder="PL5"
                      value={values.pl5}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className='m-3'>
                    <input
                      className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      name="pl6"
                      placeholder="PL6"
                      value={values.pl6}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
              </div>

              <hr className='border border-white mt-5' />
              <br />
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
              className="inline-block bg-gray-400 pt-2.5 pb-2 disabled:opacity-70  text-gray-700 font-bold py-2 px-4 rounded-full hover:cursor-not-allowed"
            >
              Next
            </button>
          </div>
          <button onClick={this.createAndDownloadPDF} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center my-2 mb-3">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>Download Resume</span>
          </button>
        </div>
      </>
    );
  }
}

export default Experience;
