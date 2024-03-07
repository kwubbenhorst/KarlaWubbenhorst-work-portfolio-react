# Karla-Wubbenhorst-work-portfolio-react
A professional portfolio, built with the MERN stack (backend still under construction), showcasing my deployed web applications

![MIT License](https://img.shields.io/badge/MIT-License-blue)
  

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Description
Those seeking jobs in the web development field should be able to use a web app to display their proficiencies to prospective employers. This work portfolio application built with React both showcases a portfolio of development projects and is itself a showcase of my development skills with React and CSS. Although it is a single page application it behaves like a website with multiple pages using react-router-dom to navigate between them. Thus it is a considerable advance upon the single static page with links to scroll to the various sections which I developed earlier as a professional-work-portfolio. The interactive features of this application include a contact form and a downloadable resume. Although the backend is not yet developed it could theoretically serve up the resume and store the information submitted through the contact form.  

This was my first application using the front-end framework, React, and Vite for compilation. It is an elegant technology capable of rendering what looks like HTML as the return from a javascript function. The Vite dependency was a little confusing because it supplies some files with the initial build, some of which include stylings, which apply globally and have to be undone if you want custom styles. The file structure is also a bit confusing as a pages folder houses code necessary to render a page, but on simple pages of only one component, it can seem redundant with the various files in the components folder. While there are various options for doing CSS I preferred to maintain a separation of concerns by dedicating a CSS file to each jsx where stylings were needed. I had the opportunity to employ three hooks useState (to manage the changes to the form when it receives inputs) , useNavigate and useEffect. Hooks were not part of React in its earliest iterations and seem to offer some advantages, although there is an initial learning curve involved. Props are another feature which are useful for dynamic rendering. I chose to use vanilla css instead of leveraging a component library or a css in js approach for inserting styled components. I find CSS rules easy to write syntactically and I like the complete creative control that one has when one designs layouts with components built from scratch. I also requested some custom fonts from the googlefonts library and used one of the colour palettes from Coolors. Images were sourced from Unsplash and compressed before adding them to the assets folder. I thought about using gifs and made two from my walkthrough videos but even when resized and optimized they come with a much heavier file size even than mp4s, so I decided to go with static images for the portfolio page which might also create a better UX vs. lots of different images moving at different rates. 

Although the specs for this project only required six projects in the showcase I doubled that number since I wanted to add more than one of my front-end and back end projects in addition to those that are full stack. I included the portfolio itself as one of the four full stack projects because I intend to add an express server and mongoDB database (with Mongoose and GraphQL to handle the form submission and store the resume. Then the portfolio will exhibit the full MERN stack. I would also like to add some analytic features that will show me which projects are most viewed by prospective employers. I think even as is the project stands out because the copy is well-written and the UI is attractively and cleanly designed. The stylings were done with a view to responsiveness, leveraging a variety of techniques: media queries, flexbox, CSS grid and relative units of measure for most values.I could have designed this project with a simpler file structure, combining the creation and styling of components with the pages they sit on, as this is a simple application without where many of the reusable components are in fact used in only one instance. However I made a conscious choice to create the structure in a way that would be more scalable and maintainable if I wanted to add additional features to the project later, and although there are a lot of files I think the modular structure makes it very easy to understand where the stylings are for the various components and pages.

Another learning curve in this build was its eventual deployment with Netlify. The application is ready to be seen and interacted with by prospective employers on the world wide web. Here is the deployment URL:

## Installation
N/A

## Usage
Upon page load the user is greeted by the About Me page. The highlighting of the current page in the nav links allows for no confusion that this, besides being the landing page, is also one of the four sections of the project. The About Me page includes a picture of the developer and a couple of paragraphs telling the story of my journey into web development thus far.

![about-me-page-screenshot](https://github.com/kwubbenhorst/KarlaWubbenhorst-work-portfolio-react/assets/140316693/0490c4f1-a1d1-4f04-8db2-c0468edf47aa)

 At the portfolio page the user can see a gallery of 12 cards, representing 12 projects. Clicking on the card title will take the user to the URL for deployed projects or to the walk-though video for backend work. The subtitle which references the various technologies used, when clicked, links to the github repo page with the project code and version history. The image on the card is a screenshot of the app. 

![portfolio-page-screenshot](https://github.com/kwubbenhorst/KarlaWubbenhorst-work-portfolio-react/assets/140316693/7800f65d-67d7-4813-ac0c-c3afc330bb64)

At the Contact page, the user can complete a form with their name, email and a message to me. Clicking the submit button does not send the form off anywhere because a backend server is not yet connected, so I have simulated what would happen on a successful submit in terms of verification and button animation. The logic behind this page interacts with the inputs, using State and sends messages and alerts back if certain required fields are not completed or if an invalid email is entered. 

![contact-page-screenshot](https://github.com/kwubbenhorst/KarlaWubbenhorst-work-portfolio-react/assets/140316693/f8ed0a66-eff2-454e-aeea-fd5d3a959d18)

At the resume page, there is a link which will open the full copy of my CV as a downloadable pdf as well as a hardcoded unordered list of my technical proficiencies and soft skills in a three column layout. 

![resume-page-screenshot](https://github.com/kwubbenhorst/KarlaWubbenhorst-work-portfolio-react/assets/140316693/c37a6d98-3cf6-4190-92b5-5f132779ec47)


The page simulation is achieved by routing to a different main section for each distinct endpoint, while the navbar in the header that also displays my name and the footer with links to my web presence on github, linked in and youtube, remain at the top and the bottom throughout.

## Credits
This project was a single-author creation.
The colour palette was suggested by Coolors, https://coolors.co/palettes/trending, the images were taken by Annie Spratt and sourced at Unsplash https://unsplash.com/s/photos/annie-spratt, except for the photo of me, which I took myself and optimized using jpeg-optimizer.com. https://jpeg-optimizer.com/compress-jpeg-to-100kb/. 

## License
This project is licensed under the [MIT License](./LICENSE-MIT).

## Contributions
Contributions are welcome. Please contact the developer directly at kwubbenhorst@gmail.com, on github or through the various contact avenues gives in the application itself.

## Tests
N/A

## Questions
The sole developer of this application is Karla Wubbenhorst, kwubbenhorst@gmail.com. Please direct any questions or feedback to Karla (ie. me) directly.
