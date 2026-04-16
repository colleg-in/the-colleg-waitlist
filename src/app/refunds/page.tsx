import Link from "next/link";
import Footer from "@/app/components/Footer";

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
        style={{ backgroundColor: "#51ebcb" }}
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

export default function Refunds() {
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
                REFUNDS
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
                REFUNDS &amp;
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
                CANCELLATIONS
              </p>

              {/* Accent pill — mint for this page */}
              <div
                className="mt-[24px] inline-flex items-center gap-[8px] px-[14px] py-[6px] rounded-full"
                style={{
                  background: "rgba(81,235,203,0.12)",
                  border: "1px solid rgba(81,235,203,0.3)",
                }}
              >
                <div
                  className="w-[6px] h-[6px] rounded-full"
                  style={{ backgroundColor: "#30e7c1" }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    color: "#1a9e8a",
                    textTransform: "uppercase",
                  }}
                >
                  Last updated — 16·04·2026
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
                  "Overview",
                  "Subscription Plans",
                  "Cancellation Policy",
                  "Refund Eligibility",
                  "Non-Refundable Items",
                  "How to Request",
                  "Processing Time",
                  "Exceptional Cases",
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
              {/* Overview */}
              <Section>
                <BodyText>
                  At TheCollege, we strive to deliver an exceptional experience.
                  We understand that circumstances change, and we want to be
                  transparent about our approach to refunds and cancellations.
                  This policy applies to all paid plans and purchases made
                  through our platform.
                </BodyText>
                <BodyText>
                  By subscribing to or purchasing any of our services, you
                  acknowledge and agree to the terms outlined in this policy.
                </BodyText>
              </Section>

              {/* Subscription Plans */}
              <Section>
                <SectionHeading value="Subscription Plans" />
                <BodyText>
                  TheCollege offers monthly and annual subscription plans. The
                  billing cycle begins on the date of your first payment, and
                  renewals occur automatically unless cancelled.
                </BodyText>
                <div className="flex flex-col gap-[12px] pl-[16px]">
                  <BulletItem value="Monthly plans are billed every 30 days." />
                  <BulletItem value="Annual plans are billed once per year and offer a discounted rate compared to monthly billing." />
                  <BulletItem value="You will receive an email reminder before your annual plan renews." />
                  <BulletItem value="Plan upgrades take effect immediately; plan downgrades take effect at the start of the next billing cycle." />
                </div>
              </Section>

              {/* Cancellation Policy */}
              <Section>
                <SectionHeading value="Cancellation Policy" />
                <BodyText>
                  You may cancel your subscription at any time through your
                  account settings or by contacting our support team. Upon
                  cancellation:
                </BodyText>
                <div className="flex flex-col gap-[12px] pl-[16px]">
                  <BulletItem value="Your access to paid features will continue until the end of the current billing period." />
                  <BulletItem value="No further charges will be made after the cancellation is confirmed." />
                  <BulletItem value="Cancellations must be made at least 24 hours before your next renewal date to avoid being charged for the upcoming period." />
                  <BulletItem value="You will receive a confirmation email once your cancellation is processed." />
                </div>
              </Section>

              {/* Refund Eligibility */}
              <Section>
                <SectionHeading value="Refund Eligibility" />
                <BodyText>
                  We offer refunds under the following conditions:
                </BodyText>
                <div className="flex flex-col gap-[12px] pl-[16px]">
                  <BulletItem value="New subscribers may request a full refund within 7 days of their first payment if they are not satisfied with the service." />
                  <BulletItem value="If you are charged due to a technical error or duplicate transaction, a full refund will be issued promptly." />
                  <BulletItem value="Annual subscribers who cancel within 30 days of renewal may be eligible for a prorated refund for unused months, at our discretion." />
                </div>
                <BodyText>
                  All refund requests are evaluated on a case-by-case basis.
                  Submitting a request does not guarantee approval.
                </BodyText>
              </Section>

              {/* Non-Refundable Items */}
              <Section>
                <SectionHeading value="Non-Refundable Items" />
                <BodyText>
                  The following are generally not eligible for refunds:
                </BodyText>
                <div className="flex flex-col gap-[12px] pl-[16px]">
                  <BulletItem value="Monthly subscription fees after the 7-day new subscriber window has passed." />
                  <BulletItem value="One-time purchases such as digital content, add-ons, or credits." />
                  <BulletItem value="Subscriptions cancelled after the renewal date for the current billing cycle." />
                  <BulletItem value="Accounts suspended or terminated due to a violation of our Terms and Conditions." />
                </div>
              </Section>

              {/* How to Request a Refund */}
              <Section>
                <SectionHeading value="How to Request a Refund" />
                <BodyText>
                  To submit a refund request, please contact us at{" "}
                  <a
                    href="mailto:ask@thecollege.co.in"
                    style={{
                      color: "#30e7c1",
                      borderBottom: "2px solid #30e7c1",
                      paddingBottom: "1px",
                      textDecoration: "none",
                    }}
                  >
                    ask@thecollege.co.in
                  </a>{" "}
                  with the following information:
                </BodyText>
                <div className="flex flex-col gap-[12px] pl-[16px]">
                  <BulletItem value="Your registered email address." />
                  <BulletItem value="Date of the transaction and the amount charged." />
                  <BulletItem value="Reason for the refund request." />
                  <BulletItem value="Any supporting documentation (e.g., payment receipts, screenshots)." />
                </div>
              </Section>

              {/* Processing Time */}
              <Section>
                <SectionHeading value="Processing Time" />
                <BodyText>
                  Once your refund request is received and approved, please
                  allow the following timelines:
                </BodyText>
                <div className="flex flex-col gap-[12px] pl-[16px]">
                  <BulletItem value="Review and approval: 3–5 business days." />
                  <BulletItem value="Refund to original payment method: 5–10 business days, depending on your bank or payment provider." />
                  <BulletItem value="You will be notified by email once the refund has been processed." />
                </div>
              </Section>

              {/* Exceptional Cases */}
              <Section>
                <SectionHeading value="Exceptional Cases" />
                <BodyText>
                  We recognize that unforeseen circumstances arise. If you
                  experience a medical emergency, a significant life event, or a
                  prolonged service outage on our end, please reach out to us —
                  we will review your situation with empathy and do our best to
                  find a fair resolution.
                </BodyText>
                <BodyText>
                  TheCollege reserves the right to amend this policy at any
                  time. Changes will be communicated via email or a notice on
                  our platform.
                </BodyText>
              </Section>

              {/* Contact */}
              <Section>
                <SectionHeading value="Contact Us" />
                <BodyText>
                  For any questions about this policy, please write to us at{" "}
                  <a
                    href="mailto:ask@thecollege.co.in"
                    style={{
                      color: "#30e7c1",
                      borderBottom: "2px solid #30e7c1",
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
                className="flex gap-[12px] flex-wrap"
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
                  href="/terms"
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
                  Terms &amp; Conditions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}