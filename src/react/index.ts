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
        const { eventName, data } = e.data;
        console.log(`eventName: ${eventName}, data: ${data}`);
        handler(eventName, data);
      } catch (err) {
        console.warn(err);
      }
    }
    window?.addEventListener(RNWB_EVENT_NAME, handlerBridge);
    return () => {
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
