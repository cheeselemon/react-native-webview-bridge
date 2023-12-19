export default function useReactNativeWebViewBridge(
  webViewRef: any,
  callbacks: { [key: string]: (data: any) => void }
) {
  return {
    handleMessage: (msg: any) => {
      try {
        const { eventName, data } = JSON.parse(msg.nativeEvent.data);
        if (callbacks[eventName]) {
          callbacks[eventName](data);
        }
      } catch (e) {}
    },
    postMessage: (eventName: string, data: any) => {
      webViewRef?.current?.postMessage(JSON.stringify({ eventName, data }));
    },
  };
}
