export default function useReactNativeWebViewBridge(webViewRef: any) {
  return {
    handleMessage: (msg: any, cb: (eventName: string, data: any) => void) => {
      try {
        const { eventName, data } = JSON.parse(msg.nativeEvent.data);
        cb(eventName, data);
      } catch (e) {}
    },
    postMessage: (eventName: string, data: any) => {
      webViewRef?.current?.postMessage(JSON.stringify({ eventName, data }));
    },
  };
}
