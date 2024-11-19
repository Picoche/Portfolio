import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { ContactFormData } from "@/lib/validations/contact";

interface ContactEmailProps extends ContactFormData {
  timestamp: string;
}

export default function ContactEmail({
  name,
  email,
  subject,
  message,
  timestamp,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Subject:</strong> {subject}
            </Text>
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Text style={messageText}>{message}</Text>
            <Text style={timestampText}>Submitted at: {timestamp}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.25",
  marginBottom: "24px",
  textAlign: "center" as const,
};

const section = {
  padding: "24px",
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  marginBottom: "12px",
};

const messageText = {
  ...text,
  margin: "16px 0",
  padding: "12px",
  backgroundColor: "#f9fafb",
  borderRadius: "4px",
};

const timestampText = {
  color: "#6b7280",
  fontSize: "14px",
  marginTop: "24px",
};
