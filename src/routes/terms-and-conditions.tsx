import { createFileRoute } from "@tanstack/react-router";

import { PageHero, SectionBlock } from "@/components/site/sections";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Parkwood Properties" },
      {
        name: "description",
        content: "The terms governing use of the Parkwood Properties website and our property services.",
      },
      { property: "og:title", content: "Terms & Conditions — Parkwood Properties" },
      {
        property: "og:description",
        content: "Terms governing use of this website and our property services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main>
      <PageHero kicker="Legal" title="Terms &amp; Conditions" />
      <SectionBlock>
        <div className="mx-auto max-w-2xl space-y-5">
          <p className="text-lg leading-relaxed text-muted-foreground">PARKWOOD PROPERTIES<br/>Dubai, United Arab Emirates</p>
          <h1 className="text-2xl font-bold">Website Terms &amp; Conditions</h1>
          <h2 className="text-xl font-semibold">1. Acceptance of These Terms</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">By accessing or using the Parkwood Properties website, you agree to these Terms &amp; Conditions. If you do not agree with these terms, please do not use the website.</p>
          <h2 className="text-xl font-semibold">2. Website Information</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">We make reasonable efforts to keep the information on our website accurate and up to date. However, property availability, prices, specifications, photographs, descriptions and other information may change without notice. Information on the website is provided for general information and should not be treated as a guarantee, formal valuation, legal advice or financial advice. Property details should be independently verified before making any decision or entering into a transaction.</p>
          <h2 className="text-xl font-semibold">3. Property Listings and Services</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Property listings and other information displayed on the website are provided for marketing and informational purposes. A listing on our website does not guarantee that a property is available, that a transaction will proceed, or that any stated price or property detail will remain unchanged. Any sale, purchase, lease, management or other real estate transaction will be subject to separate agreements, applicable laws, approvals and the terms agreed between the relevant parties.</p>
          <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Unless otherwise stated, the content of this website, including text, photographs, graphics, logos, design and other materials, belongs to Parkwood Properties or is used with permission from the relevant rights holder. You may view, download or print material from the website for your personal, non-commercial use. You may not reproduce, modify, distribute, publish, sell or commercially use website content without our prior written permission.</p>
          <h2 className="text-xl font-semibold">5. Website Use</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">You agree to use the website lawfully and responsibly. You must not attempt to interfere with the operation or security of the website, introduce malicious software, copy website content for unauthorized commercial use, or use information obtained from the website for unlawful purposes.</p>
          <h2 className="text-xl font-semibold">6. Links to Third-Party Websites</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Our website may contain links to third‑party websites or services. These links are provided for convenience only. Parkwood Properties does not control or guarantee the content, availability, accuracy or privacy practices of third‑party websites.</p>
          <h2 className="text-xl font-semibold">7. Disclaimer and Limitation of Liability</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">To the extent permitted by applicable law, Parkwood Properties does not guarantee that the website or its content will always be accurate, complete, current, available or free from errors or interruptions. Parkwood Properties will not be responsible for losses arising solely from reliance on information published on the website, to the extent such liability may lawfully be excluded. Nothing in these Terms &amp; Conditions excludes or limits any liability that cannot legally be excluded or limited.</p>
          <h2 className="text-xl font-semibold">8. Respectful Conduct</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">We are committed to providing a professional and respectful service. Abusive, threatening, discriminatory, harassing or violent behaviour towards our employees, agents, contractors or other persons dealing with Parkwood Properties will not be tolerated. We reserve the right to restrict or refuse service where conduct is inappropriate, threatening or unlawful.</p>
          <h2 className="text-xl font-semibold">9. Complaints</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">We aim to resolve concerns fairly and promptly. If you have a complaint relating to our website or services, please contact us in writing at admin@parkwoodproperties.ae with details of the matter. We will review the complaint and respond within a reasonable time. Where a complaint relates to a regulated real estate transaction, applicable Dubai and UAE procedures and regulatory requirements may also apply.</p>
          <h2 className="text-xl font-semibold">10. Privacy</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Your use of this website is also subject to our Privacy Policy, which explains how we collect and use personal information.</p>
          <h2 className="text-xl font-semibold">11. Changes to These Terms</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">We may update these Terms &amp; Conditions from time to time. The updated version will be published on our website and will apply from the date it is posted, unless otherwise stated.</p>
          <h2 className="text-xl font-semibold">12. Governing Law and Jurisdiction</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">These Terms &amp; Conditions shall be governed by the applicable laws of the United Arab Emirates and the Emirate of Dubai. Any dispute arising from the use of this website shall be subject to the jurisdiction of the competent courts of Dubai, UAE, unless applicable law requires otherwise.</p>
          <h2 className="text-xl font-semibold">13. Contact Us</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">For questions regarding these Terms &amp; Conditions, please contact:<br/>Parkwood Properties<br/>Dubai, United Arab Emirates<br/>Email: admin@parkwoodproperties.ae</p>
        </div>
      </SectionBlock>
    </main>
  );
}
