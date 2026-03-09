import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 px-2 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-10 scroll-mt-20 text-secondary"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="bg-[#e5d6ca] border border-base-300 rounded-3xl p-8 shadow-md"
      >
        {
          <p className="text-center text-neutral mb-8">
            Commission Status : OPEN
          </p>
        }

        <div className="grid gap-6 sm:grid-cols-3">
          <ContactCard
            label="Discord"
            value="@jemichuu"
            note="Preferred"
            link="https://discord.com/users/168009093112528896"
          />

          <ContactCard
            label="Twitch"
            value="@neppyleppy"
            link="https://twitch.tv/neppyleppy"
          />

          <ContactCard
            label="X / Twitter"
            value="@jemmyleppy"
            link="https://x.com/jemmyleppy"
          />
        </div>
      </motion.div>
    </section>
  );
}

function ContactCard({ label, value, note, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="rounded-2xl bg-[#e7ded7] border border-base-300 p-5 cursor-pointer"
      >
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold text-neutral">{label}</span>
          {note && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-neutral font-semibold">
              {note}
            </span>
          )}
        </div>
        <p className="text-sm text-neutral/80 break-all">{value}</p>
      </motion.div>
    </a>
  );
}
