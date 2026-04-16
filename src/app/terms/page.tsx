import Link from "next/link";

function Section({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-[20px]">{children}</div>;
}

function SectionHeading({ value }: { value: string }) {
  return (
    <h2
      className="privacy-header"
      style={{
        fontSize: "32px",
        lineHeight: "36px",
        letterSpacing: "-1px",
        fontWeight: 650,
      }}
    >
      {value}
    </h2>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "17px",
        lineHeight: "27px",
        fontWeight: 400,
        letterSpacing: "-0.2px",
        color: "#3a4250",
      }}
    >
      {children}
    </p>
  );
}

function BulletItem({ value }: { value: string }) {
  return (
    <div className="relative pl-[20px]">
      <div
        className="absolute left-0 top-[10px] w-[7px] h-[7px] rounded-full"
        style={{ backgroundColor: "#ff914d" }}
      />
      <p
        style={{
          fontSize: "17px",
          lineHeight: "27px",
          fontWeight: 400,
          letterSpacing: "-0.2px",
          color: "#3a4250",
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default function Terms() {
  return (
    <>
      <div
        className="mt-[70px]"
        style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}
      >
        <div className="max-w-[1750px] mx-auto">
          {/* Hero header */}
          <div className="relative overflow-hidden">
            {/* Ghost text background */}
            <div
              className="absolute top-0 left-0 pt-[40px] pl-[120px] pointer-events-none select-none max-[855px]:pl-[60px] max-[501px]:pl-[16px]"
              aria-hidden="true"
            >
              <p
                className="privacy-header"
                style={{
                  fontSize: "clamp(80px, 18vw, 260px)",
                  lineHeight: 1,
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  color: "rgba(255,255,255,0.55)",
                  whiteSpace: "nowrap",
                }}
              >
                TERMS
              </p>
            </div>

            {/* Foreground title + back button */}
            <div
              className="relative z-10 pt-[80px] pb-[60px] pl-[140px] max-[1040px]:pl-[32px] max-[501px]:pl-[16px] pr-[40px]"
              style={{ minHeight: "220px" }}
            >
              {/* Back button */}
              <Link
                href="/privacy"
                className="inline-flex items-center gap-[8px] mb-[32px] group"
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "#697791",
                  letterSpacing: "-0.2px",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                >
                  <path
                    d="M10 3L5 8L10 13"
                    stroke="#697791"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to Privacy Policy
              </Link>

              <p
                className="privacy-header"
                style={{
                  fontSize: "clamp(48px, 8vw, 100px)",
                  lineHeight: 1,
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  color: "#1a1e25",
                  display: "block",
                }}
              >
                TERMS &amp;
              </p>
              <p
                className="privacy-header"
                style={{
                  fontSize: "clamp(48px, 8vw, 100px)",
                  lineHeight: 1,
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  color: "#1a1e25",
                  display: "block",
                  marginTop: "4px",
                }}
              >
                CONDITIONS
              </p>

              {/* Accent pill */}
              <div
                className="mt-[24px] inline-flex items-center gap-[8px] px-[14px] py-[6px] rounded-full"
                style={{
                  background: "rgba(255,145,77,0.1)",
                  border: "1px solid rgba(255,145,77,0.25)",
                }}
              >
                <div
                  className="w-[6px] h-[6px] rounded-full"
                  style={{ backgroundColor: "#ff914d" }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    color: "#ff914d",
                    textTransform: "uppercase",
                  }}
                >
                  Last updated — 2026
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="mx-[140px] max-[1040px]:mx-[32px] max-[501px]:mx-[16px]"
            style={{ height: "1px", backgroundColor: "rgba(26,30,37,0.1)" }}
          />

          {/* Content area */}
          <div className="flex gap-[80px] max-[1000px]:flex-col max-[1000px]:gap-0 pb-[160px]">
            {/* Sticky sidebar TOC */}
            <div
              className="pt-[60px] pl-[140px] max-[1040px]:pl-[32px] max-[501px]:pl-[16px] max-[1000px]:pb-[0px] flex-shrink-0"
              style={{ width: "260px" }}
            >
              <div
                className="sticky top-[100px] flex flex-col gap-[12px] max-[1000px]:hidden"
                aria-label="Table of contents"
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                    color: "#697791",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  Contents
                </p>
                {[
                  "Introduction",
                  "Use of Service",
                  "User Accounts",
                  "Subscriptions",
                  "Content & IP",
                  "Prohibited Use",
                  "Disclaimers",
                  "Limitation of Liability",
                  "Governing Law",
                  "Contact",
                ].map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 450,
                      color: "#59667b",
                      letterSpacing: "-0.2px",
                      cursor: "default",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div
              className="pt-[60px] pr-[140px] max-[1250px]:pr-[60px] max-[1000px]:px-[32px] max-[501px]:px-[16px] flex flex-col"
              style={{ gap: "64px", flex: 1, maxWidth: "740px" }}
            >
              {/* Introduction */}
              <Section>
                <BodyText>
                  Welcome to TheCollege. By accessing or using our website,
                  mobile application, or any services provided by AZB Labs
                  Private Limited ("TheCollege", "we", "our", or "us"), you
                  agree to be bound by these Terms and Conditions. Please read
                  them carefully before using our platform.
                </BodyText>
                <BodyText>
                  If you do not agree to these terms, please do not access or
                  use our services.
                </BodyText>
              </Section>

              {/* Use of Service */}
              <Section>
                <SectionHeading value="Use of Service" />
                <BodyText>
                  TheCollege provides an all-in-one community platform for
                  students, educators, and institutions. You agree to use the
                  platform only for lawful purposes and in a manner that does
                  not infringe the rights of others or restrict their use and
                  enjoyment.
                </BodyText>
                <div className="flex flex-col gap-[12px] pl-[16px]">
                  <BulletItem value="You must be at least 18 years of age to use our services." />
                  <BulletItem value="You are responsible for maintaining the confidentiality of your account." />
                  <BulletItem value="You agree not to misrepresent your identity or affiliation." />
                  <BulletItem value="Automated access, scraping, or data mining is strictly prohibited without prior written consent." />
                </div>
              </Section>

              {/* User Accounts */}
              <Section>
                <SectionHeading value="User Accounts" />
                <BodyText>
                  To access certain features of TheCollege, you may be required
                  to create an account. You are responsible for all activity
                  that occurs under your account. You agree to provide accurate,
                  current, and complete information during registration, and to
                  update such information to keep it accurate and complete.
                </BodyText>
                <BodyText>
                  We reserve the right to suspend or terminate accounts that
                  violate these Terms, engage in fraudulent activity, or are
                  found to be inactive for extended periods.
                </BodyText>
              </Section>

              {/* Subscriptions & Payments */}
              <Section>
                <SectionHeading value="Subscriptions & Payments" />
                <BodyText>
                  Certain features of our platform may require payment or a
                  subscription. All fees are stated in Indian Rupees (INR)
                  unless otherwise specified, and are inclusive of applicable
                  taxes.
                </BodyText>
                <div className="flex flex-col gap-[12px] pl-[16px]">
                  <BulletItem value="Subscription fees are billed in advance on a monthly or annual basis." />
                  <BulletItem value="All payments are processed through secure, third-party payment gateways." />
                  <BulletItem value="You authorize us to charge your selected payment method for all fees." />
                  <BulletItem value="Prices are subject to change with 30 days' advance notice." />
                </div>
                <BodyText>
                  For information about refunds and cancellations, please review
                  our{" "}
                  <Link
                    href="/refunds"
                    style={{
                      color: "#ff914d",
                      borderBottom: "2px solid #ff914d",
                      paddingBottom: "1px",
                      textDecoration: "none",
                    }}
                  >
                    Refunds & Cancellations Policy
                  </Link>
                  .
                </BodyText>
              </Section>

              {/* Content & Intellectual Property */}
              <Section>
                <SectionHeading value="Content & Intellectual Property" />
                <BodyText>
                  All content on TheCollege — including but not limited to text,
                  graphics, logos, icons, images, audio, and software — is the
                  property of AZB Labs Private Limited and is protected by
                  applicable intellectual property laws.
                </BodyText>
                <div className="flex flex-col gap-[12px] pl-[16px]">
                  <BulletItem value="You may not reproduce, distribute, or create derivative works without explicit written permission." />
                  <BulletItem value="You retain ownership of content you submit, but grant us a non-exclusive licence to use it for service improvement." />
                  <BulletItem value="You are solely responsible for content you post, and it must not violate any applicable law." />
                </div>
              </Section>

              {/* Prohibited Use */}
              <Section>
                <SectionHeading value="Prohibited Use" />
                <BodyText>You agree not to:</BodyText>
                <div className="flex flex-col gap-[12px] pl-[16px]">
                  <BulletItem value="Use the platform to harass, bully, or intimidate other users." />
                  <BulletItem value="Post or transmit any unlawful, harmful, threatening, or defamatory content." />
                  <BulletItem value="Attempt to gain unauthorized access to any part of the service." />
                  <BulletItem value="Use the platform for any commercial solicitation without our written approval." />
                  <BulletItem value="Introduce viruses, malware, or any other malicious code." />
                </div>
              </Section>

              {/* Disclaimers */}
              <Section>
                <SectionHeading value="Disclaimers" />
                <BodyText>
                  TheCollege is provided on an "as is" and "as available" basis.
                  We make no warranties, express or implied, regarding the
                  accuracy, completeness, or reliability of any content on the
                  platform. We do not warrant that the service will be
                  uninterrupted, error-free, or free of viruses.
                </BodyText>
                <BodyText>
                  We reserve the right to modify, suspend, or discontinue any
                  part of the service at any time without prior notice.
                </BodyText>
              </Section>

              {/* Limitation of Liability */}
              <Section>
                <SectionHeading value="Limitation of Liability" />
                <BodyText>
                  To the maximum extent permitted by applicable law, AZB Labs
                  Private Limited shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages
                  arising from your use of the service, even if we have been
                  advised of the possibility of such damages.
                </BodyText>
                <BodyText>
                  Our total liability to you for any claim arising from these
                  Terms shall not exceed the amount paid by you to TheCollege in
                  the three months preceding the claim.
                </BodyText>
              </Section>

              {/* Governing Law */}
              <Section>
                <SectionHeading value="Governing Law" />
                <BodyText>
                  These Terms shall be governed by and construed in accordance
                  with the laws of India. Any disputes arising from these Terms
                  shall be subject to the exclusive jurisdiction of the courts
                  of Chennai, Tamil Nadu.
                </BodyText>
                <BodyText>
                  We reserve the right to update these Terms at any time. We
                  will notify users of significant changes via email or a
                  prominent notice on our website.
                </BodyText>
              </Section>

              {/* Contact */}
              <Section>
                <SectionHeading value="Contact Us" />
                <BodyText>
                  If you have any questions about these Terms, please reach out
                  to us at{" "}
                  <a
                    href="mailto:ask@thecollege.co.in"
                    style={{
                      color: "#51ebcb",
                      borderBottom: "2px solid #51ebcb",
                      paddingBottom: "1px",
                      textDecoration: "none",
                    }}
                  >
                    ask@thecollege.co.in
                  </a>
                  .
                </BodyText>
                <BodyText>
                  AZB Labs Private Limited,
                  <br />
                  Innov8 Millenia, Floor-2,
                  <br />
                  RMZ Millenia Business Park,
                  <br />
                  Perungudi, Saidapet,
                  <br />
                  Kanchipuram, Tamil Nadu 600096.
                </BodyText>
              </Section>

              {/* Bottom nav */}
              <div
                className="flex gap-[12px] flex-wrap pt-[16px]"
                style={{
                  borderTop: "1px solid rgba(26,30,37,0.1)",
                  paddingTop: "40px",
                }}
              >
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-[8px] px-[20px] py-[10px] rounded-full bg-white border"
                  style={{
                    borderColor: "rgba(105,119,145,0.4)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#3a4250",
                    textDecoration: "none",
                    letterSpacing: "-0.2px",
                  }}
                >
                  ← Privacy Policy
                </Link>
                <Link
                  href="/refunds"
                  className="inline-flex items-center gap-[8px] px-[20px] py-[10px] rounded-full bg-white border"
                  style={{
                    borderColor: "rgba(105,119,145,0.4)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#3a4250",
                    textDecoration: "none",
                    letterSpacing: "-0.2px",
                  }}
                >
                  Refunds &amp; Cancellations →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}