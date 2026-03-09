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
            Do <b>not</b> use my work for any AI-related modification/usage.
          </li>

          <li>
            <b>WILL DRAW:</b> just about anything tbh
          </li>

          <li>
            Clients are not allowed to edit/modify/redistribute my work without
            prior discussion.
          </li>

          <li>
            Feel free to discuss with me any requests for NDAs about the work.
            No fees.
          </li>

          <li>I reserve the right to decline a commission request.</li>

          <li>Client will receive PNG + SVG as per request.</li>
        </ul>
        <Section title="Payments & Refunds" />
        <ul className="list-disc text-xl pl-8 space-y-1 text-accent w-full">
          <li>
            {" "}
            I accept payments through{" "}
            <b>
              Paypal (international) and local modes of payment (Philippines -
              GCash, Maya, etc.){" "}
            </b>{" "}
          </li>
          <li> USD / PHP only. </li>
          <li> Payment plans can be discussed with me! just lmk </li>
          <li>
            {" "}
            Generally, a 30-50% deposit will be made only after initial
            sketch.{" "}
          </li>
          <li> I will only be sending the final high quality </li>

          <li>
            {" "}
            Depending on project size, refunds may not be processed(i.e. large
            projects, bundles, etc.){" "}
          </li>
        </ul>

        <Section title="Process & Revisions" />
        <ul className="list-disc text-xl pl-8 space-y-1 text-accent w-full">
          {" "}
          <li> 2 major revisions for free. </li>
          <li>
            {" "}
            An additional $5 per major revision will be charged after the free
            ones.{" "}
          </li>
          <li>
            {" "}
            Minor revisions don't count (i.e. my mistakes, turning off certain
            layers){" "}
          </li>
          <li>
            {" "}
            Moodboards/reference sheets are greatly appreciated for efficiency.
            With that:{" "}
          </li>
          <li> I will strictly be following references. </li>
          <li>
            {" "}
            If the client has a specific paid font in mind, they will cover font
            purchase costs.{" "}
          </li>
        </ul>

        <Section title="Usage Rights" />
        <ul className="list-disc text-xl pl-8 space-y-1 text-accent w-full">
          <li> Works are for personal-use only (i.e, streaming)</li>
          <li> Commercial use must be stated otherwise. </li>
          <li> I reserve the right to use commissions for my portfolio. </li>
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
            Bigger projects may have a different definition of rush. Please let
            me know!{" "}
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
