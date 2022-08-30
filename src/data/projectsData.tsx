import { Link } from "react-router-dom";

const projectsData = [
  {
    projectID: "portfolio",
    name: "My Portfolio (Laolu.dev)",
    projectType: "Website",
    techStackUsed: ["React", "TailwindCSS", "Typescript", "Git"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Portfolio%2F1.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Portfolio%2F1.png?alt=media",
    ],
    shortDescription:
      "This is my personal portfolio, the website you are currently on right now! I built it all from scratch, without using any templates. I made it unique to me (and even used my custom bitmojies).",

    fullDescription: (
      <div className="projectDescription">
        <p>
          This was a project personal to me, and I wanted it to look nice.
          Before making the website, I developed my skills on CSS Grids and
          Flexboxes, as I knew I would need them throughout the website{" "}
          <i>
            (I used flexboxes all through the website, and I used responsive
            grids, particularly in the projects section)
          </i>
          .
        </p>

        <p>
          I made the website fully unique to me, and I used my brand colors all
          through. As a web developer, I believe it is important to show my
          skills through my portfolio{" "}
          <i>(by building it myself from the ground up)</i>, and that is exactly
          what I have done.
        </p>

        <p>
          Using TailwindCSS breakpoints, I was able to make it fully responsive
          for mobile, tablet, and laptop screens.
        </p>

        <p>
          While building this website, I was able to improve my skills on some
          React principles and concepts, such as:
          <ul className="list-disc list-inside">
            <li>
              Using React Hooks <i>(namely useState, and useEffect)</i>
            </li>
            <li>Using React Memo</li>
            <li>Passing and receiving props</li>
            <li>Using SVGs in React, etc.</li>
          </ul>
        </p>

        <p>
          <u>
            <b>Key NPM Packages used:</b>
          </u>{" "}
          react-router-dom
        </p>
      </div>
    ),
    techStackAndExplanation: [
      {
        techName: "React",
        techUsage:
          "The entire website was built on the Javascript Library: React.",
      },
      {
        techName: "TailwindCSS",
        techUsage:
          "Instead of regular vanilla CSS, I used the CSS Framework: TailwindCSS, to reduce the development time and create cleaner User Interfaces.",
      },
      {
        techName: "Typescript",
        techUsage:
          "I used Typescript to add type control to Javascript variables and React Component Props, to reduce the likelihood of running into bugs caused by type errors.",
      },
      {
        techName: "Git",
        techUsage: "I used Git for version control.",
      },
    ],
    githubUrl: "https://github.com/Ola4606/Portfolio",
    liveUrl: "https://laolu.netlify.app/",
  },

  {
    projectID: "tsc-agugu",
    name: "The Stone Church, Agugu",
    projectType: "Website",
    techStackUsed: ["React", "TailwindCSS", "Typescript", "Git"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/The%20Stone%20Church%20Agugu%2F1.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/The%20Stone%20Church%20Agugu%2F1.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/The%20Stone%20Church%20Agugu%2F2.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/The%20Stone%20Church%20Agugu%2F3.png?alt=media",
    ],
    shortDescription:
      "This is a website I made for a growing church in Nigeria. It is a simple 4-page website, that displays information about the church.",

    fullDescription: (
      <div className="projectDescription">
        <p>
          This is a website I made for a growing church in Nigeria. It is a
          simple 4-page website, that displays information about the church. I
          made this website in 4 days as a remote freelancing gig. It was meant
          to just be a simple website with rectangular images and a plain font,
          but I took it a step further and customized the images I was given
          into different shapes and sizes on Canva, I also picked out a livelier
          font on Google Fonts for the website. The clients appreciated the
          website, but it is still yet to be released to the public for use.
        </p>

        <p>
          Using TailwindCSS breakpoints, I was able to make it fully responsive
          for mobile, tablet, laptop, and larger screens.
        </p>

        <p>
          While building this website, I was able to improve my skills on some
          React principles and concepts, such as:
          <ul className="list-disc list-inside">
            <li>Using React Memo</li>
            <li>Passing and receiving props</li>
            <li>Using custom fonts in React, etc.</li>
          </ul>
        </p>

        <p>
          <u>
            <b>Key NPM Packages used:</b>
          </u>{" "}
          react-router-dom
        </p>
      </div>
    ),
    techStackAndExplanation: [
      {
        techName: "React",
        techUsage:
          "The entire website was built on the Javascript Library: React.",
      },
      {
        techName: "TailwindCSS",
        techUsage:
          "Instead of regular vanilla CSS, I used the CSS Framework: TailwindCSS, to reduce the development time and create cleaner User Interfaces.",
      },
      {
        techName: "Typescript",
        techUsage:
          "I used Typescript to add type control to Javascript variables and React Component Props, to reduce the likelihood of running into bugs caused by type errors.",
      },
      {
        techName: "Git",
        techUsage: "I used Git for version control.",
      },
    ],
    githubUrl: "https://github.com/Ola4606/tsc-agugu",
    liveUrl: "https://tsc-agugu.netlify.app/",
  },

  {
    projectID: "worlds-richest",
    name: "World's Richest",
    projectType: "Website",
    techStackUsed: ["React", "TailwindCSS", "Typescript", "Git"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Worlds%20Richest%2F1.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Worlds%20Richest%2F1.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Worlds%20Richest%2F2.png?alt=media",
    ],
    shortDescription:
      "This website consumes live data on the world's richest people from an unofficial Forbes API (using the Axios npm package); and displays this data in a clean, modern, and responsive User Interface.",

    fullDescription: (
      <div className="projectDescription">
        <p>
          World's Richest was my first React project, and it was built using
          React and TailwindCSS. It consumes live data from this API:
        </p>
        <a
          href="https://forbes400.herokuapp.com/api/forbes400/real-time"
          target="_blank"
          rel="noopener noreferrer"
          className=" font-sans text-base md:text-lg lg:text-xl font-light text-left text-gray-700 underline underline-offset-2 decoration-gray-400"
        >
          API Link
        </a>

        <p>
          which provides data on the world's richest individuals in real-time.
          Although, this website only shows data on the top 100 richest people.
        </p>
        <p>
          It allows users to view the following data on the world's top 100
          richest people: Rank, Full Name, Net worth <i>(in US dollars)</i>,
          Source of wealth, Residence, and Bio <i>(a brief background)</i>.
        </p>
        <p>
          As I said earlier, this was my first React project, but I did not want
          to create the same old e-commerce website or weather website that most
          Junior React developers were making, so I created this.
        </p>
        <p>
          While creating this website I wanted to incorporate the data available
          on the Forbes website into an easy-to-use and simple website, so
          people could get the data they needed straight out of the website
          without all the other distractions.
        </p>

        <p>
          Using TailwindCSS breakpoints, I was able to make it fully responsive
          for mobile, tablet, and laptop screens.
        </p>

        <p>
          While building this website, I was able to improve my skills on some
          React principles and concepts, such as:
          <ul className="list-disc list-inside">
            <li>
              Using React Hooks <i>(namely useState, and useEffect)</i>
            </li>
            <li>Using React Memo</li>
            <li>Passing and receiving props</li>
            <li>Using SVGs in React, etc.</li>
          </ul>
        </p>

        <p>
          I also learned new principles, which included the use of the Axios NPM
          package for making HTTP requests; and using Asynchronous functions.
        </p>
        <p>
          <u>
            <b>Key NPM Packages used:</b>
          </u>{" "}
          Axios
        </p>
      </div>
    ),
    techStackAndExplanation: [
      {
        techName: "React",
        techUsage:
          "The entire website was built on the Javascript Library: React.",
      },
      {
        techName: "TailwindCSS",
        techUsage:
          "Instead of regular vanilla CSS, I used the CSS Framework: TailwindCSS, to reduce the development time and create cleaner User Interfaces.",
      },
      {
        techName: "Typescript",
        techUsage:
          "I used Typescript to add type control to Javascript variables and React Component Props, to reduce the likelihood of running into bugs caused by type errors.",
      },
      {
        techName: "Git",
        techUsage: "I used Git for version control.",
      },
    ],
    githubUrl: "https://github.com/Ola4606/Worlds-richest",
    liveUrl: "https://worlds-richest.netlify.app/",
  },

  {
    projectID: "calmslides",
    name: "CalmSlides",
    projectType: "Website",
    techStackUsed: ["React", "TailwindCSS", "Typescript", "MongoDB", "Git"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%2F1.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%2F1.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%2F2.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%2F5.png?alt=media",
    ],
    shortDescription:
      "CalmSlides is a simple-to-use web product that makes relaxation easier. It exposes users to thousands of randomly picked Unsplash images in a sliding marquee format in a short period. CalmSlides helps users to think, relax, and tune off.",

    fullDescription: (
      <div className="projectDescription">
        <p>
          CalmSlides in basic terms is a marquee-styled slideshow of randomly
          selected images.
        </p>

        <p>
          It is powered by another project of mine called the “
          {
            <Link
              to="/projects/calmslides-bot"
              className="font-sans text-base md:text-lg lg:text-xl font-light text-left text-gray-700 mt-2 md:mt-3 underline underline-offset-2 decoration-gray-400"
            >
              CalmSlides Bot
            </Link>
          }
          ”{" "}
          <i>
            (this was a worker bot built with NodeJS, that ran for 4 days, and
            stored the metadata of about 100,000 Unsplash images | which was all
            legal according to the Unsplash API guidelines)
          </i>
          .
        </p>

        <p>
          On the website, users can have “Relaxation Sessions” for which they
          can set the time
          <i>(how long the slideshow will last, e.g., 5mins)</i> and speed{" "}
          <i>(how fast the slideshow will move, e.g., Medium)</i>.
        </p>

        <p>
          The website uses the image URLs from the metadata stored on my MongoDB
          database to power the relaxation sessions, but there were some
          problems I ran into while building this project with MongoDB:
        </p>

        <p>
          <u>
            <b>Immediate Problem:</b>
          </u>{" "}
          I am using the MongoDB free tier, meaning that there are a limited
          number of connections allowed at a time to the database{" "}
          <i>(about 500 simultaneous connections)</i>. So, all users could not
          be connected to the database directly.
        </p>

        <p>
          <u>
            <b>Solution:</b>
          </u>{" "}
          I used the MongoDB Data API service to act as a medium between the
          users and the MongoDB database. This solves the immediate problem
          because, all users now retrieve data using an API, rather than
          connecting directly with the database; meaning that only 1 connection
          is being made to the database on behalf of all users.
        </p>

        <p>
          <u>
            <b>Further Problem:</b>
          </u>{" "}
          MongoDB prevents their Data API service from being used directly from
          the browser
          <i>(client-side)</i>, due to some CORS policy violations, which was a
          problem I did not know about until after writing the code to get data
          using the Data API service.
        </p>

        <p>
          <u>
            <b>Solution:</b>
          </u>{" "}
          I used the MongoDB Realm service{" "}
          <i>(through the realm-web NPM package)</i> which allows users to make
          the MongoDB Data API calls <i>(as a function)</i> from the MongoDB
          servers and returns the data to them on the browser.
        </p>

        <p>
          <u>
            <b>A Further Further Problem:</b>
          </u>{" "}
          I am using MongoDB Realm on its free tier, hence I am limited to 1
          million function calls per month, after which users cannot use my
          website.
        </p>

        <p>
          <u>
            <b>Solution (Coming Soon!):</b>
          </u>{" "}
          I aim to build an API using ExpressJS that runs the MongoDB API calls
          server side to retrieve the data for the users. I will make requests
          to this API using the Axios NPM package and return the data to the
          browsers. This will allow me to avoid MongoDB Realm.
        </p>

        <p>
          Using TailwindCSS breakpoints, I was able to make it fully responsive
          for mobile, tablet, and laptop screens.
        </p>

        <p>
          While building this website, I was able to improve my skills on some
          React principles and concepts, such as:
          <ul className="list-disc list-inside">
            <li>
              Using React Hooks <i>(namely useState, useEffect, and useMemo)</i>
            </li>
            <li>Using React Memo</li>
            <li>Passing and receiving props</li>
          </ul>
        </p>

        <p>
          I also learned new principles, which included:
          <ul className="list-disc list-inside">
            <li>
              The React Router DOM NPM Package which allowed me to add
              multi-page navigation to the website
            </li>
            <li>
              The Realm-web NPM package which allowed me to use MongoDB Realm
              services
            </li>
          </ul>
        </p>

        <p>
          <u>
            <b>Key NPM Packages used:</b>
          </u>{" "}
          realm-web, react-timer-hook, react-router-dom
        </p>
      </div>
    ),
    techStackAndExplanation: [
      {
        techName: "React",
        techUsage:
          "The entire website was built on the Javascript Library: React.",
      },
      {
        techName: "TailwindCSS",
        techUsage:
          "Instead of regular vanilla CSS, I used the CSS Framework: TailwindCSS, to reduce the development time and create cleaner User Interfaces.",
      },
      {
        techName: "Typescript",
        techUsage:
          "I used Typescript to add type control to Javascript variables and React Component Props, to reduce the likelihood of running into bugs caused by type errors.",
      },
      {
        techName: "MongoDB Data API",
        techUsage:
          "I used this to act as a medium between the users and the MongoDB database, limiting the number of connections made directly to the database.",
      },
      {
        techName: "MongoDB Realm",
        techUsage:
          "MongoDB prevents their Data API service from being used directly from the browser (client-side), hence I used the MongoDB Realm service (through the realm-web NPM package) which allows users to make the MongoDB Data API calls (as a function) from the MongoDB servers and returns the data to them on the browser.",
      },
      {
        techName: "Git",
        techUsage: "I used Git for version control.",
      },
    ],
    githubUrl: "https://github.com/Ola4606/Calm-Slides-Website",
    liveUrl: "https://calmslides.netlify.app/",
  },

  {
    projectID: "calmslides-bot",
    name: "CalmSlides Bot",
    projectType: "Bot",
    techStackUsed: ["NodeJS", "MongoDB", "Git"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%20Bot%2F1.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%20Bot%2F1.png?alt=media",
    ],
    shortDescription:
      "This bot provides the image data needed to power my other project, called “CalmSlides”. It runs as a worker bot on Heroku making requests to the Unsplash API at regular intervals and storing this data on MongoDB.",

    fullDescription: (
      <div className="projectDescription">
        <p>
          This bot was built using NodeJS, and it simply makes a request to the
          Unsplash API every 2mins <i>(using the node-schedule NPM package)</i>{" "}
          to receive data on 30 images.
        </p>

        <p>
          <b>Why I created this bot?</b> I created this bot to solve a problem.
          I needed thousands of Unsplash images each time a user wanted to have
          a “relaxation session” on my other project “
          {
            <Link
              to="/projects/calmslides"
              className="font-sans text-base md:text-lg lg:text-xl font-light text-left text-gray-700 mt-2 md:mt-3 underline underline-offset-2 decoration-gray-400"
            >
              CalmSlides
            </Link>
          }
          ”, and the Unsplash API <i>(in development mode)</i> restricts the
          number of requests I can make to 50 requests per hour{" "}
          <i>
            (Note: in each request I can retrieve data on up to 30 images
            maximum)
          </i>
          .
        </p>

        <p>
          Hence to solve this problem I created a bot that made requests for all
          the image data I could need on the website beforehand, and store it on
          MongoDB, so I would not need to make an API call each time I needed
          the images on “
          {
            <Link
              to="/projects/calmslides"
              className="font-sans text-base md:text-lg lg:text-xl font-light text-left text-gray-700 mt-2 md:mt-3 underline underline-offset-2 decoration-gray-400"
            >
              CalmSlides
            </Link>
          }
          ”. The bot ran for 4 days, and stored data on 92,813 images, before I
          shut it down <i>(temporarily)</i>.
        </p>

        <p>
          It uses the mongoose NPM package to connect to MongoDB and store data
          in the database.During this project, I learned how to store data in
          MongoDB by creating Schemas and Models.
        </p>

        <p>
          <u>
            <b>Key NPM Packages used:</b>
          </u>{" "}
          node-fetch, mongoose, node-schedule, unsplash-js, dotenv
        </p>
      </div>
    ),
    techStackAndExplanation: [
      {
        techName: "NodeJS",
        techUsage: "The worker bot was built with NodeJS.",
      },
      {
        techName: "MongoDB Atlas Database",
        techUsage: "To store metadata of the images that power CalmSlides.",
      },
      {
        techName: "Git",
        techUsage: "I used Git for version control.",
      },
    ],
    githubUrl: "https://github.com/Ola4606/Calm-Slides-Bot",
    liveUrl: "",
  },

  {
    projectID: "pens",
    name: "Pens",
    projectType: "Mobile Application",
    techStackUsed: ["Dart", "Flutter", "Firebase", "Git"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F4.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F4.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F5.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F6.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F9.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F11.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F12.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F13.png?alt=media",
    ],
    shortDescription:
      "Pens is a note-taking mobile application that I made to solve the issues I currently face with other note-taking applications. It is an application that showcases a beautiful User Interface but is still simple to use.",

    fullDescription: (
      <div className="projectDescription">
        <p>
          Pens is a note-taking mobile application that I made to solve the
          issues I currently face with other note-taking applications. It is an
          application that showcases a beautiful User Interface and is still
          simple to use.
        </p>

        <p>
          It provides the following features to users{" "}
          <i>
            (which are not commonly found in other note-taking applications)
          </i>
          :
          <ul className="list-disc list-inside">
            <li>The ability to passcode protect selected notes</li>
            <li>
              The ability to categorize notes into separate folders, for better
              organization
            </li>
          </ul>
        </p>

        <p>
          Making this application was a fun process. Through this process I
          picked up new skills and developed old ones, such as:
          <ul className="list-disc list-inside">
            <li>
              I improved my version control skills using Git, as I had to use
              git commands in my terminal to upload my code to Github
            </li>
            <li>
              Through this project I learnt how to handle state management
              within Flutter Applications, using the flutter_bloc package
            </li>
            <li>
              Through this project I gained additional knowledge on how to store
              and retrieve data from a local database in Flutter Applications,
              using the hive package
            </li>
            <li>
              Through this project I also continued to develop my skills in
              building exceptionally beautiful Mobile User Interfaces with the
              Flutter Framework
            </li>
            <li>
              I learnt how to use Firebase Analytics to track events performed
              by Users within the application
            </li>
          </ul>
        </p>

        <p>
          <u>
            <b>Key packages used:</b>
          </u>
          <ul className="list-disc list-inside">
            <li>
              <b>flutter_bloc:</b> To handle State Management in the entire
              application
            </li>
            <li>
              <b>hive:</b> To handle local storage of notes
            </li>
            <li>
              <b>intl:</b> Which provide better date formatting in the
              application
            </li>
            <li>
              <b>ionicons:</b> Giving me access to 100+ unique icons
            </li>
            <li>path_provider</li>
            <li>firebase_core</li>
            <li>firebase_analytics</li>
          </ul>
        </p>
      </div>
    ),
    techStackAndExplanation: [
      {
        techName: "Flutter",
        techUsage: "The framework used to build this mobile application.",
      },
      {
        techName: "Git",
        techUsage: "I used Git for version control.",
      },
    ],
    githubUrl: "",
    liveUrl: "https://play.google.com/store/apps/details?id=com.olacode.pens",
  },
];

export default projectsData;
