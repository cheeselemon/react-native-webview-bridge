import { useEffect } from "react";
import { RNWB_EVENT_NAME } from "../constants";

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (msg: string) => void;
    };
  }
}

export default function useReactNativeWebViewBridge({
  handler,
}: {
  handler?: (eventName: string, data: any) => void;
}) {
  useEffect(() => {
    if (!handler) return;

    function handlerBridge(e: any) {
      try {
        console.log(`received message:`, e.data);
        const { eventName, data } = e.data;
        console.log(`eventName: ${eventName}, data: ${data}`);
        handler?.(eventName, data);
      } catch (err) {
        console.warn(err);
      }
    }
    console.log(`adding listener for ${RNWB_EVENT_NAME}`);
    if (window) {
      window.addEventListener(RNWB_EVENT_NAME, handlerBridge, true);
    }
    return () => {
      console.log(`removing listener for ${RNWB_EVENT_NAME}`);
      if (window) {
        window.removeEventListener(RNWB_EVENT_NAME, handlerBridge, true);
      }
    };
  }, []);

  return {
    /**
     * Posts a message to react-native-webview component
     * @param eventName string
     * @param data string or object
     */
    postMessage: (eventName: string, data: any) => {
      const msg = JSON.stringify({ eventName, data });
      window?.ReactNativeWebView?.postMessage(msg);
    },
  };
}
