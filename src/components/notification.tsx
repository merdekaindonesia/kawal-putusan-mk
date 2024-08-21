"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { notificationHelper } from "@/utils/notification";

/**
 * Notification component for search params
 *
 * @returns
 */
export function SearchParamsNotification() {
  const searchParams = useSearchParams();

  const notificationType = searchParams.get("notification-type");
  const notificationMessage = searchParams.get("notification-message");
  const notificationTitle = searchParams.get("notification-title");

  useEffect(() => {
    if (notificationMessage) {
      notificationHelper({
        type: notificationType as any,
        message: notificationMessage,
        title: notificationTitle,
      });
    }
  }, [notificationMessage, notificationTitle, notificationType]);

  return <></>;
}
