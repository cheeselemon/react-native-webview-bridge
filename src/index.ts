import useReactNativeWebViewBridgeForReactNative from "./react-native/index";
import useReactNativeWebViewBridgeForReact from "./react/index";
const React = {
  useReactNativeWebViewBridge: useReactNativeWebViewBridgeForReact,
};
const ReactNative = {
  useReactNativeWebViewBridge: useReactNativeWebViewBridgeForReactNative,
};
const ReactNativeWebviewBridge = Object.assign({}, React, ReactNative);
export default ReactNativeWebviewBridge;
