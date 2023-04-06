import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import {
  ActivityContainer,
  ActivityContent,
  ActivityHeaderContainer,
  ActivityImage,
  ActivityItem,
  MessageBoldText,
  MessageText,
  MessageTime,
} from "./Notification.style";

export type NotificationProps = {};

export type messageValues = {
  subject: string;
  conjunction1: string;
  event: string;
  conjunction2: string;
  withValue: string;
  atTime: string;
};

const Notification: React.FC<NotificationProps> = ({}: NotificationProps) => {
  const initialValue: messageValues = {
    subject: "L",
    conjunction1: "Đã",
    event: "bán hàng trắng",
    conjunction2: "với",
    withValue: "99999",
    atTime: "29/03/2023",
  };
  const [messages, setMessages] = useState<messageValues[]>([
    initialValue,
    initialValue,
  ]);

  useEffect(() => {
    //Set up Pusher client
    const pusher = new Pusher("ce7bc9131d7523dcc6cf", {
      cluster: "ap1",
    });

    // Subscribe to "my-channel" channel and "new_message" event
    const channel = pusher.subscribe("patecan_channel");
    channel.bind("new_activity", (data: messageValues) => {
      console.log(data);
      const activity = data;
      const message: messageValues = {
        subject: activity.subject,
        conjunction1: activity.conjunction1,
        event: activity.event,
        conjunction2: activity.conjunction2,
        withValue: activity.withValue,
        atTime: activity.atTime,
      };
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
    <div className="notification">
      <ActivityHeaderContainer>Thông báo</ActivityHeaderContainer>
      <ActivityContainer>
        {messages.map(
          (
            { subject, conjunction1, event, conjunction2, withValue, atTime },
            index
          ) => (
            <ActivityItem key={index}>
              <div>
                <ActivityImage src="" className="user__img" />
              </div>
              <div>
                <ActivityContent className="notification__item">
                  <MessageBoldText className="bold_text">
                    {subject}
                  </MessageBoldText>
                  <MessageText>{conjunction1}</MessageText>
                  <MessageBoldText className="bold_text">
                    {event}
                  </MessageBoldText>
                  <MessageText>{conjunction2} giá</MessageText>
                  <MessageBoldText className="bold_text">
                    {withValue}
                  </MessageBoldText>
                </ActivityContent>
                <MessageTime className="notification__time">
                  {atTime}
                </MessageTime>
              </div>
            </ActivityItem>
          )
        )}
      </ActivityContainer>
    </div>
  );
};

export default Notification;
