import { Container } from "./style";

export interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  title: string;
}

export function Button({ variant, title }: ButtonProps) {
  return (
    <Container>
      <Button title={title} variant={variant} />
    </Container>
  );
}
