import { Link } from "react-router-dom";

export const PersonalProjectsData = [
  {
    projectID: "uzoma-draws",
    name: "Uzoma Draws",
    projectType: "Website",
    techStackUsed: ["React", "TailwindCSS", "Firebase"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Uzoma%20Draws%2F1.PNG?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Uzoma%20Draws%2F1.PNG?alt=media",
    ],
    shortDescription: "Art Portfolio of Uzoma Ogbor",

    fullDescription: (
      <div className="projectDescription">
        <p>
          Uzoma Ogbor, a friend of mine, is a digital illustrator. He publicizes
          his finished artworks mainly through Instagram and other social media
          platforms though, he began looking into creating a website for his
          works. He wanted a place to show his full portfolio (finished works,
          sketches, comics and so on) as well as a more official medium with
          which he could interact with viewers and potential clients. However,
          he had no experience in creating websites and as such ran into a dead
          end.
        </p>

        <p>
          Seeing his incredible artworks, and his present dilemma, I offered to
          support his career, by helping him create a website (an art portfolio)
          according to his specifications, free of charge.
        </p>

        <p>
          I created the website using ReactJS, Typescript, TailwindCSS, Firebase
          Authentication, Firebase Storage, and Firebase Cloud Firestore. The
          website is hosted on Netlify, and the Art Images are hosted on
          Firebase Storage.
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
    githubUrl: "",
    liveUrl: "https://uzoma-draws.netlify.app/",
  },

  {
    projectID: "pau-timer",
    name: "PAU Timer",
    projectType: "Desktop Application (Windows OS)",
    techStackUsed: ["Electron", "React", "TailwindCSS"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/PAU%20Timer%2FScreenshot%20(783).png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/PAU%20Timer%2FScreenshot%20(777).png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/PAU%20Timer%2FScreenshot%20(781).png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/PAU%20Timer%2FScreenshot%20(782).png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/PAU%20Timer%2FScreenshot%20(783).png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/PAU%20Timer%2FScreenshot%20(784).png?alt=media",
    ],
    shortDescription:
      "A desktop timer application I made for my university, Pan-Atlantic University.",

    fullDescription: (
      <div className="projectDescription">
        <p>
          A desktop timer application I made for my university, Pan-Atlantic
          University. It is a timer application built customarily to solve the
          needs of the university. After noticing the problem of inconsistent
          timer systems in use by the school and the potential problems it was
          causing I sought to solve it through the creation of a uniform,
          school-branded timer application to suit all the needs of students and
          lecturers alike; hence, the development of the PAU Timer Application.
        </p>

        <p>
          I developed the desktop application using ElectronJS, ReactJS, and
          TailwindCSS.
        </p>

        <p>
          The application is essentially a passion project and a way of giving
          back freely to the school as well as helping in my own way to improve
          upon the already high standard the Pan-Atlantic University sets for
          tertiary education in Nigeria. Fortunately, the university approved
          the use and dissemination of the application throughout the school to
          be used in presentations, tests, and examinations.
        </p>
      </div>
    ),
    techStackAndExplanation: [
      {
        techName: "React",
        techUsage:
          "The entire application was built on the Javascript Library: React.",
      },
      {
        techName: "Electron",
        techUsage:
          "This was used to compile the React code into a Desktop application.",
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
    githubUrl: "",
    liveUrl: "",
  },

  {
    projectID: "hourly-splashes",
    name: "Hourly Splashes",
    projectType: "Twitter Bot",
    techStackUsed: ["NodeJS"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Hourly%20Splashes%2F1.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Hourly%20Splashes%2F1.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Hourly%20Splashes%2F2.png?alt=media",
    ],
    shortDescription:
      "A Twitter bot that makes hourly tweets of high quality images.",

    fullDescription: (
      <div className="projectDescription">
        <p>
          A Twitter bot that makes hourly tweets of high quality images. A
          simple idea I had been wanting to make for a while. The bot sources a
          random image each hour from Unsplash.com, and posts it on Twitter (for
          the world to appreciate the time and effort it took to produce the
          photograph [the perfect shot 📸]).
        </p>

        <p>The bot makes 24 high quality image tweets every single day.</p>

        <p>
          <b>
            Note: All credits for each image is given in full to the
            photographer on each tweet made by the bot.
          </b>
        </p>
      </div>
    ),
    techStackAndExplanation: [
      {
        techName: "NodeJS",
        techUsage: "I used NodeJS to create the entire bot.",
      },
      {
        techName: "Git",
        techUsage: "I used Git for version control.",
      },
    ],
    githubUrl: "",
    liveUrl: "https://twitter.com/hourly_splashes",
  },

  {
    projectID: "todays-bio",
    name: "Today's Bio",
    projectType: "Twitter Bot",
    techStackUsed: ["NodeJS"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Today's%20Bio%2F1.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Today's%20Bio%2F1.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Today's%20Bio%2F2.png?alt=media",
    ],
    shortDescription:
      "A Twitter bot that tweets historical facts about each day.",

    fullDescription: (
      <div className="projectDescription">
        <p>A Twitter bot that tweets historical facts about each day.</p>

        <p>
          <b>For Example:</b>
        </p>

        <span>
          <i>
            On the 5th of February, 1971
            <p>Astronauts land on the Moon in the Apollo 14 mission.</p>
          </i>
        </span>
      </div>
    ),
    techStackAndExplanation: [
      {
        techName: "NodeJS",
        techUsage: "I used NodeJS to create the entire bot.",
      },
      {
        techName: "Git",
        techUsage: "I used Git for version control.",
      },
    ],
    githubUrl: "",
    liveUrl: "https://twitter.com/TodaysBio",
  },

  {
    projectID: "iaoe",
    name: "iaoe",
    projectType: "Website and AI",
    techStackUsed: ["React", "TailwindCSS", "Typescript", "Firebase", "Git"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/iaoe%2F1.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/iaoe%2F1.png?alt=media",
    ],
    shortDescription:
      "This project is a combination of a website and AI I made. I took the simple game of Tic Tac Toe and decided to make an unbeatable version, by creating some Artificial Intelligence that considers the player’s every move and prevents him/her from winning.",

    fullDescription: (
      <div className="projectDescription">
        <p>
          This project is a combination of a website and AI I made. I took the
          simple game of Tic Tac Toe and decided to make an unbeatable version,
          by creating some Artificial Intelligence that considers the player’s
          every move and prevents him/her from winning.
        </p>

        <p>
          I got the idea for this project a while back, I thought it would be
          cool to make a simple game such as Tic Tac Toe unbeatable, hence I
          challenged my self to do something I had never done before; I made an
          AI.
        </p>

        <p>
          The AI is called “iaoe”. I built it using Typescript in about 12 hours
          total. It is based on an article I read on how to never lose a game of
          Tic Tac Toe.
        </p>

        <p>
          I also used Firebase Firestore to make a counter for the total number
          of attempts made to beat the AI, every time a player tries to beat the
          game, I send a request to Firebase to update the document where the
          counter number is saved.
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
          react-router-dom, firebase
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
        techName: "Firebase",
        techUsage:
          "I used Firebase Firestore to make a counter for the total number of attempts made to beat the AI, every time a player tries to beat the game, I send a request to Firebase to update the document where the counter number is saved.",
      },
      {
        techName: "Git",
        techUsage: "I used Git for version control.",
      },
    ],
    githubUrl: "",
    liveUrl: "https://iaoe.netlify.app/",
  },

  {
    projectID: "pens",
    name: "Pens",
    projectType: "Mobile Application",
    techStackUsed: ["Dart", "Flutter", "Firebase", "Git"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F16.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F16.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F18.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Pens%2F24.png?alt=media",
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
          website and it is now live to the public.
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
    liveUrl: "https://www.thestonechurchagugu.org.ng/",
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

  // {
  //   projectID: "calmslides-bot",
  //   name: "CalmSlides Bot",
  //   projectType: "Bot",
  //   techStackUsed: ["NodeJS", "MongoDB", "Git"],
  //   mainImageUrl:
  //     "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%20Bot%2F1.png?alt=media",
  //   allImagesUrl: [
  //     "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/CalmSlides%20Bot%2F1.png?alt=media",
  //   ],
  //   shortDescription:
  //     "This bot provides the image data needed to power my other project, called “CalmSlides”. It runs as a worker bot on Heroku making requests to the Unsplash API at regular intervals and storing this data on MongoDB.",

  //   fullDescription: (
  //     <div className="projectDescription">
  //       <p>
  //         This bot was built using NodeJS, and it simply makes a request to the
  //         Unsplash API every 2mins <i>(using the node-schedule NPM package)</i>{" "}
  //         to receive data on 30 images.
  //       </p>

  //       <p>
  //         <b>Why I created this bot?</b> I created this bot to solve a problem.
  //         I needed thousands of Unsplash images each time a user wanted to have
  //         a “relaxation session” on my other project “
  //         {
  //           <Link
  //             to="/projects/calmslides"
  //             className="font-sans text-base md:text-lg lg:text-xl font-light text-left text-gray-700 mt-2 md:mt-3 underline underline-offset-2 decoration-gray-400"
  //           >
  //             CalmSlides
  //           </Link>
  //         }
  //         ”, and the Unsplash API <i>(in development mode)</i> restricts the
  //         number of requests I can make to 50 requests per hour{" "}
  //         <i>
  //           (Note: in each request I can retrieve data on up to 30 images
  //           maximum)
  //         </i>
  //         .
  //       </p>

  //       <p>
  //         Hence to solve this problem I created a bot that made requests for all
  //         the image data I could need on the website beforehand, and store it on
  //         MongoDB, so I would not need to make an API call each time I needed
  //         the images on “
  //         {
  //           <Link
  //             to="/projects/calmslides"
  //             className="font-sans text-base md:text-lg lg:text-xl font-light text-left text-gray-700 mt-2 md:mt-3 underline underline-offset-2 decoration-gray-400"
  //           >
  //             CalmSlides
  //           </Link>
  //         }
  //         ”. The bot ran for 4 days, and stored data on 92,813 images, before I
  //         shut it down <i>(temporarily)</i>.
  //       </p>

  //       <p>
  //         It uses the mongoose NPM package to connect to MongoDB and store data
  //         in the database.During this project, I learned how to store data in
  //         MongoDB by creating Schemas and Models.
  //       </p>

  //       <p>
  //         <u>
  //           <b>Key NPM Packages used:</b>
  //         </u>{" "}
  //         node-fetch, mongoose, node-schedule, unsplash-js, dotenv
  //       </p>
  //     </div>
  //   ),
  //   techStackAndExplanation: [
  //     {
  //       techName: "NodeJS",
  //       techUsage: "The worker bot was built with NodeJS.",
  //     },
  //     {
  //       techName: "MongoDB Atlas Database",
  //       techUsage: "To store metadata of the images that power CalmSlides.",
  //     },
  //     {
  //       techName: "Git",
  //       techUsage: "I used Git for version control.",
  //     },
  //   ],
  //   githubUrl: "https://github.com/Ola4606/Calm-Slides-Bot",
  //   liveUrl: "",
  // },
];

export const FreelanceProjectsData = [
  {
    projectID: "linear-app",
    name: "Linear App Clone",
    projectType: "Website",
    techStackUsed: ["React", "TailwindCSS", "Git"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Linear%20App%20Clone%2F1.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Linear%20App%20Clone%2F1.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Linear%20App%20Clone%2F2.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Linear%20App%20Clone%2F3.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Linear%20App%20Clone%2F4.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Linear%20App%20Clone%2F5.png?alt=media",
    ],
    shortDescription:
      'I was tasked with cloning "https://linear.app/releases/2022" in one week, and here is what I came up with.',

    fullDescription: (
      <div className="projectDescription">
        <p>
          I was tasked with cloning&nbsp;
          <a
            href="https://linear.app/releases/2022"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-base md:text-lg lg:text-xl font-light text-left text-gray-700 mt-2 md:mt-3 underline underline-offset-2 decoration-gray-400"
          >
            https://linear.app/releases/2022
          </a>
          &nbsp;in one week, and here is what I came up with.
        </p>

        <p>
          Using TailwindCSS breakpoints, I was able to make it fully responsive
          for mobile, tablet, laptop, and larger screens.
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
        techName: "Git",
        techUsage: "I used Git for version control.",
      },
    ],
    githubUrl: "https://github.com/Ola4606/Linear-App-Clone",
    liveUrl: "https://peaceful-gumption-f414c9.netlify.app/",
  },

  {
    projectID: "joes-agency",
    name: "Joe's Agency",
    projectType: "Website",
    techStackUsed: ["React", "TailwindCSS", "Git"],
    mainImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Agency%20Website%2F1.png?alt=media",
    allImagesUrl: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Agency%20Website%2F1.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Agency%20Website%2F2.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Agency%20Website%2F3.png?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-25f62.appspot.com/o/Agency%20Website%2F4.png?alt=media",
    ],
    shortDescription:
      "I was tasked with creating a simple website for a software agency, and here is what I came up with.",

    fullDescription: (
      <div className="projectDescription">
        <p>
          I was tasked with creating a simple website for a software agency, and
          here is what I came up with.
        </p>

        <p>
          This was the first project that required me to use a pre-built React
          component, I used the Material User Interface (MUI) package to create
          the Accordion component that shows the kinds of projects the software
          agency can engage in.
        </p>

        <p>
          Using TailwindCSS breakpoints, I was able to make it fully responsive
          for mobile, tablet, laptop, and larger screens.
        </p>

        <p>
          <u>
            <b>Key NPM Packages used:</b>
          </u>{" "}
          mui
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
        techName: "Git",
        techUsage: "I used Git for version control.",
      },
    ],
    githubUrl: "https://github.com/Ola4606/software-agency",
    liveUrl: "https://genuine-trifle-7b04b2.netlify.app/",
  },
];
