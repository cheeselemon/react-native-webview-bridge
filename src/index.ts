import useReactNativeWebViewBridgeForReactNative from "./react-native/index";
import useReactNativeWebViewBridgeForReact from "./react/index";
const React = useReactNativeWebViewBridgeForReact;
const ReactNative = useReactNativeWebViewBridgeForReactNative;
const useReactNativeWebviewBridge = Object.assign({}, React, ReactNative);
export default useReactNativeWebviewBridge;
