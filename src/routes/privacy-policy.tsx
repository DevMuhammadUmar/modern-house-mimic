import { createFileRoute } from "@tanstack/react-router";

import { PageHero, SectionBlock } from "@/components/site/sections";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    buildHead({
      title: "Privacy Policy \u2014 Parkwood Properties",
      description:
        "How Parkwood Properties collects, uses and protects personal information submitted through this website.",
      path: "/privacy-policy",
    }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero kicker="Legal" title="Privacy Policy" />
      <SectionBlock>
        <div className="mx-auto max-w-2xl space-y-5">
          <p className="text-lg leading-relaxed text-muted-foreground">PARKWOOD PROPERTIES
Dubai, United Arab Emirates</p>
          <h2 className="display text-2xl">Privacy Policy</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Parkwood Properties (“Parkwood Properties”, “we”, “us” or “our”) respects your privacy and is committed to protecting the personal information you provide when you visit our website, contact us, or use our real estate services. This Privacy Policy explains, in simple terms, how we collect, use and protect your information.</p>
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Depending on how you interact with us, we may collect information such as your name, email address, telephone number, property address, property details, buying or renting preferences, budget and other information you provide in connection with a property enquiry or transaction.
We may also collect basic information about how you use our website, such as pages visited and general usage information, to help us improve our website and services.</p>
          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">We may use your information to:
• respond to your enquiries and provide real estate services;
• assist with the sale, purchase, rental or other property-related services you request;
• communicate with you about properties, valuations, appointments and transactions;
• send property alerts, newsletters or marketing communications where permitted;
• improve our website, services and customer experience;
• maintain appropriate business, transaction and security records; and
• comply with applicable legal and regulatory requirements.</p>
          <h2 className="text-xl font-semibold">3. Marketing Communications</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">If you choose to receive marketing communications from us, we may contact you by email, telephone or other permitted communication channels about properties, services and relevant updates. You can unsubscribe from marketing emails at any time using the unsubscribe option provided in the message, or by contacting us at admin@parkwoodproperties.ae.</p>
          <h2 className="text-xl font-semibold">4. Sharing Your Information</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">We do not sell your personal information. Where reasonably necessary to provide our services or meet legal requirements, we may share relevant information with trusted service providers, property-related professionals, portals or platforms, professional advisers, and government or regulatory authorities.
We only seek to share information that is reasonably necessary for the relevant purpose.</p>
          <h2 className="text-xl font-semibold">5. Property Listings and Public Information</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Where you instruct us to market a property, information and images you provide for a listing may be published on our website, property portals and other marketing channels used to promote the property. We will use such information for the agreed marketing purpose.</p>
          <h2 className="text-xl font-semibold">6. Cookies</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Our website may use cookies and similar technologies to keep the website functioning, remember preferences and understand how visitors use our website. Some cookies may be provided by third-party services such as analytics or advertising providers. You can manage or disable cookies through your browser settings, although some website features may not function properly.</p>
          <h2 className="text-xl font-semibold">7. Protecting and Retaining Your Information</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">We take reasonable measures to protect personal information from unauthorized access, misuse or disclosure. We keep information only for as long as reasonably necessary for the purpose for which it was collected, including where required for legal, regulatory, business or transaction-related purposes.</p>
          <h2 className="text-xl font-semibold">8. Your Rights</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Subject to applicable law, you may ask us about the personal information we hold about you and may request that inaccurate information be corrected or that your information no longer be used for certain purposes, including marketing. We may need to verify your identity before processing such requests.</p>
          <h2 className="text-xl font-semibold">9. Updates to This Policy</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">We may update this Privacy Policy from time to time to reflect changes in our services, website or applicable requirements. The latest version will be made available on our website.</p>
          <h2 className="text-xl font-semibold">10. Contact Us</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">If you have questions about this Privacy Policy, want to update your communication preferences, or wish to make a privacy-related request, please contact us:
Parkwood Properties
Dubai, United Arab Emirates
Email: admin@parkwoodproperties.ae</p>
        </div>
      </SectionBlock>
    </main>
  );
}
