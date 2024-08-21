import { Container, rem, type ContainerProps } from "@mantine/core";
import { cn } from "@/utils/styling";

export function DefaultContainer({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <Container
      size={rem(1440)}
      className={cn("p-4 bg-white rounded-sm", className)}
      {...props}
    >
      {children}
    </Container>
  );
}
