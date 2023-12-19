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
  handler: (eventName: string, data: any) => void;
}) {
  useEffect(() => {
    function handlerBridge(e: any) {
      try {
        console.log(`received message: ${e.data}`);
        const { eventName, data } = e.data;
        const parsedData = JSON.parse(data);
        console.log(`eventName: ${eventName}, data: ${data}`);
        handler(eventName, parsedData);
      } catch (err) {
        console.warn(err);
      }
    }
    console.log(`adding listener for ${RNWB_EVENT_NAME}`);
    window?.addEventListener(RNWB_EVENT_NAME, handlerBridge);
    return () => {
      console.log(`removing listener for ${RNWB_EVENT_NAME}`);
      window?.removeEventListener(RNWB_EVENT_NAME, handlerBridge);
    };
  }, []);

  return {
    postMessage: (eventName: string, data: any) => {
      const msg = JSON.stringify({ eventName, data });
      window?.ReactNativeWebView?.postMessage(msg);
    },
  };
}
