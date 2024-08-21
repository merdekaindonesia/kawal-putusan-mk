"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

/**
 * Submit button
 *
 * @param param0
 * @returns
 */
export function SubmitButton({
  children = "Submit",
  variant = "filled",
  ...buttonProps
}: ButtonProps & { children?: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant={variant} loading={pending} {...buttonProps}>
      {children}
    </Button>
  );
}

/**
 * Back Button
 *
 * @param param0
 * @returns
 */
export function BackButton({
  children = "Back",
  variant = "light",
  confirmation = false,
  href,
  ...buttonProps
}: ButtonProps & {
  children?: React.ReactNode;
  href?: string;
  confirmation?: boolean;
}) {
  const router = useRouter();

  if (href) {
    return (
      <Button
        component={Link}
        variant="subtle"
        href={href}
        leftSection={<IconArrowLeft size={14} />}
        p={0}
        {...buttonProps}
      >
        {children}
      </Button>
    );
  } else {
    const handleClick = () => {
      if (
        confirmation &&
        !confirm("Are you sure you want to leave this page?")
      ) {
        return;
      }

      router.back();
    };

    return (
      <Button
        variant="subtle"
        leftSection={<IconArrowLeft size={14} />}
        p={0}
        onClick={handleClick}
        {...buttonProps}
      >
        {children}
      </Button>
    );
  }
}
