import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
export type NotificationProps = {};

const Notification: React.FC<NotificationProps> = ({}: NotificationProps) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    //Set up Pusher client
    const pusher = new Pusher("ce7bc9131d7523dcc6cf", {
      cluster: "ap1",
    });

    // Subscribe to "my-channel" channel and "new_message" event
    const channel = pusher.subscribe("patecan_channel");
    channel.bind("new_activity", (data: any) => {
      console.log(data)
      const activity = data;
      const message = `${activity.subject} ${activity.conjunction1} ${activity.event} ${activity.conjunction2} ${activity.withValue} ${activity.atTime}`;
      // Add new message to messages state
      setMessages([...messages, message]);
    });

    //Clean up function
    return () => {
      // Unsubscribe from Pusher channel when component unmounts
      channel.unbind("new_message");
      pusher.unsubscribe("patecan_channel");
    };
  }, [messages]);

  return (
    <>
      <>Notification</>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </>
  );
};

export default Notification;
