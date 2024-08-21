import { useEffect, useState, useCallback } from "react";
import { noop, off, on } from "./misc/util";

export type MediaDevice = {
  deviceId: string;
  groupId: string;
  kind: MediaDeviceKind;
  label: string;
};

export const useMediaDevices = () => {
  const [state, setState] = useState<MediaDevice[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const enumerateDevices = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      setState(
        devices.map(({ deviceId, groupId, kind, label }) => ({
          deviceId,
          groupId,
          kind,
          label,
        })),
      );
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Failed to enumerate devices"),
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    const onChange = () => {
      if (mounted) {
        enumerateDevices();
      }
    };

    on(navigator.mediaDevices, "devicechange", onChange);
    onChange();

    return () => {
      mounted = false;
      off(navigator.mediaDevices, "devicechange", onChange);
    };
  }, [enumerateDevices]);

  const refetch = useCallback(() => {
    enumerateDevices();
  }, [enumerateDevices]);

  return { devices: state, isLoading, error, refetch };
};
