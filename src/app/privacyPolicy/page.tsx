import Header from "../components/header/page";
import Footer from "../components/footer/page";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="sm:p-[100px] p-[20px]">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-justify mb-6">
            At GoJuris, we are committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, and safeguard your
            personal information. By using our website and services, you agree
            to the practices described in this policy. If you do not agree with
            any part of this policy, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-lg text-justify mb-6">
            We collect personal information such as your name, email address,
            payment details, and contact information when you sign up for our
            services. Additionally, we collect usage data, including IP
            addresses, browser types, and device information, to improve user
            experience and analyze website performance.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-lg text-justify mb-6">
            Your information is used to provide, maintain, and improve our
            services, process payments, and communicate with you regarding
            updates, offers, or support. We may also use your data for internal
            analytics, marketing purposes, and to comply with legal obligations.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. Data Protection
          </h2>
          <p className="text-lg text-justify mb-6">
            We implement industry-standard security measures, including
            encryption and secure servers, to protect your data from
            unauthorized access, alteration, or disclosure. However, no method
            of transmission over the internet or electronic storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            4. Third-Party Services
          </h2>
          <p className="text-lg text-justify mb-6">
            We may use third-party services, such as payment gateways and
            analytics tools, to enhance our services. These third parties have
            their own privacy policies, and we recommend reviewing them before
            using our services. GoJuris is not responsible for the practices of
            these third-party services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies</h2>
          <p className="text-lg text-justify mb-6">
            We use cookies and similar tracking technologies to enhance user
            experience, analyze website performance, and deliver personalized
            content. You can disable cookies in your browser settings, but this
            may affect the functionality of our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            6. Data Retention
          </h2>
          <p className="text-lg text-justify mb-6">
            We retain your personal data only for as long as necessary to
            provide our services, fulfill legal obligations, or resolve
            disputes. Once your data is no longer needed, it will be securely
            deleted or anonymized.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
          <p className="text-lg text-justify mb-6">
            You have the right to access, modify, or delete your personal data
            at any time. You can also object to or restrict the processing of
            your data. To exercise these rights, please contact us at{" "}
            <a
              href="mailto:support@gojuris.com"
              className="text-blue-600 underline"
            >
              support@gojuris.com
            </a>
            . We will respond to your request within a reasonable timeframe.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            8. Changes to This Policy
          </h2>
          <p className="text-lg text-justify mb-6">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Any updates will be
            posted on this page, and your continued use of our services after
            the changes constitutes your acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            9. International Data Transfers
          </h2>
          <p className="text-lg text-justify mb-6">
            Your information may be transferred to and processed in countries
            other than your own. These countries may have different data
            protection laws. By using our services, you consent to the transfer
            of your data to these countries.
          </p> 

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            10. Children&apos; s Privacy
          </h2>
          <p className="text-lg text-justify mb-6">
            Our services are not intended for individuals under the age of 18.
            We do not knowingly collect personal information from children. If
            we become aware that we have collected data from a child, we will
            take steps to delete it immediately.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            11. Contact Information
          </h2>
          <p className="text-lg text-justify mb-6">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or your personal data, please contact us at{" "}
            <a
              href="mailto:support@gojuris.com"
              className="text-blue-600 underline"
            >
              support@gojuris.com
            </a>
            . We are committed to addressing your privacy concerns promptly and
            transparently.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
