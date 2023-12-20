# react-native-webview-bridge
A messaging bridge for React-App and React-Native-WebView.
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>REACT-NATIVE-WEBVIEW-BRIDGE</h1>
<h3>◦ Bridging Your Views, Enhancing Your Native Experience!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/cheeselemon/react-native-webview-bridge?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/cheeselemon/react-native-webview-bridge?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/cheeselemon/react-native-webview-bridge?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/cheeselemon/react-native-webview-bridge?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running react-native-webview-bridge](#-running-react-native-webview-bridge)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The React-Native-Webview-Bridge is an innovative project facilitating effective communication between React and React Native through Webview. It enables message exchange, making applications more interactive and dynamic. With TypeScript and Babel configuration for ES6+ code transpilation, it provides valuable tools such as event listener setup, message handling and posting across different application components. The package brings together the modern functionalities of React ecosystem and simplifies the process of building sophisticated, data-driven applications.

---

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The architecture revolves around a React Native WebView Bridge system. It employs TypeScript and leverages Rollup.js for JavaScript module bundling.|
| 📄 | **Documentation**  | Documentation appears sparse. Code snippets are used to detail projects, but formal documentation is lacking. |
| 🔗 | **Dependencies**   | Dependencies include several development tools, such as Rollup and Babel, and libraries, including React and React-DOM.|
| 🧩 | **Modularity**     | Code is modular with clear separation between React and React Native parts. Constants are logically separated. |
| 🧪 | **Testing**        | There isn't any evidence of testing. No test files or test runners like Jest are present.|
| ⚡️  | **Performance**    | Direct performance evaluation is challenging. Yet, lightweight structure and lean dependencies suggest potential for high performance.|
| 🔐 | **Security**       | No explicit security measures observed. Use of WebView suggests potential risks needing mitigation.|
| 🔀 | **Version Control**| Git is used for version control. However, versioning strategy isn't specified in the provided analysis. |
| 🔌 | **Integrations**   | The main integration is between React and React Native via a WebView bridge.|
| 📶 | **Scalability**    | Modularity promotes scalability, but the absence of advanced state management or data layer might limit scale for more complex scenarios. |


---


## 📂 Repository Structure

```sh
└── react-native-webview-bridge/
    ├── package-lock.json
    ├── package.json
    ├── rollup.config.mjs
    ├── src/
    │   ├── constants/
    │   │   └── index.ts
    │   ├── index.ts
    │   ├── react/
    │   │   └── index.ts
    │   └── react-native/
    │       └── index.ts
    └── tsconfig.json

```

---


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [rollup.config.mjs](https://github.com/cheeselemon/react-native-webview-bridge/blob/main/rollup.config.mjs) | The code represents a configuration for Rollup.js, which is used for JavaScript module bundling. The configuration is set to transpile TypeScript and ES6+ code using typescript and babel plugins respectively. The nodeResolve plugin helps in resolving imports from node_modules, and commonjs plugin converts CommonJS modules to ES6. The output file is located in the dist directory and the code bundling excludes react and react-dom libraries as they are marked as external.                                               |
| [tsconfig.json](https://github.com/cheeselemon/react-native-webview-bridge/blob/main/tsconfig.json)         | This TypeScript configuration file sets up a project to compile to ES2020 JavaScript, includes ES2020, DOM, and ESNext libraries, and specifies JSX language generation. It is set to have strict type-checking, force consistent casing in file names, skip library type checks, and produce declaration files and their respective sourcemaps. The source root is set to the src folder, output sent to a dist folder, and non-included files are in node_modules and test files ending in.spec.ts.                                   |
| [package.json](https://github.com/cheeselemon/react-native-webview-bridge/blob/main/package.json)           | The code represents a package.json file for @cheeselemon/react-native-webview-bridge. It's a library enabling message exchange between React based applications and React-Native webviews. It consists of scripts to clean and build the project. It also lists dependencies like react-dom, babel, and typescript, and peer dependencies including different versions of react and react-dom. The primary entry point is dist/index.js and the repository is hosted on GitHub.                                                         |
| [package-lock.json](https://github.com/cheeselemon/react-native-webview-bridge/blob/main/package-lock.json) | The code represents the structure and dependencies of a React-native-webview-bridge project. It contains a package-lock.json file providing details about the module's dependencies, their exact versions, and peer dependencies required for the application. It uses packages like Babel, Rollup, and TypeScript for the development environment. It additionally has a source directory containing constants, main application logic, react, and react-native related code. The tsconfig.json handles the typescript configurations. |

</details>

<details closed><summary>Src</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                                                                                                                |
| ---                                                                                           | ---                                                                                                                                                                                                                                                                                                                    |
| [index.ts](https://github.com/cheeselemon/react-native-webview-bridge/blob/main/src/index.ts) | The code provided lays out the basic structure of the `react-native-webview-bridge` package. It imports and exports two modules: `useReactNativeWebViewBridgeForReactNative` and `useReactNativeWebViewBridgeForReact`, which likely facilitate communication between React and React Native through a Webview bridge. |

</details>

<details closed><summary>React</summary>

| File                                                                                                | Summary                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                                 | ---                                                                                                                                                                                                                                                                                                                         |
| [index.ts](https://github.com/cheeselemon/react-native-webview-bridge/blob/main/src/react/index.ts) | The code is a hook for the React Native WebView Bridge. Its core functionalities include setting up a listener for the RNWB event name on the window, handling receipt of data/query from the WebView, and ability to post messages back to it. It also gracefully cleans up the event listener when it's no longer needed. |

</details>

<details closed><summary>Constants</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                                           |
| [index.ts](https://github.com/cheeselemon/react-native-webview-bridge/blob/main/src/constants/index.ts) | The code defines a directory structure for a react-native-webview-bridge package. This package helps bridge communications between React Native and WebView. The `src/constants/index.ts` file within this structure specifically exports a constant named `RNWB_EVENT_NAME` which is used as an event identifier for messages between React Native and WebView environments. |

</details>

<details closed><summary>React-native</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                                        | ---                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [index.ts](https://github.com/cheeselemon/react-native-webview-bridge/blob/main/src/react-native/index.ts) | The code presents two main functionalities for a WebView Bridge in a React Native app: handleMessage and postMessage. handleMessage manages received messages from a React app, parsing and passing them to a provided callback function. postMessage, on the other hand, allows stringified messages to be sent to a React app or any JavaScript page via WebView's `injectJavaScript` method, triggering an event listener for rnwb:message. |

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Dependency 1`

`- ℹ️ Dependency 2`

`- ℹ️ ...`

### 🔧 Installation

1. Clone the react-native-webview-bridge repository:
```sh
git clone https://github.com/cheeselemon/react-native-webview-bridge
```

2. Change to the project directory:
```sh
cd react-native-webview-bridge
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running react-native-webview-bridge

```sh
npm run build && node dist/main.js
```

### 🧪 Tests
```sh
npm test
```

---


## 🛣 Project Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Implement Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/cheeselemon/react-native-webview-bridge/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/cheeselemon/react-native-webview-bridge/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/cheeselemon/react-native-webview-bridge/issues)**: Submit bugs found or log feature requests for CHEESELEMON.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#Top)

---

