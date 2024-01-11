import { RNWB_EVENT_NAME } from "../constants";

export default function useReactNativeWebViewBridge(webViewRef: any) {
  return {
    /**
     * Handles messages from react app, then calls cb with eventName and data
     * @param msg react-native-webview onMessage event's raw data
     * @param cb callback function that provides eventName and data
     * @returns true if message is handled, false otherwise
     */
    handleMessage: (
      msg: any,
      cb: (eventName: string, data: any) => void
    ): boolean => {
      try {
        const { eventName, data } = JSON.parse(msg.nativeEvent.data);
        cb(eventName, data);
        return true;
      } catch (e) {
      } finally {
        return false;
      }
    },

    /**
     * Posts a message to react app or any javascript page that has event listener for "rnwb:message" (= RNWB_EVENT_NAME)
     * @param eventName any string
     * @param data any data
     */
    postMessage: (eventName: string, data: any) => {
      const msg = JSON.stringify({ eventName, data });
      if (webViewRef && webViewRef.current) {
        webViewRef.current.injectJavaScript(
          `window.dispatchEvent(new MessageEvent('${RNWB_EVENT_NAME}', { data: ${msg} }));`
        );
      }
    },
  };
}
