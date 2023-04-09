import React, { useState, useEffect, useLayoutEffect } from "react";
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
import { useAxios } from "../../common/useAxios";
import { EVENT_TYPE } from "../../types";

export type NotificationProps = {};

export type messageValues = {
  subject: string;
  conjunction1: string;
  event: string;
  conjunction2: string;
  withValue: string;
  atTime: string;
};

const url = "ftiles/activity/nearestActivities";

const Notification: React.FC<NotificationProps> = ({}: NotificationProps) => {
  let { apiData, loading }: any = useAxios(url);
  const [messages, setMessages] = useState<messageValues[]>([]);

  useEffect(() => {
    setMessages(apiData);
  }, [apiData]);

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
        {loading ? (
          <ActivityItem>
            <div>
              <ActivityContent>loading activities...</ActivityContent>
            </div>
          </ActivityItem>
        ) : messages ? (
          messages.map(
            (
              { subject, conjunction1, event, conjunction2, withValue, atTime },
              index
            ) => (
              <ActivityItem key={index}>
                <div>
                  <ActivityImage
                    style={{
                      backgroundColor:
                        event === EVENT_TYPE.SELL ? "#F9E2AF" : "#C7E9B0",
                    }}
                  />
                </div>
                <div>
                  <ActivityContent>
                    <MessageBoldText>{subject}</MessageBoldText>
                    <MessageText>{conjunction1}</MessageText>
                    <MessageBoldText>{event}</MessageBoldText>
                    <MessageText>{conjunction2} giá</MessageText>
                    <MessageBoldText>{withValue}</MessageBoldText>
                  </ActivityContent>
                  <MessageTime>{atTime}</MessageTime>
                </div>
              </ActivityItem>
            )
          )
        ) : null}
      </ActivityContainer>
    </div>
  );
};

export default Notification;
