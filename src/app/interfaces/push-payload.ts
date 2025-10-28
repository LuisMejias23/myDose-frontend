interface PushPayload {
  notification: {
    title: string;
    body: string;
  };

  [key: string]: any;
}
