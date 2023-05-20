module.exports = (values) => {
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
    // collegeLOGO,

    // Education Information
    college,
    university,
    degree_start_year,
    degree_end_year,
    degree,
    ssc,
    ssc_pr,
    ssc_school,
    ssc_year,
    hsc,
    hsc_pr,
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
    prof_description2,
  } = values;

  const inputDate1 = project_time1;
  const inputDate2 = project_time2;
  const inputDate3 = project_time3;
  const dateParts1 = inputDate1.split("-");
  const dateParts2 = inputDate2.split("-");
  const dateParts3 = inputDate3.split("-");
  const year1 = parseInt(dateParts1[0]);
  const month1 = parseInt(dateParts1[1]) - 1; // Month is zero-based in JavaScript
  const year2 = parseInt(dateParts2[0]);
  const month2 = parseInt(dateParts2[1]) - 1; // Month is zero-based in JavaScript
  const year3 = parseInt(dateParts3[0]);
  const month3 = parseInt(dateParts3[1]) - 1; // Month is zero-based in JavaScript
  const collegeLOGO = "https://res.cloudinary.com/dllxcv4s8/image/upload/v1684387484/GECG_logo.png";

  const collgeIMG =  `<img src="https://res.cloudinary.com/dllxcv4s8/image/upload/v1684387484/GECG_logo.png" alt="college logo" />`;

  const formattedDate1 = new Date(year1, month1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const formattedDate2 = new Date(year2, month2).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const formattedDate3 = new Date(year3, month3).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  let pt1 = formattedDate1;
  let pt2 = formattedDate2;
  let pt3 = formattedDate3;


  let htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resume Builder | GLP Community</title>
      <script
        src="https://kit.fontawesome.com/8a1a8282cc.js"
        crossorigin="anonymous"
      ></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
      <style>
      @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,700;0,900;1,100;1,400;1,700;1,900&family=Montserrat:ital,wght@0,200;0,300;0,500;0,600;0,700;0,800;1,200;1,300;1,500;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Schibsted+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,800;1,900&family=Tilt+Neon&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .main-heading h3 {
      font-family: "Poppins", sans-serif;
      font-size: 1.2rem;
      border-bottom: 2px solid rgb(58, 58, 58) ;
      display: inline;
      }
    .main-fonts{
      font-size: 0.8rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
    .main-heading {
      margin-bottom: 0.5rem;
    }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 0;
    }
    .main {
      display: flex;
      flex-direction: column;
      outline: 2px solid black;
      max-width: 7.1in;
      max-height: 11.4in;
    }
    .up {
      padding: 0.5rem;
      display: flex;
      gap: 0.5rem;
      border-bottom: 2px solid black;
      background-color: #4DD0E1;
    }
    .up .profile-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      border-right: 2px dashed black;
      padding-right: 1rem;
    }

    .up .profile-info-container{
      padding-right: 1rem;
      border-right: 2px dashed black;
    }
    .profile-img{
      height: 100px;
      width: 100px;
      border: 1px solid black;
      margin-right: .5rem;
      border-radius: 5px;
      padding: .2rem;
    }
    .profile-img img{
      max-height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .up .profile-container h1 {
      font-family: "Poppins", sans-serif;
    }
    .phone, .email, .linkedin, .address, .website, .github {
      font-size: 0.8rem;
      font-family: "Poppins", sans-serif;
    }

    .college-logo{
      display:flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .college-logo img{
      max-width: 100%;
      height: 80%;
      width: 80px;
      height: 80px;
      object-fit:cover;
    }
    .down {
      display: flex;
      flex-direction: column;
    }
    .even {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0.3rem;
      border-bottom: 2px solid black;
    }
    .even:last-child {
      border: none;
    }
    .odd {
      display: flex;
      padding: 0.3rem;
      border-bottom: 2px solid black;
    }
    .education-container, .skills-container, .area-of-interest-container{
      border-right: 2px dashed black;
    }
    .degree, .boards {
      font-size: 0.9rem;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }
    .education-info span{
      font-size: 0.8rem;
      font-family: "Poppins", sans-serif;
    }
    .programming-language-container, .major-achievements-container, .references-container  {
      padding-left: 0.5rem;
    }
    .programming-languages, .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .programming-language, .skill {
      font-weight: 600;
      font-size: 0.6rem;
      font-size: 0.8rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
    .personal-project-name strong {
      font-size: 0.9rem;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }
    .personal-project-desc p {
      font-size: 0.8rem;
      font-family: "Poppins", sans-serif;
    }
    .internship-experience-name strong {
      font-size: 0.9rem;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }
    .internship-experience-desc p{
      font-size: 0.8rem;
      font-family: "Poppins", sans-serif;
    }
    .major-achievements{
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .achievement{
      font-size: 0.8rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
    .area-of-interest-even{
      display: flex;
      gap: .5rem;
    }
    .area {
      font-size: 0.8rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
    .reference p strong,
    .reference p span, .area, .achievement{
      font-size: 0.8rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
    .reference p strong{
      font-weight: 600;
    }

    a{
      text-decoration: none;
      color: black;
    }

      </style>
    </head>
    <body>
      <main class="main">
        <section class="up">
          <div class="profile-container">
            <div class="profile-img">
              <img src=${profile_img_url} alt="User" />
            </div>
            <div class="profile-name">
              <h1>${firstname}</h1>
              <h1>${lastname}</h1>
            </div>
          </div>
          <div class="profile-info-container">`;
  if (phone != null && phone != "") {
    htmlTemplate += `
              <div class="profile-info">
                <i class="fa-solid fa-phone"></i>&nbsp;:
                <span class="phone">${phone}</span>
              </div>
              `;
  }
  if (email != null && email != "") {
    htmlTemplate += `
              <div class="profile-info">
                <i class="fa-solid fa-envelope"></i>&nbsp;:
                <span class="email"> ${email} </span>
              </div>
              `;
  }
  if (linkedin != "" && linkedin != null) {
    htmlTemplate += `
              <div class="profile-info">
                <i class="fa-brands fa-linkedin"></i>&nbsp;:
                <a href="${linkedin}"> <span class="linkedin"> ${linkedin} </span></a>
              </div>
              `;
  }
  if (address != "" && address != null) {
    htmlTemplate += `
              <div class="profile-info">
                <i class="fa-solid fa-address-card"></i>&nbsp;:
                <span class="address"> ${address} </span>
              </div>
              `;
  }
  if (website != "" && website != null) {
    htmlTemplate += `
               <div class="profile-info">
                  <i class="fa-solid fa-earth-americas"></i>&nbsp;:
                  <a href="${website}"> <span class="website"> ${website} </span></a>
              </div>
              `;
  }
  if (github != "" && github != null) {
    htmlTemplate += `
              <div class="profile-info">
                <i class="fa-brands fa-github"></i>&nbsp;:
                <a href="${github}"> <span class="github"> ${github} </span></a>
              </div>
              `;
  }
  htmlTemplate += `
          </div>
          <div class="college-logo">
            <img src=${collegeLOGO} alt="User" />
          </div>
        </section>
        <section class="down">
          <div class="even">
            <div class="education-container">
              <div class="main-heading">
                <h3>Education</h3>
              </div>
              <div class="education-grid">
                <div class="education-info">
                  <p>
                    <strong class="degree"
                      >${degree} |
                      <span class="start">${degree_start_year}</span> to
                      <span class="end">${degree_end_year}</span></strong
                    >
                  </p>
                  <span class="college"
                    >${college} |
                  </span>
                  <span class="university">${university}</span>
                </div>`;
  if (!diploma) {
    htmlTemplate += `
                  <div class="education-info">
                    <p>
                      <strong class="boards"
                        >HSC | ${hsc} | ${hsc_pr}- <span>${hsc_year}</span></strong
                      >
                    </p>
                    <span class="school">${hsc_school}</span>
                  </div>
                  <div class="education-info">
                    <p>
                      <strong class="boards"
                        >SSC | ${ssc} | ${ssc_pr} - <span>${ssc_year}</span></strong
                      >
                    </p>
                    <span class="school">${ssc_school}</span>
                  </div>
                  `;
  } else {
    htmlTemplate += `
                  <div class="education-info">
                    <p>
                      <strong class="diploma"
                        >Diploma | ${diploma} - <span class="start">${diploma_start_year}</span> to
                        <span class="end">${diploma_end_year}</span></strong
                      >
                    </p>
                    <span class="school">${diploma_place}</span>
                  </div>
                  `;
  }
  htmlTemplate += `
              </div>
            </div>
            <div class="programming-language-container">
              <div class="main-heading">
                <h3>Programming Language</h3>
              </div>
              <div class="programming-languages">`;
  if (pl1 != "" && pl1 != null) {
    htmlTemplate += `<strong class="programming-language">|&nbsp;${pl1}</strong>`;
  }
  if (pl2 != "" && pl2 != null) {
    htmlTemplate += `<strong class="programming-language">|&nbsp;${pl2}&nbsp;|</strong>`;
  }
  htmlTemplate += `
              </div>
              <div class="programming-langauges">`;
  if (pl3 != "" && pl3 != null) {
    htmlTemplate += `<strong class="programming-language">|&nbsp;${pl3}</strong>`;
  }
  if (pl4 != "" && pl4 != null) {
    htmlTemplate += `<strong class="programming-language">|&nbsp;${pl4}&nbsp;|</strong>`;
  }
  htmlTemplate += `
              </div>
              <div class="programming-languages">`;
  if (pl5 != "" && pl5 != null) {
    htmlTemplate += `<strong class="programming-language">|&nbsp;${pl5}</strong>`;
  }
  if (pl6 != "" && pl6 != null) {
    htmlTemplate += `<strong class="programming-language">|&nbsp;${pl6}&nbsp;|</strong>`;
  }
  htmlTemplate += `
              </div>
            </div>
          </div>`;
  if (true) {
    htmlTemplate += `
            <div class="odd">
              <div class="internship-experience-container">
                <div class="main-heading">
                  <h3>Internship/Experience</h3>
                </div>
                <div class="internship-experiences">`;
    if (company1 != "" && company1 != null) {
      htmlTemplate += `
                  <div class="internship-experience">
                    <div class="internship-experience-name">
                      <span><strong>${company1} - </strong></span>
                      <span><strong>${position1}</strong></span>
                      <span><strong class="start"> - (${internship_start_year1} </strong></span>to
                      <span><strong class="end"> ${internship_end_year1}) - </strong></span>
                      <span class="link"
                        ><strong>
                          <a href="${internship_link1}" target="_blank"
                            ><i class="fa-solid fa-link"></i></a></strong
                      ></span>
                    </div>
                    <div class="internship-experience-desc">
                      <p>
                        ${internship_description1}
                      </p>
                    </div>
                </div>`;
    }
    if (company2 != "" && company2 != null) {
      htmlTemplate += `<div class="internship-experience">
                  <div class="internship-experience-name">
                  <span><strong>${company2} - </strong></span>
                  <span><strong>${position2}</strong></span>
                    <span><strong class="start"> - (${internship_start_year2} </strong></span>to
                    <span><strong class="end"> ${internship_end_year2}) - </strong></span>
                    <span class="link"
                      ><strong>
                        <a href="${internship_link2}" target="_blank"
                          ><i class="fa-solid fa-link"></i></a></strong
                    ></span>
                  </div>
                  <div class="internship-experience-desc">
                    <p>
                      ${internship_description2}
                    </p>
                  </div>
                </div>`;
    }
    if (company3 != "" && company3 != null) {
      htmlTemplate += `<div class="internship-experience">
                  <div class="internship-experience-name">
                  <span><strong>${company3}</strong></span>
                  <span><strong>${position2}</strong></span>
                    <span><strong class="start"> - (${internship_start_year3} </strong></span>to
                    <span><strong class="end"> ${internship_end_year3}) - </strong></span>
                    <span class="link"
                      ><strong>
                        <a href="${internship_link3}" target="_blank"
                          ><i class="fa-solid fa-link"></i></a></strong
                    ></span>
                  </div>
                  <div class="internship-experience-desc">
                    <p>
                      ${internship_description3}
                    </p>
                  </div>
                </div>`;
    }
    htmlTemplate += `
                </div>
              </div>
            </div>
            `;
  }
  htmlTemplate += `
          <div class="odd">
            <div class="personal-projects-container">
              <div class="main-heading">
                <h3>Projects</h3>
              </div>
              <div class="personal-projects">`;
  if (project_title1 != "" && project_title1 != null) {
    htmlTemplate += `<div class="personal-project">
                    <div class="personal-project-name">
                      <span><strong>${project_title1} -</strong></span>
                      <span
                        ><strong class="month"> ${pt1} </strong
                        >
                      <span class="link"
                        ><strong>
                          <a href="${project_link1}" target="_blank"
                            ><i class="fa-solid fa-link"></i></a></strong
                      ></span>
                    </div>
                    <div class="personal-project-desc">
                      <p class="description">
                        ${project_description1}
                      </p>
                    </div>
                  </div>`;
  }
  if (project_title2 != "" && project_title2 != null) {
    htmlTemplate += `<div class="personal-project">
                    <div class="personal-project-name">
                      <span><strong>${project_title2} -</strong></span>
                      <span
                        ><strong class="month"> ${pt2} </strong
                        >
                      <span class="link"
                        ><strong>
                          <a href="${project_link2}" target="_blank"
                            ><i class="fa-solid fa-link"></i></a></strong
                      ></span>
                    </div>
                    <div class="personal-project-desc">
                      <p class="description">
                        ${project_description2}
                      </p>
                    </div>
                  </div>`;
  }
  if (project_title3 != "" && project_title3 != null) {
    htmlTemplate += `<div class="personal-project">
                    <div class="personal-project-name">
                      <span><strong>${project_title3} -</strong></span>
                      <span
                        ><strong class="month"> ${pt3} </strong
                        >
                      <span class="link"
                        ><strong>
                          <a href="${project_link3}" target="_blank"
                            ><i class="fa-solid fa-link"></i></a></strong
                      ></span>
                    </div>
                    <div class="personal-project-desc">
                      <p class="description">
                        ${project_description3}
                      </p>
                    </div>
                  </div>`;
  }
  htmlTemplate += `
              </div>
            </div>
          </div>
          <div class="even">
            <div class="skills-container">
              <div class="main-heading">
                <h3>Skills</h3>
              </div>
             <div class="skills">`;
  if (skill1 != "" && skill1 != null) {
    htmlTemplate += `
                <strong class="skill">|&nbsp;${skill1}</strong>
                `;
  }
  if (skill2 != "" && skill2 != null) {
    htmlTemplate += `
                <strong class="skill">|&nbsp;${skill2}&nbsp;|</strong>
                `;
  }
  htmlTemplate += `
              </div>
              <div class="skills">`;
  if (skill3 != "" && skill3 != null) {
    htmlTemplate += `
                  <strong class="skill">|&nbsp;${skill3}</strong>
                  `;
  }
  if (skill4 != "" && skill4 != null) {
    htmlTemplate += `
                  <strong class="skill">|&nbsp;${skill4}&nbsp;|</strong>
                  `;
  }
  htmlTemplate += `
              </div>
              <div class="skills">`;
  if (skill5 != "" && skill5 != null) {
    htmlTemplate += `
                  <strong class="skill">|&nbsp;${skill5}</strong>
                  `;
  }
  if (skill6 != "" && skill6 != null) {
    htmlTemplate += `
                  <strong class="skill">|&nbsp;${skill6}&nbsp;|</strong>
                  `;
  }
  htmlTemplate += `
              </div>
            </div>
            <div class="major-achievements-container">
              <div class="main-heading">
                <h3>Major Achievements</h3>
              </div>
              <div class="major-achievements">`;
  if (achievement1 != "" && achievement1 != null) {
    htmlTemplate += `
                  <strong class="achievement">|&nbsp;${achievement1}</strong>
                  `;
  }
  if (achievement2 != "" && achievement2 != null) {
    htmlTemplate += `
                  <strong class="achievement">|&nbsp;${achievement2}&nbsp;|</strong>
                  `;
  }
  htmlTemplate += `
              </div>
              <div class="major-achievements">`;
  if (achievement3 != "" && achievement3 != null) {
    htmlTemplate += `
                <strong class="achievement">|&nbsp;${achievement3}</strong>
                `;
  }
  if (achievement4 != "" && achievement4 != null) {
    htmlTemplate += `
                <strong class="achievement">|&nbsp;${achievement4}&nbsp;|</strong>
                `;
  }
  htmlTemplate += `
              </div>
            </div>
          </div>        
          
          <div class="even">
            <div class="area-of-interest-container">
              <div class="main-heading">
                <h3>Area of Interest</h3>
              </div>
              <div class="area-of-interest-even">`;

  if (interest1 != "" && interest1 != null) {
    htmlTemplate += `
                  <strong class="area">|&nbsp;${interest1}</strong>
                  `;
  }
  if (interest2 != "" && interest2 != null) {
    htmlTemplate += `
                  <strong class="area">|&nbsp;${interest2}&nbsp;|</strong>
                  `;
  }
  htmlTemplate += `
              </div>
              <div class="area-of-interest-even">`;
  if (interest3 != "" && interest3 != null) {
    htmlTemplate += `
                  <strong class="area">|&nbsp;${interest3}</strong>
                  `;
  }
  if (interest4 != "" && interest4 != null) {
    htmlTemplate += `
                  <strong class="area">|&nbsp;${interest4}&nbsp;|</strong>
                  `;
  }
  htmlTemplate += `
              </div>
            </div>
            <div class="references-container">
              <div class="main-heading">
                <h3>References</h3>
              </div>
              <div class="references-flex">`;
  if (prof_name1 != "" && prof_name1 != null) {
    htmlTemplate += `
                  <div class="reference">
                    <p>
                      <strong class="prof-name">${prof_name1}</strong
                      >
                      <a href="${prof_link1}" target="_blank"
                            ><i class="fa-solid fa-link"></i></a>
                    </p>
                    <p><span>${prof_description1}</span></p>
                  </div>`;
  }
  if (prof_name2 != "" && prof_name2 != null) {
    htmlTemplate += `
                  <div class="reference">
                    <p>
                      <strong class="prof-name">${prof_name2}</strong
                      ><a href="${prof_link2}" target="_blank"
                      ><i class="fa-solid fa-link"></i></a>
                    </p>
                    <p><span>${prof_description2}</span></p>
                  </div>`;
  }
  htmlTemplate += `
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
    </html>
  `;

  return htmlTemplate;
};
