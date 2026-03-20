import { motion } from "framer-motion";

export default function Terms() {
  return (
    <section className="py-24 px-2 max-w-6xl mx-auto scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-secondary"
      >
        Terms & Conditions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="bg-[#e5d6ca] border border-base-300 rounded-3xl p-8 shadow-md space-y-8"
      >
        <Section title="General" />
        <ul className="list-disc text-xl pl-8 space-y-1 text-accent w-full">
          <li>
            Do <b>not</b> use the Artist's work for any AI-related
            modification/usage.
          </li>

          <li>
            <b>WILL DRAW:</b> just about anything tbh
          </li>

          <li>
            The Client is not permitted to edit/modify/redistribute the Artist's
            work without prior discussion.
          </li>

          <li>Feel free to discuss any requests for NDAs about the work.</li>

          <li>
            The Artist reserves the right to decline a commission request.
          </li>

          <li>The Client will receive PNG + SVG as per request.</li>
        </ul>
        <Section title="Payments & Refunds" />
        <ul className="list-disc text-xl pl-8 space-y-1 text-accent w-full">
          <li>
            {" "}
            The Artist accepts payments through{" "}
            <b>
              Paypal (international) and local modes of payment (Philippines -
              GCash, Maya, etc.){" "}
            </b>{" "}
          </li>
          <li>
            {" "}
            For local transactions, final price may not reflect current USD
            conversion. Please let the Artist know if paying locally
            beforehand.{" "}
          </li>
          <li> USD / PHP only. </li>
          <li>
            {" "}
            Payment plans(i.e. installments/downpayments) can be discussed with
            the Artist.{" "}
          </li>
          <li>
            {" "}
            Generally, a 30-50% deposit will be made only after initial
            sketch.{" "}
          </li>
          <li>
            {" "}
            The Artist will only be sending the final high quality output after
            full payment.
          </li>
          <li>
            No refunds are possible after work begins unless initiated by the
            Artist.
          </li>
          <li>
            If the Artist cannot complete work or there are delays for
            unforeseen reasons, the Client may be eligible for a full refund. If
            work done up to this point is accepted and used by the Client, the
            Artist will provide a partial refund only.
          </li>
          <li>
            {" "}
            Depending on project size, refunds may not be processed(i.e. large
            projects, bundles, etc.){" "}
          </li>
        </ul>

        <Section title="Process & Revisions" />
        <ul className="list-disc text-xl pl-8 space-y-1 text-accent w-full">
          {" "}
          <li> The Client is entitled to 2 major revisions for free. </li>
          <li>
            {" "}
            An additional $5 per major revision will be charged after the free
            ones.{" "}
          </li>
          <li>
            {" "}
            Minor revisions don't count. (i.e. the Artist's mistakes, turning
            off certain layers){" "}
          </li>
          <li>
            {" "}
            Moodboards/reference sheets are greatly appreciated for efficiency.
            With that:{" "}
          </li>
          <li> The Artist will strictly be following references. </li>
          <li>
            {" "}
            If the Client has a specific paid font in mind, they will cover font
            purchase costs.{" "}
          </li>
        </ul>

        <Section title="Usage Rights" />
        <ul className="list-disc text-xl pl-8 space-y-1 text-accent w-full">
          <li> Works are for personal-use only (i.e, streaming)</li>
          <li> Commercial use must be stated otherwise. </li>
          <li>
            {" "}
            The Artist reserves the right to use commissions for their
            portfolio.{" "}
          </li>
        </ul>

        <Section title="Turnaround Time" />
        <ul className="list-disc text-xl pl-8 space-y-1 text-accent w-full">
          <li>
            {" "}
            Rush orders have an additional $10. Rush orders generally pertain to
            commissions that need to be accomplished in 3 days.{" "}
          </li>
          <li>
            {" "}
            Bigger projects may have a different timeframe to be considered as a
            rush order. Please let The Artist know.{" "}
          </li>
        </ul>
      </motion.div>
    </section>
  );
}

function Section({ title, text }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-neutral mb-2">{title}</h3>
      <p className="text-sm text-neutral/80 leading-relaxed">{text}</p>
    </div>
  );
}
