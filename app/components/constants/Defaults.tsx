import { ReturnAddress, ContactDetails, ShippingRates } from "./Legal";
import { brand } from "./Texts";
import { Cart } from "./Types";

export const emptyCart: Cart = {
  products: [],
};

export const ReturnPolicy = () => {
  return (
    <>
      <b>Published on: 01/01/2024</b>
      <br />
      <br />
      <b>Returns</b>
      <br />
      All returns must be postmarked within 14 days of the purchase date. All
      returned items must be in new and unused condition, with all original tags
      and labels attached.
      <br />
      <br />
      <b>Return Process</b>
      <br />
      To return an item, place the item securely in its original packaging, and
      mail your return to the following address:
      <br />
      {brand}
      <br />
      <ReturnAddress />
      <br />
      Please note that you will be responsible for all return shipping charges.
      We strongly recommend that you use a trackable method to mail your return
      <br />
      <br />
      <b>Refunds</b>
      <br />
      After receiving your return and inspecting the condition of your item, we
      will process your return or exchange.
      <br />
      Please allow at least seven (7) days from the receipt of your item to
      process your return or exchange.
      <br />
      <br />
      <b>Exceptions</b>
      <br />
      For defective or damaged products, please contact us at the contact
      details below to arrange a refund or exchange.
      <br />
      <br />
      <b>Questions</b>
      <br />
      If you have any questions concerning our return policy, please contact us
      at:
      <br />
      <ContactDetails />
      <br />
    </>
  );
};

export const CookiesPolicy = () => {
  return (
    <>
      At {brand}, we use cookies to enhance your browsing experience and improve
      the functionality of our website. Cookies are small text files that are
      stored on your device when you visit a website. They help us analyze
      website traffic, personalize content, and provide targeted advertisements.
      <br />
      By using our website, you consent to the use of cookies in accordance with
      this Cookies Policy. You can control and manage cookies through your
      browser settings. However, please note that disabling cookies may affect
      the functionality of our website.
      <br />
      We do not use cookies to collect personally identifiable information
      unless you explicitly provide it to us. We do not sell or share cookie
      data with third parties.
      <br />
      This Cookies Policy may be updated from time to time. Any changes will be
      posted on this page, so please review it periodically for updates.
      <br />
      If you have any questions concerning our return policy, please contact us
      at:
      <br />
      <ContactDetails />
      <br />{" "}
    </>
  );
};

export const ShippingPolicy = () => {
  return (
    <>
      <b>Published on: 01/01/2024</b>
      <br />
      <br />
      Please carefully review our Shipping & Delivery Policy
      <br />
      <br />
      <b>Shipping & Delivery Options</b>
      <br />
      We offer various shipping options.
      <br />
      <br />
      <b>Shipping Fees</b>
      <br />
      We offer shipping at the following rates:
      <br />
      <ShippingRates />
      <br />
      At all times and dates given for delivery of the products are given in
      good faith but are estimate only. <br />
      <br />
      For EU and UK consumers: This does not affect your statutory rights.
      Unless specifically noted, estimated delivery times reflect the earliest
      available delivery, and deliveries will be ,ade within 30 days after the
      day we accept yuour order. For more information please refer to our Terms.
      <br />
      <br />
      <b>Do you deliver internationally?</b>
      <br />
      We offer worldwide shipping. <br />
      Please note, we may be subject to various rules and restrictions in
      relation to some international deliveries and you may be subject to
      additional taxes and duties over which we have not control. If such cases
      apply, you are responsible for complying with the laws applicoable to the
      country where you live and will be responsible for any such additional
      costs or taxes.
      <br />
      <br />
      <b>What happens if my order is delayed?</b>
      <br />
      If delivery is delayed for any reason we will let you know as soon as
      possible and will advise you of a revised estimated date for delivery.
      <br />
      For EU and UK consumers: This does not affect your statutory rights.
      Unless specifically noted, estimated delivery times reflect the earliest
      available delivery, and deliveries will be ,ade within 30 days after the
      day we accept yuour order. For more information please refer to our Terms.
      <br />
      <b>Questions about returns?</b>
      <br />
      If you have any questions about returns, please review our Return Policy.
      <br />
      <b>Questions</b>
      <br />
      If you have any questions concerning our return policy, please contact us
      at:
      <br />
      <ContactDetails />
      <br />
    </>
  );
};

export const EulaPolicy = () => {
  return (
    <>
      <b>Published on: 01/01/2024</b>
      <br />
      <br />
      <b>{brand} End User License Agreement (EULA)</b>
      <br />
      This End User License Agreement is a legal agreement between you and{" "}
      {brand}/We/Company for the use of {brand} services and products.
      <br />
      <br />
      By accessing or using {brand} services and products, you agree to be bound
      by the terms and conditions of this Agreement. If you do not agree to the
      terms of this Agreement, do not use {brand} services and products.
      <br />
      <b>1. License Grant</b>
      <br />
      Subject to the terms and conditions of this Agreement, {brand} grants you
      a non-exclusive, non-transferable, limited license to use {brand} services
      and products for your personal, non-commercial use.
      <br />
      <b>2. Restrictions</b>
      <br />
      You may not:
      <br />
      Modify, adapt, translate, reverse engineer, decompile, or disassemble{" "}
      {brand} services and products. Use {brand} services and products for any
      illegal or unauthorized purpose. Remove any copyright, trademark, or other
      proprietary rights notices from {brand} services and products. Share your
      account credentials with third parties.
      <br />
      <b>3. Intellectual Property Rights</b>
      <br />
      {brand} retains all intellectual property rights in and to its services
      and products. This Agreement does not grant you any rights to use {brand}{" "}
      trademarks, logos, or other brand elements.
      <br />
      <b>4. Termination</b>
      <br />
      This Agreement is effective until terminated. {brand} may terminate this
      Agreement at any time without notice if you breach any of its terms. Upon
      termination, you must cease all use of {brand} services and products.
      <br />
      <b>5. Disclaimer of Warranties</b>
      <br />
      {brand} services and products are provided as is and as available without
      warranties of any kind, express or implied. We do not warrant that {brand}{" "}
      services and products will be uninterrupted or error-free.
      <br />
      <b>6. Limitation of Liability</b>
      <br />
      In no event shall {brand} be liable for any indirect, incidental, special,
      consequential, or punitive damages, including but not limited to loss of
      profits, data, or goodwill, arising out of or in connection with this
      Agreement or the use of {brand} services and products.
      <br />
      <b>7. Governing Law</b>
      <br />
      This Agreement shall be governed by and construed in accordance with the
      laws of [Your Country], without regard to its conflict of law principles.
      <br />
      <b>8. Changes to this Agreement</b>
      <br />
      {brand} reserves the right to modify or update this Agreement at any time.
      You are responsible for reviewing this Agreement periodically for changes.
      Your continued use of {brand} services and products after the posting of
      any changes to this Agreement constitutes acceptance of those changes.
      Please carefully review our Shipping & Delivery Policy
      <br />
      <br />
      If you have any questions concerning our return policy, please contact us
      at:
      <br />
      <ContactDetails />
      <br />
    </>
  );
};

export const PrivacyPolicy = () => {
  return (
    <>
      At {brand}, we are committed to protecting your privacy. We collect and
      use your personal information only for the purposes outlined in our
      Privacy Policy. We do not sell or share your information with third
      parties without your consent.
      <br />
      We take reasonable measures to safeguard your data and ensure its
      confidentiality. Your trust is important to us, and we strive to maintain
      the highest standards of privacy and security.
      <br />
      If you have any questions concerning our return policy, please contact us
      at:
      <br />
      <ContactDetails />
      <br />
    </>
  );
};
export const CopyRight = () => {
  return (
    <>
      {brand} respects the intellectual property rights of others. If you
      believe that your copyrighted work has been infringed on our website,
      please contact us at copyright@{brand}.com with the following information:
      <br />
      Your contact information. <br />
      Identification of the copyrighted work. <br />
      Description of the infringing material. <br />
      A statement that you have a good faith belief that the use is not
      authorized. <br />
      A statement that the information provided is accurate. <br />
      A physical or electronic signature. <br />
      Upon receipt of a valid notice, we will promptly remove or disable access
      to the infringing material. <br />
      <br />
      If you have any questions concerning our return policy, please contact us
      at:
      <br />
      <ContactDetails />
    </>
  );
};
