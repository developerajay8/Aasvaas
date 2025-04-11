import Header from "../components/header/page";
import Footer from "../components/footer/page";

export default function Page() {
  return (
    <div>
      <Header /> 
      <div className="sm:p-[100px] p-[20px]">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Terms of Use</h1>
          <p className="text-lg text-justify mb-6">
            Welcome to GoJuris. By accessing and using our website and services,
            you agree to comply with and be bound by the following terms and
            conditions. Please read these terms carefully before using our
            services. If you do not agree with any part of these terms, you must
            not use our website or services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-lg text-justify mb-6">
            By using our services, you acknowledge that you have read,
            understood, and agreed to these terms. If you do not agree to these
            terms, please do not use our website or services. Your continued use
            of the website and services constitutes your acceptance of any
            changes or updates to these terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. Use of Services
          </h2>
          <p className="text-lg text-justify mb-6">
            Our AI-powered legal assistant provides research-based information
            and tools to assist with legal inquiries. However, the information
            provided does not constitute legal advice, nor does it create an
            attorney-client relationship. Users should consult qualified legal
            professionals for specific legal matters. GoJuris is not responsible
            for any actions taken based on the information provided by our
            services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. Account Registration
          </h2>
          <p className="text-lg text-justify mb-6">
            To access certain features of our services, you may be required to
            register an account. You agree to provide accurate, current, and
            complete information during the registration process and to update
            such information to keep it accurate, current, and complete. You are
            responsible for maintaining the confidentiality of your account and
            password and for restricting access to your account. You agree to
            accept responsibility for all activities that occur under your
            account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            4. Payment and Subscription
          </h2>
          <p className="text-lg text-justify mb-6">
            GoJuris offers certain paid services that may be billed on a
            subscription basis. By subscribing to these services, you agree to
            pay the applicable fees and authorize us to charge your designated
            payment method on a recurring basis. You are responsible for
            providing accurate payment information and ensuring that your
            payment method is valid and up-to-date. Failure to pay may result in
            the suspension or termination of your access to the services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Refund Policy</h2>
          <p className="text-lg text-justify mb-6">
            Payments made for our services are generally non-refundable.
            However, if you believe you are entitled to a refund, please review
            our Refund Policy or contact our support team at
            support@gojuris.com. Refunds, if applicable, will be issued at the
            sole discretion of GoJuris.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            6. Intellectual Property
          </h2>
          <p className="text-lg text-justify mb-6">
            All content, trademarks, logos, and technology displayed on this
            website are the property of GoJuris or its licensors and are
            protected by intellectual property laws. Unauthorized reproduction,
            distribution, or use of any content or technology on this website is
            strictly prohibited. You may not use, copy, modify, or distribute
            any content without the express written consent of GoJuris.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination</h2>
          <p className="text-lg text-justify mb-6">
            GoJuris reserves the right to suspend or terminate your account and
            access to our services at any time, without notice, for any reason,
            including but not limited to violations of these terms, misuse of
            our services, or fraudulent activity. Upon termination, your right
            to use the services will immediately cease, and you must cease all
            use of the services and any content obtained through them.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            8. Changes to Terms
          </h2>
          <p className="text-lg text-justify mb-6">
            GoJuris reserves the right to modify or update these terms at any
            time. Any changes will be effective immediately upon posting on our
            website. Your continued use of our services after any changes
            constitutes your acceptance of the revised terms. We encourage you
            to review these terms periodically to stay informed about any
            updates.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            9. Limitation of Liability
          </h2>
          <p className="text-lg text-justify mb-6">
            To the fullest extent permitted by law, GoJuris shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, whether incurred
            directly or indirectly, or any loss of data, use, goodwill, or other
            intangible losses resulting from (a) your use or inability to use
            our services; (b) any unauthorized access to or use of our servers
            and/or any personal information stored therein; or (c) any errors or
            omissions in any content or for any loss or damage incurred as a
            result of the use of any content posted, emailed, transmitted, or
            otherwise made available through the services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            10. Governing Law
          </h2>
          <p className="text-lg text-justify mb-6">
            These terms and your use of our services are governed by and
            construed in accordance with the laws of the jurisdiction in which
            GoJuris operates. Any disputes arising out of or relating to these
            terms or the services shall be resolved exclusively in the courts of
            that jurisdiction.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            11. Contact Information
          </h2>
          <p className="text-lg text-justify mb-6">
            If you have any questions or concerns about these terms or our
            services, please contact us at{" "}
            <a
              href="mailto:support@gojuris.com"
              className="text-blue-600 underline"
            >
              support@gojuris.com
            </a>
            . We are here to assist you and ensure that your experience with
            GoJuris is positive and productive.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
