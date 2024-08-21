"use client";

import { notifications } from "@mantine/notifications";
import { IconCheck, IconX, IconExclamationMark } from "@tabler/icons-react";
import { ReactNode } from "react";

/**
 * Notification helper
 *
 * @returns
 */
export function notificationHelper({
  type = "info",
  message,
  title,
  callback,
}: {
  type: "success" | "error" | "info" | "warning";
  message: ReactNode;
  title?: ReactNode;
  callback?: () => void;
}) {
  let icon: ReactNode = <></>;
  let color = "";

  switch (type) {
    case "success":
      icon = <IconCheck />;
      color = "green";
      title = title ?? "Success";
      break;

    case "error":
      icon = <IconX />;
      color = "red";
      title = title ?? "Error";
      break;

    case "warning":
      icon = <IconExclamationMark />;
      color = "yellow";
      title = title ?? "Warning";
      break;

    case "info":
    default:
      color = "blue";
      title = title ?? "Info";
      break;
  }

  notifications.show({
    title,
    message,
    color,
    icon,
  });

  if (callback) {
    callback();
  }
}

export function formStateNotificationHelper(
  state:
    | {
        error: {
          general: ReactNode;
        };
        message?: undefined;
      }
    | {
        message: ReactNode;
        error?: undefined;
      }
    | undefined,
  successCallback?: () => void,
) {
  if (state?.error?.general) {
    notificationHelper({
      type: "error",
      message: state.error.general,
    });
  }

  if (state?.message) {
    notificationHelper({
      type: "success",
      message: state.message,
    });

    successCallback && successCallback();
  }
}
