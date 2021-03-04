function generateMarkdown(data) {
  return `# ${data.Title}

## Table of Contents

* [About-project](#Description)
* [Video](#Video)
* [Picture1](#Picture1)
* [Installation](#Installation)
* [License](#License)
* [Contributor](#Contributor)
* [Email](#Email)
* [LinkedIn-profile](#LinkedIn-profile)
* [GitHub-profile](#GitHub-profile)
* [Website)](#Website)


   
### About the project:
${data.Description}

### Video:
${data.Video}

### Picture:
${data.Picture1} 

### Installation:
${data.installation}    

### Contributor:
${data.Contributor}

### License:
${data.license}

### Email address:
${data.email}

### LinkedIn profile:
${data.LinkedIn}

### GitHub profile:
${data.GitHub}

### Developed page:
${data.Page}
`;
}

module.exports = generateMarkdown;
