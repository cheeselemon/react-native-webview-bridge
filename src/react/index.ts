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
        const { eventName, data } = JSON.parse(e.data);
        console.log(`eventName: ${eventName}, data: ${data}`);
        handler(eventName, data);
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
