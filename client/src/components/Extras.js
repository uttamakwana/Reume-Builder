import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScrollToTop from './ScrollToTop';
import Modal from 'react-modal';
import { Watch } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';


class Experience extends Component {

  state = {
    showModal: false,
    isLoading: false
  };


  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  createAndDownloadPDF = () => {
    this.setState({ showModal: true }); // Open the modal
    this.setState({ isLoading: true }); // Start the loader

    axios
      .post("/api/create-pdf", this.props.values, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log(res.data);
        saveAs(res.data, `${this.props.values.firstname}'s Resume.pdf`);
        this.setState({ isLoading: false }); // Stop the loader
        this.setState({ showModal: false }); // Close the modal
      })
      .catch(err => {
        toast.error(err.message , "Custom Error");
        console.log(err, "Custom Errror");
        this.setState({ isLoading: false }); // Stop the loader
        this.setState({ showModal: false }); // Close the modal
      })
  };

  previewPDF = () => {
    this.setState({ showModal: true }); // Open the modal
    this.setState({ isLoading: true });
    axios
      .post("/api/create-pdf", this.props.values, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        this.setState({ isLoading: false }); // Stop the loader
        this.setState({ showModal: false }); // Close the modal
        const file = new Blob([res.data], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        const newWindow = window.open(fileURL, '_blank', 'toolbar=0,location=0,menubar=0');
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "Close";
        closeBtn.style.marginTop = "10px";
        closeBtn.addEventListener("click", () => {
          newWindow.close();
        });
        newWindow.document.body.appendChild(closeBtn);
      })
      .catch(err => {
        toast.error(err.message , "Custom Error");
        console.log(err, "Custom Error");
        this.setState({ isLoading: false }); // Stop the loader
        this.setState({ showModal: false }); // Close the modal
      })
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
        <div className="p-2 lg:p-3 bg-clip-padding bg-gray-200  bg-opacity-10  rounded-2xl w-[100%] lg:w-[60%] m-auto" style={{ backdropFilter: "blur(20px)" }}>
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
          <div className='flex justify-between  flex-wrap w-[70%] lg:w-[60%] m-auto'>
            <button onClick={this.previewPDF} className="bg-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center my-2 mb-3">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Review Resume</span>

            </button>
            <button onClick={this.createAndDownloadPDF} className="bg-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center my-2 mb-3">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Download Resume</span>
            </button>

            <Modal
              isOpen={this.state.showModal}
              contentLabel="Loading..."
              style={{
                overlay: {
                  position: 'fixed',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: '#E9E9E98F'
                },
                content: {
                  position: 'absolute',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  width:'200px',
                  height:'200px',
                  margin:'auto',
                  border: '1px solid',
                  background: '#070313',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '100px',
                  outline: 'none',
                  padding: '20px'
                }
              }}
            >
              <Watch
                height="100"
                width="100"
                radius="48"
                color="#FFFFFF"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </Modal>
          </div>
        </div>
      </>
    );
  }
}

export default Experience;
