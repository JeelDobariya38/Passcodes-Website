import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with the Passcodes team. Report bugs, request features, or ask questions.",
};

export default function ContactPage() {
    return <ContactContent />;
}
