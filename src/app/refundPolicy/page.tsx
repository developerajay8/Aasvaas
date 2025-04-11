import Header from "../components/header/page";
import Footer from "../components/footer/page";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="sm:p-[100px] p-[20px]">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Refund Policy</h1>
          <p className="text-lg text-justify mb-6">
            At GoJuris, we offer subscription-based services for legal research
            and AI-powered assistance. This Refund Policy outlines our
            guidelines regarding refunds, cancellations, and payment-related
            issues. Please read this policy carefully before subscribing to our
            services. By using our services, you agree to the terms outlined
            below.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            1. No Refund Policy
          </h2>
          <p className="text-lg text-justify mb-6">
            All payments made for our subscription plans are non-refundable.
            Once a subscription is purchased, we do not offer refunds,
            cancellations, or partial reimbursements under any circumstances.
            This includes but is not limited to unused portions of the
            subscription, user dissatisfaction, or accidental purchases.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. Subscription Cancellation
          </h2>
          <p className="text-lg text-justify mb-6">
            Users may cancel their subscription at any time. However, the
            cancellation will only stop future billing cycles. No refunds will
            be issued for the remaining duration of an active subscription. To
            cancel your subscription, please visit your account settings or
            contact our support team at{" "}
            <a
              href="mailto:support@gojuris.com"
              className="text-blue-600 underline"
            >
              support@gojuris.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. Exceptional Cases
          </h2>
          <p className="text-lg text-justify mb-6">
            In rare cases, such as duplicate payments or technical errors during
            the payment process, users may request a review of their case. If
            you believe you are eligible for a refund due to a payment error,
            please contact our support team at{" "}
            <a
              href="mailto:support@gojuris.com"
              className="text-blue-600 underline"
            >
              support@gojuris.com
            </a>{" "}
            within 7 days of the transaction. All requests will be reviewed at
            our sole discretion, and refunds, if approved, will be processed
            within 14 business days.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            4. Changes to This Policy
          </h2>
          <p className="text-lg text-justify mb-6">
            GoJuris reserves the right to modify this Refund Policy at any time.
            Any changes will be updated on this page, and your continued use of
            our services after the changes constitutes your acceptance of the
            updated policy. We recommend reviewing this policy periodically to
            stay informed about any updates.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            5. Contact Information
          </h2>
          <p className="text-lg text-justify mb-6">
            If you have any questions or concerns regarding this Refund Policy
            or need assistance with a payment-related issue, please contact us
            at{" "}
            <a
              href="mailto:support@gojuris.com"
              className="text-blue-600 underline"
            >
              support@gojuris.com
            </a>
            . Our support team is available to assist you and will respond to
            your inquiry within 24-48 hours.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
