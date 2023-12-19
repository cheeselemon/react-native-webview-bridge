import useReactNativeWebViewBridgeForReactNative from "./react-native/index";
import useReactNativeWebViewBridgeForReact from "./react/index";

const React = {
  useReactNativeWebViewBridge: useReactNativeWebViewBridgeForReact,
};
const ReactNative = {
  useReactNativeWebViewBridge: useReactNativeWebViewBridgeForReactNative,
};

export default Object.assign({}, React, ReactNative);
