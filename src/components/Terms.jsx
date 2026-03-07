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
        <Section title="General" text="test terms chenes kenemnemene" />

        <Section title="Payment" text="test terms chenes kenemnemene" />

        <Section
          title="Process & Revisions"
          text="test terms chenes kenemnemene"
        />

        <Section title="Usage Rights" text="test terms chenes kenemnemene" />

        <Section title="Turnaround Time" text="test terms chenes kenemnemene" />

        <Section
          title="Cancellations & Refunds"
          text="test terms chenes kenemnemene"
        />
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
