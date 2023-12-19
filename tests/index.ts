import { useRef } from "react/cjs/react.production.min";
import {
  useReactNativeWebViewBridgeForReact,
  useReactNativeWebViewBridgeForReactNative,
} from "../dist";

function Test() {
  const webViewRef = useRef(null);
  const d = useReactNativeWebViewBridgeForReact();
  const { handleMessage, postMessage } =
    useReactNativeWebViewBridgeForReactNative(webViewRef);
}
