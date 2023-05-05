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

    // Education Information
    college,
    fromyear1,
    toyear1,
    qualification1,
    description1,
    school,
    fromyear2,
    toyear2,
    qualification2,
    description2,

    // Project Information...
    title1,
    link1,
    projectDescription1,
    title2,
    link2,
    projectDescription2,
    title3,
    link3,
    projectDescription3,

    // Experience Information
    institute1,
    position1,
    duration1,
    experienceDescription1,
    institute2,
    position2,
    duration2,
    experienceDescription2,

    // Extra Information
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    interest1,
    interest2,
    interest3,
    interest4,
    interest5,
    interest6,
  } = values;

  let htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
  <title>${firstname}'s Resume</title>
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
      font-size: 1rem;
      border-bottom: 2px solid #80deea;
      display: inline;
    }
    .main-heading {
      margin-bottom: 0.5rem;
    }

    body {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem;
    }
    .main {
      display: flex;
      flex-direction: column;
      outline: 1px solid green;
      padding: 0.5rem 0.7rem;
      gap: 0.5rem;
    }
    .up {
      height: 13%;
      padding: 0.3rem;
      display: flex;
      gap: 0.5rem;
      border-bottom: 3px solid black;
    }
    .up .profile-name {
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 3px dashed black;
    }
    .up .profile-name h1 {
      font-family: "Poppins", sans-serif;
    }
    .up .profile-info-grid {
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      width: 65%;
    }
    .profile-info-desc {
      font-size: 0.6rem;
      font-family: "Poppins", sans-serif;
    }
    .down {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      height: 87%;
    }
    .even {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0.3rem;
      gap: 0.2rem;
      border-bottom: 3px solid black;
    }
    .even:last-child {
      border: none;
    }
    .odd {
      display: flex;
      padding: 0.3rem;
      border-bottom: 3px solid black;
    }
    .education {
      border-right: 2px dashed black;
    }
    .education-info-heading {
      font-size: 0.7rem;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }
    .education-info span {
      font-size: 0.6rem;
      font-family: "Poppins", sans-serif;
    }
    .programming-language {
      padding-left: 0.5rem;
    }
    .programming-language-flex {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .programming-language-info {
      font-weight: 600;
      font-size: 0.6rem;
      width: 45%;
      /* border: 1px solid black; */
      font-size: 0.65rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }

    .personal-project-info-name strong {
      font-size: 0.7rem;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }

    .personal-project-info-desc p {
      font-size: 0.6rem;
      font-family: "Poppins", sans-serif;
    }
    .skills {
      border-right: 2px dashed black;
    }
    .skills-flex {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .skills-flex strong {
      width: 45%;
      font-size: 0.6rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }

    .certificates {
      padding-left: 0.5rem;
    }

    .certificates-flex {
      display: flex;
      flex-direction: column;
    }
    .certificates-flex p strong {
      font-size: 0.6rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
    .spoken-languages {
      border-right: 2px dashed black;
    }
    .spoken-languages-flex {
      display: flex;
      flex-direction: column;
    }
    .spoken-languages-info p strong,
    .spoken-languages-info p span {
      font-size: 0.6rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
    .references {
      padding-left: 0.5rem;
    }
    .references-info p strong,
    .references-info p span {
      font-size: 0.6rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }

  </style>
</head>`;
  htmlTemplate += `
<body>
  <main class="main">
    <section class="up">
      <div class="profile-name">
        <h1 name="variable_name">${firstname} ${lastname}</h1>
      </div>
      <div class="profile-info-grid">
        <div class="profile-info">
          <span name="variable_contact" class="profile-info-desc">
          ${phone}
          </span>
        </div>
        <div class="profile-info">
          <span name="variable_hyperlink_email" class="profile-info-desc">
            ${email}
          </span>
        </div>
        <div class="profile-info">
          <span name="variable_hyperlink_linkedin" class="profile-info-desc">
          ${linkedin}
          </span>
        </div>
        <div class="profile-info">
          <p>
            <span name="variable_address" class="profile-info-desc">
            ${github}
            </span>
          </p>
        </div>
      </div>
    </section>`;

  htmlTemplate += `
    <section class="down">
      <div class="even">
        <div class="education">
          <div class="main-heading">
            <h3>Education</h3>
          </div>`;
  if (college != "" && college != null)
    htmlTemplate += `
          <div class="education-grid">
            <div class="education-info">
              <p>
                <strong class="education-info-heading" name="variable_predegree_name">${qualification1}</strong>
              </p>
              <span name="variable_predegree_details">${college}</span>
            </div>`;
  if (school != "" && school != null)
    htmlTemplate += `
            <div class="education-info">
              <p>
                <strong class="education-info-heading" name="variable_degree_name">${qualification2}</strong>
              </p>
              <span name="variable_degree_details">${school}</span>
            </div>
          </div>
        </div>
        `;
  htmlTemplate += `
        <div class="programming-language">
          <div class="main-heading">
            <h3>Programming Language</h3>
          </div>
          <div class="programming-language-flex">
          `;
  if (interest1 != "" && interest1 != null)
    htmlTemplate += ` <strong name="variable_skill" class="programming-language-info">${interest1}}</strong>`;
  if (interest2 != "" && interest2 != null)
    htmlTemplate += `<strong name="variable_skill" class="programming-language-info">${interest2}</strong>`;
  if (interest3 != "" && interest3 != null)
    htmlTemplate += `<strong name="variable_skill" class="programming-language-info">${interest3}</strong>`;
  if (interest4 != "" && interest4 != null)
    htmlTemplate += `<strong name="variable_skill" class="programming-language-info">${interest4}</strong>`;
  if (interest5 != "" && interest5 != null)
    htmlTemplate += `<strong name="variable_skill" class="programming-language-info">${interest5}</strong>`;
  if (interest6 != "" && interest6 != null)
    htmlTemplate += `<strong name="variable_skill" class="programming-language-info">${interest6}</strong>`;
  htmlTemplate += `
          </div>
        </div>
      </div>
      <div class="odd">
      `;
  htmlTemplate += `
        <div class="personal-projects">
            <div class="main-heading">
                <h3>Projects</h3>
            </div>
            <div class="personal-projects-flex">
                <div class="personal-project-info">
                    <div class="personal-project-info-name">`;
  if (title1 != "" && title1 != null)
    htmlTemplate += `
                        <span><strong name="variable_project_name">${title1}</strong></span>
                        <span><strong name="variable_project_date">
                            - 15/12/2022</strong></span>
                        <span><strong name="variable_project_date">
                        ${link1}</strong></span>
                    </div>
                    <div class="personal-project-info-desc">
                        <p name="variable_project_description">
                        ${projectDescription1}
                        </p>
                    </div>
                </div>
                `;
  if (title2 != "" && title2 != null)
    htmlTemplate += `
                <div class="personal-project-info">
                    <div class="personal-project-info-name">
                        <span><strong name="variable_project_name">${title2}</strong></span>
                        <span><strong name="variable_project_date">
                            - 15/12/2022</strong></span>
                        <span><strong name="variable_project_date">
                        ${link2}</strong></span>
                    </div>
                    <div class="personal-project-info-desc">
                        <p name="variable_project_description">
                        ${projectDescription2}
                        </p>
                    </div>
                </div>
                `;

  if (title3 != "" && title3 != null)
    htmlTemplate += `
                <div class="personal-project-info">
                    <div class="personal-project-info-name">
                        <span><strong name="variable_project_name">${title3}</strong></span>
                        <span><strong name="variable_project_date">
                            - 15/12/2022</strong></span>
                        <span><strong name="variable_project_date">
                        ${link3}</strong></span>
                    </div>
                    <div class="personal-project-info-desc">
                        <p name="variable_project_description">
                        ${projectDescription3}
                        </p>
                    </div>
                </div>
                `;
  htmlTemplate += `
            </div>
        </div>
      </div >
      `;

  htmlTemplate += `
      <div class="even">
        <div class="skills">
          <div class="main-heading">
            <h3>Skills</h3>
          </div>
          <div class="skills-flex">
          `;
  if (skill1 != "" && skill1 != null)
    htmlTemplate += `
            <strong name="variable_skill" class="skills-info">${skill1}</strong>`;
  if (skill2 != "" && skill2 != null)
    htmlTemplate += `
            <strong name="variable_skill" class="skills-info">${skill4}</strong>`;
  if (skill3 != "" && skill3 != null)
    htmlTemplate += `
            <strong name="variable_skill" class="skills-info">${skill3}</strong>`;
  if (skill4 != "" && skill4 != null)
    htmlTemplate += `
            <strong name="variable_skill" class="skills-info">${skill4}</strong>`;
  if (skill5 != "" && skill5 != null)
    htmlTemplate += `
            <strong name="variable_skill" class="skills-info">${skill5}</strong>`;
  if (skill6 != "" && skill6 != null)
    htmlTemplate += `
            <strong name="variable_skill" class="skills-info">${skill6}</strong>`;
  htmlTemplate += `
          </div>
        </div>
        `;

  htmlTemplate += `
        <div class="certificates">
            <div class="main-heading">
                <h3>Certificates</h3>
            </div>
            <div class="certificates-flex">
                <p>
                    <strong name="variable_certificate">Python Completion</strong>
                </p>
                <p>
                    <strong name="variable_certificate">Ethical Hacking</strong>
                </p>
            </div>
        </div>
      </div >
        <div class="even">
            <div class="spoken-languages">
                <div class="main-heading">
                    <h3>Languages</h3>
                </div>
                <div class="spoken-languages-flex">
                    <div class="spoken-languages-info">
                        <p>
                            <strong name="variable_lang_name">Gujarati</strong>&nbsp;:
                            <span name="variable_lang_profeciency">100% </span>
                        </p>
                        <p>
                            <strong name="variable_lang_name">English</strong>&nbsp;:<span name="variable_lang_profeciency">70%
                            </span>
                        </p>
                        <p>
                            <strong name="variable_lang_name">Japanese</strong>&nbsp;:<span name="variable_lang_profeciency">20%
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="references">
                <div class="main-heading">
                    <h3>References</h3>
                </div>
                <div class="references-flex">
                    <div class="references-info">
                        <p>
                            <strong name="variable_professor_name"></strong><span name="variable_professor_contacct"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section >
  </main >
</body >
</html > `;

  return htmlTemplate;
};
