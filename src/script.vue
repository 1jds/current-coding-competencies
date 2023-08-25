<script>
export default {
  data() {
    return {
      pageTitle: "Current Coding Competencies",
      items: [
        {
          id: 1,
          languageName: "HTML",
          skillLevelNum: 7,
          displayDetails: false,
          message: [
            `I have worked with HTML consistently, and am comfortable with it, and with making use of reference resources such as MDN for anything that I need to clarify about it.`,
            `I have completed the FreeCodeCamp HTML curriculum, and built two static HTML-orientated websites previously deployed to hosting with VentraIP at a purchased domain.`,
            `I have some awareness of including accessibility features such as ARIA labels in HTML.`
          ]
        },
        {
          id: 2,
          languageName: "CSS",
          skillLevelNum: 7,
          displayDetails: false,
          message: [
            `I have used CSS a decent amount, and continue to learn in this area by following leading CSS-creators such as Kevin Powell, and CSS resources such as CSS-Tricks and Smashing Magazine.`,
            `I also have some exposure to CSS frameworks such as SASS and SCSS. This Codepen is an example of the use of CSS custom properties, transitions, media-queries, Google fonts, etc.`,
            `I can use the Chrome dev tools to debug, reverse-engineer, or otherwise inspect CSS.`
          ]
        },
        {
          id: 3,
          languageName: "JavaScript",
          skillLevelNum: 6,
          displayDetails: false,
          message: [
            `I have completed the FreeCodeCamp curriculum for JavaScript, as well as all of the challenges on www.jschallenger.com`,
            `I have some familiarity with using vanilla JavaScript for DOM manipulation, API calls (e.g. with GET and PUT), cookie usage, local storage.`,
            `I can use the Chrome dev tools to monitor console logs, network activities such as GET requests and associated statuses`
          ]
        },
        {
          id: 4,
          languageName: "TypeScript",
          skillLevelNum: 3,
          displayDetails: false,
          message: [
            `I have made some limited use of TypeScript in React when working on a small project using the weather.com API`,
            `I am not familiar with advanced features of TypeScript, but am aware of the most-common basics such as Types, Interfaces, expected function return types, and so on.`
          ]
        },
        {
          id: 5,
          languageName: "React",
          skillLevelNum: 6,
          displayDetails: false,
          message: [
            `I have completed a General Assembly certificate for React, the FreeCodeCamp React curriculum, and two Scrimba React courses.`,
            `I have used React and Vanilla JavaScript to build a number of projects, making use of a wide range of JavaScript methods and React hooks.`,
            `I have used both class-based components and more modern function components, and am comfortable using the documentation.`
          ]
        },
        {
          id: 6,
          languageName: "Vue",
          skillLevelNum: 3,
          displayDetails: false,
          message: [
            `I have only just begun learning Vue. However, it shares many characteristics with React, such as composability and reusable components with props.`,
            `Vue's Options API is most similar to React's Class-based components, and while there is not a one-to-one syntax correspondence, the two frameworks share many similarities (e.g. useEffect vs. watchEffect).`
          ]
        },
        {
          id: 7,
          languageName: "Git",
          skillLevelNum: 4,
          displayDetails: false,
          message: [
            `I have used Git through VS Code, both through the GUI and through the terminal.`,
            `I am familiar with the simpler, more common commands and tasks such as initialising, cloning, pulling, pushing, branching, merging, using 'git status', and so on.`
          ]
        },
        {
          id: 8,
          languageName: "GitHub",
          skillLevelNum: 4,
          displayDetails: false,
          message: [
            `I have some experience using GitHub as a user with a few of my own repositories, as a participant in a GitHub enterprise repository, and as an individual accessing others' repos for NPM packages, tutorials, and the like.`,
            `I have basic experience using GitHub to clone a remote repo via HTTPS, make pull requests, compare diffs between merges, and use some actions.`
          ]
        },
        {
          id: 9,
          languageName: "Node",
          skillLevelNum: 4,
          displayDetails: false,
          message: [`I have completed several study projects using Node and Express as a server connected to MongoDB as part of the Free Code Camp curriculum. The projects involved handling routes for API end-points, making use of Chai and Mocha for testing, and interacting with my own free-tier MongoDB database.`]
        },
        {
          id: 10,
          languageName: "SQL",
          skillLevelNum: 5,
          displayDetails: false,
          message: [
            `I have not yet used SQL in a project, but have begun to learn it, PostgreSQL, and Bash scripting through the FreeCodeCamp curriculum.`
          ]
        },
        {
          id: 11,
          languageName: "Linux CL",
          skillLevelNum: 1,
          displayDetails: false,
          message: [
            `I have not used the Linux Command Line, but am giving this a score of 1 instead of 0, because I've used the GitBash terminal, and PowerShell somewhat.`
          ]
        },
        {
          id: 12,
          languageName: "GitBash CL",
          skillLevelNum: 3,
          displayDetails: false,
          message: [
            `I have used this Bash terminal in VS Code for running Git commands, navigating directories, installing NPM packages, and running NPM commands.`
          ]
        },
        {
          id: 13,
          languageName: "C#",
          skillLevelNum: 0,
          displayDetails: false,
          message: [`I have not used C# before.`]
        },
        {
          id: 14,
          languageName: "Bootstrap",
          skillLevelNum: 6,
          displayDetails: false,
          message: [
            `I have used Bootstrap 5 with minor modifications for the base stylings of a website, and for functional components such as accordions and tooltips.`
          ]
        },
        {
          id: 15,
          languageName: "Material UI",
          skillLevelNum: 5,
          displayDetails: false,
          message: [
            `I have made limited use of Material UI, but feel confident in using it given its similarity to Bootstrap.`
          ]
        },
        {
          id: 16,
          languageName: "cPanel",
          skillLevelNum: 2,
          displayDetails: false,
          message: [
            `I have made use of cPanel to deploy a static website to a web hosting service, and to manage and edit source files.`
          ]
        },
        {
          id: 17,
          languageName: "YAML",
          skillLevelNum: 2,
          displayDetails: false,
          message: [
            `I have once set up a YAML pipeline - following a tutorial with minor modifications - to promote changes from a GitHub repository to an AWS bucket.`
          ]
        }
      ]
    };
  }
};
</script>

<template>
  <div id="app">
    <h1>{{ pageTitle }}</h1>
    <div v-for="(item, index) in items" :key="item.id">
      <div
        class="language"
        :class="{ 'language-active-border': item.displayDetails }"
      >
        <h2>{{ item.languageName }}</h2>
        <div class="scale">
          <div
            v-for="index in 11"
            :class="{
              'scale-glow': index - 1 <= item.skillLevelNum,
              'scale-grey': index - 1 > item.skillLevelNum
            }"
          >
            {{ index - 1 }}
          </div>
        </div>
        <button
          class="btn-more-info"
          :class="{'btn-more-info-rotated-180deg': item.displayDetails}"
          @click="item.displayDetails = !item.displayDetails"
        >
          <span
            class="material-symbols-outlined"
          >
            expand_more
          </span>
        </button>
      </div>
      <div
        class="transition-container"
        :class="{
          'transition-container-on': item.displayDetails,
          'transition-container-off': !item.displayDetails
        }"
      >
        <div>
          <p
            :class="{
              'details-paras': item.message.length > 1,
              'details-para': item.message.length === 1
            }"
            v-for="para in item.message"
          >
            {{ para }}
          </p>
        </div>
      </div>
    </div>

    <p class="final-comment">
      See a larger solo React project CICD
      <a
        class="a-text-links"
        href="http://js-ga-assets.s3-website-ap-southeast-2.amazonaws.com/poems"
        target="_blank"
        rel="noopener"
      >
        deployed to AWS
      </a>
    </p>

    <a href="https://github.com/1jds" target="_blank" rel="noopener">
      <button class="btn-main">Go to GitHub</button>
    </a>
  </div>
</template>

<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  --neon-font: "Tilt Neon", cursive;
  --main-font: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  --glow-color: #4fc08d;
  --bg-color: #151b24;
  --lighter-grey: hsl(0 0% 100% / 0.2);
  --darker-grey: #202833;
  background: var(--bg-color);
  padding: 60px 100px;
  display: flex;
  justify-content: center;
}

@media (max-width: 730px) {
  body {
    padding: 1rem;
  }
}

@media (max-width: 375px) {
  body {
    margin: 0;
    padding: 0;
  }
}

#app {
  width: 100%;
  max-width: 900px;
  text-align: center;
  color: #fff;
  font-family: var(--main-font);
}

h1 {
  font-size: 2.5rem;
}

@media (max-width: 350px) {
  h1 {
    font-size: 2rem;
  }
}

a {
  all: unset;
}

.a-text-links {
  color: var(--glow-color);
  text-decoration: underline;
  cursor: pointer;
}

.final-comment {
  padding-top: 2rem;
}

button {
  all: unset;
  cursor: pointer;
}

.btn-main {
  color: var(--glow-color);
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
  margin-top: 0.5rem;
}

.btn-more-info {
  position: absolute;
  bottom: -1.15rem;
  right: 1rem;
  z-index: 2;
  background: var(--bg-color);
  color: var(--lighter-grey);
  border-radius: 50%;
  height: 2.2rem;
  transition: all 400ms;
}

.btn-more-info-rotated-180deg {
  transform: rotate(180deg);    
  color: var(--glow-color);
  transition: all 400ms;
}
  
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 700, "GRAD" 0, "opsz" 48;
  font-size: 2.25rem;
}

.language {
  padding: 0rem 2rem;
  background: var(--bg-color);
  border-bottom: 5px solid var(--darker-grey);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
}

.language-active-border {
  box-shadow: 0px 4px 10px var(--bg-color);
  border-bottom: 5px solid var(--glow-color);
  transition: border 300ms;
}

@media (max-width: 960px) {
  .language {
    padding: 2rem;
  }
}

.scale {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 550px) {
  .scale {
    flex-wrap: wrap;
  }
}

.scale > div {
  font-size: 1rem;
  font-weight: bold;
  font-family: var(--neon-font);
  border-radius: 2px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-color);
}

.scale-glow {
  --local-var: var(--glow-color);
  color: var(--local-var);
  border: 1px solid var(--local-var);
  box-shadow: inset 0 0 0.4rem 0 var(--local-var), 0 0 0.4rem 0 var(--local-var);
}

.scale-grey {
  --local-var: var(--lighter-grey);
  color: var(--local-var);
  border: 1px solid var(--local-var);
  box-shadow: inset 0 0 0.4rem 0 var(--local-var), 0 0 0.4rem 0 var(--local-var);
}

.language > h2 {
  font-size: 2rem;
  flex-basis: 10ch;
  text-align: start;
}

@media (max-width: 275px) {
  h1 {
    font-size: 1.5rem;
    word-wrap: break-word;
  }

  .language > h2 {
    font-size: 1.4rem;
    word-wrap: break-word;
  }
}

.transition-container {
  display: grid;
  transition: grid-template-rows 500ms;
}

.transition-container-off {
  grid-template-rows: 0fr;
}

.transition-container-on {
  grid-template-rows: 1fr;
}

.transition-container > div {
  overflow: hidden;
}

.details-para {
  background: var(--darker-grey);
  margin: 0;
  padding: 1.25rem 2rem;
  text-align: start;
}

.details-paras {
  background: var(--darker-grey);
  margin: 0;
  padding: 0.75rem 2rem;
  text-align: start;
}

.details-paras:first-child {
  background: var(--darker-grey);
  margin: 0;
  padding: 1.25rem 2rem 0.75rem 2rem;
  text-align: start;
}

.details-paras:last-child {
  background: var(--darker-grey);
  margin: 0;
  padding: 0.75rem 2rem 1.25rem 2rem;
  text-align: start;
}
</style>
