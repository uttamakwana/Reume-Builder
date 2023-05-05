import React, { Component } from "react";
import Profile from "./Profile";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Extras from "./Extras";
import Extra2 from "./Extra2";
import axios from "axios";

export class Resume extends Component {
  state = {
    step: 1,
    // Personal Profile Details...
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    address: "",
    profile_img_url: "",

    // Education Information
    college: "",
    university: "",
    degree_start_year: "",
    degree_end_year: "",
    degree: "",
    ssc: "",
    ssc_school: "",
    ssc_year: "",
    hsc: "",
    hsc_school: "",
    hsc_year: "",
    diploma: "",
    diploma_place: "",
    diploma_start_year: "",
    diploma_end_year: "",

    // Project Information...
    project_title1: "",
    project_link1: "",
    project_time1: "",
    project_description1: "",
    project_title2: "",
    project_link2: "",
    project_time2: "",
    project_description2: "",
    project_title3: "",
    project_link3: "",
    project_time3: "",
    project_description3: "",

    // Experience Information
    company1: "",
    position: "",
    internship_link1: "",
    internship_start_year1: "",
    internship_end_year1: "",
    internship_description1: "",
    company2: "",
    position2: "",
    internship_link2: "",
    internship_start_year2: "",
    internship_end_year2: "",
    internship_description2: "",
    internship_description1: "",
    company3: "",
    position3: "",
    internship_link3: "",
    internship_start_year3: "",
    internship_end_year3: "",
    internship_description3: "",

    // Extra Information
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    pl1: "",
    pl2: "",
    pl3: "",
    pl4: "",
    pl5: "",
    pl6: "",

    // Extra information - 2
    achievement1: "",
    achievement2: "",
    achievement3: "",
    achievement4: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",

    // References

    prof_name1: "",
    prof_link1: "",
    prof_description1: "",
    prof_name2: "",
    prof_link2: "",
    prof_description2: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = ({ target: { value, name }, target }) => {
    if (name === "profile_img_url") {
      this.setState({
        selectedFile: target.files[0],
      });

      const formData = new FormData();
      formData.append("file", target.files[0]);
      formData.append("upload_preset", "resume_builder_collection");

      axios
        .post(
          "https://api.cloudinary.com/v1_1/dllxcv4s8/image/upload",
          formData
        )
        .then((response) => {
          this.setState({
            profile_img_url: response.data.url,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({ [name]: value });
    }
  };

  render() {
    const { step } = this.state;
    const {
         // Profile-Information
         firstname,
         lastname,
         email,
         phone,
         website,
         github,
         linkedin,
         address,
         profile_img_url,

         // Education Information
         college,
         university,
         degree_start_year,
         degree_end_year,
         degree,
         ssc,
         ssc_school,
         ssc_year,
         hsc,
         hsc_school,
         hsc_year,
         diploma,
         diploma_place,
         diploma_start_year,
         diploma_end_year,

         // Project Information...
         project_title1,
         project_link1,
         project_time1,
         project_description1,
         project_title2,
         project_link2,
         project_time2,
         project_description2,
         project_title3,
         project_link3,
         project_time3,
         project_description3,

         // Experience Information
         company1,
         position1,
         internship_link1,
         internship_start_year1,
         internship_end_year1,
         internship_description1,
         company2,
         position2,
         internship_link2,
         internship_start_year2,
         internship_end_year2,
         internship_description2,
         company3,
         position3,
         internship_link3,
         internship_start_year3,
         internship_end_year3,
         internship_description3,

         // Extra Information
         skill1,
         skill2,
         skill3,
         skill4,
         skill5,
         skill6,
         pl1,
         pl2,
         pl3,
         pl4,
         pl5,
         pl6,

         // Extra information - 2
         achievement1,
         achievement2,
         achievement3,
         achievement4,
         interest1,
         interest2,
         interest3,
         interest4,
         interest5,
         interest6,

         // References
         prof_name1,
         prof_link1,
         prof_description1,
         prof_name2,
         prof_link2,
         prof_description2
      } = this.state;
    const values = {
      // Profile-Information
      // Profile-Information

         // Profile-Information
         firstname,
         lastname,
         email,
         phone,
         website,
         github,
         linkedin,
         address,
         profile_img_url,

         // Education Information
         college,
         university,
         degree_start_year,
         degree_end_year,
         degree,
         ssc,
         ssc_school,
         ssc_year,
         hsc,
         hsc_school,
         hsc_year,
         diploma,
         diploma_place,
         diploma_start_year,
         diploma_end_year,

         // Project Information...
         project_title1,
         project_link1,
         project_time1,
         project_description1,
         project_title2,
         project_link2,
         project_time2,
         project_description2,
         project_title3,
         project_link3,
         project_time3,
         project_description3,

         // Experience Information
         company1,
         position1,
         internship_link1,
         internship_start_year1,
         internship_end_year1,
         internship_description1,
         company2,
         position2,
         internship_link2,
         internship_start_year2,
         internship_end_year2,
         internship_description2,
         company3,
         position3,
         internship_link3,
         internship_start_year3,
         internship_end_year3,
         internship_description3,

         // Extra Information
         skill1,
         skill2,
         skill3,
         skill4,
         skill5,
         skill6,
         pl1,
         pl2,
         pl3,
         pl4,
         pl5,
         pl6,

         // Extra information - 2
         achievement1,
         achievement2,
         achievement3,
         achievement4,
         interest1,
         interest2,
         interest3,
         interest4,
         interest5,
         interest6,

         // References
         prof_name1,
         prof_link1,
         prof_description1,
         prof_name2,
         prof_link2,
         prof_description2};
    switch (step) {
      case 1:
        return (
          <div className=" font-mono">
            <div className="container col-lg-10 mx-auto text-center">
              <Profile
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="">
            <div className="container col-lg-10 mx-auto text-center">
              <Education
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="">
            <div className="container col-lg-8 mx-auto text-center">
              <Projects
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="">
            <div className="container col-lg-10 mx-auto text-center">
              <Experience
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="">
            <div className="container col-lg-10 mx-auto text-center">
              <Extra2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="">
            <div className="container col-lg-10 mx-auto text-center">
              <Extras
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
          </div>
        );

      default:
        return <div />;
    }
  }
}

export default Resume;
