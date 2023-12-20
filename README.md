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

## 📍 Overview

react-native-webview-bridge provides effective communication between React and React Native App using react-native-webview. It acts like a message broker and enables message exchange, making applications more interactive and dynamic.

You don't need to implment yourself such as event listener setup, message handling and posting across different application components, react-native-webview-bridge will do it for you.

---

## 🚀 Getting Started

### Installation

Add to your react or react-native project by running the following command:

```
npm i react-native-webview-bridge --save
```

Or if you're using yarn:

```
yarn add react-native-webview-bridge
```

### Usage

**React Application**

Basic usage inside your React component:

```javascript
import { useReactNativeWebViewBridgeForReact } from "@cheeselemon/react-native-webview-bridge";

function MyComponent() {
  const { postMessage } = useReactNativeWebViewBridgeForReact({
    handler: (eventName: string, data: any) => {
      // handle published event from react-native app
    },
  });

  // post message to react-native app
  const handleClick = () => {
    postMessage("eventName", { data: "string or object" });
  };
}
```

Note that when handler is defined, the hook will automatically listen to messages from react-native app and call the handler function with the event name and data. The underlying hook will also automatically add event listener to the window object.

There may be circumstances where you only want to publish events to react-native app and not listen to events from react-native app. In this case, you can omit the handler function:

```javascript
const { postMessage } = useReactNativeWebViewBridgeForReact({});
```

Or if you only want to listen to events from react-native app and not publish events to react-native app, you can omit the postMessage function:

```javascript
useReactNativeWebViewBridgeForReact({
  handler: (eventName: string, data: any) => {
    // handle published event from react-native app
  },
});
```

**React Native Application**

Basic usage inside your React Native component:

```javascript
import WebView from 'react-native-webview';
import { useReactNativeWebViewBridgeForReactNative } from "@cheeselemon/react-native-webview-bridge";

function MyComponent() {
  const webViewRef = useRef<WebView>(null);
  // needs reference to webview for postMessage
  const { postMessage, handleMessage } = useReactNativeWebViewBridgeForReactNative(webviewRef);

  // post message to react app
  const handleClick = () => {
    postMessage("eventName", { data: "string or object" });
  };

  
  return <WebView
    ref={webViewRef}
    onMessage={(event) => {
      // pass event object directly for processing
      handleMessage(event, (eventName: string, data: any) => {
        // handle published event from react app here
      });

      // it is possible to handle other events that are not published by this library.
      const { data } = event.nativeEvent; // do whatever you want
    }}
  />
}

```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/cheeselemon/react-native-webview-bridge/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/cheeselemon/react-native-webview-bridge/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/cheeselemon/react-native-webview-bridge/issues)**: Submit bugs found or log feature requests for CHEESELEMON.

#### _Contributing Guidelines_

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

MIT License

Copyright (c) 2023 cheeselemon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[**Return**](#Top)

---
