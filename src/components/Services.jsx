// src/components/Services.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Name Logos",
    subtitle: "(Prices are in USD)",
    columns: 2,
    pricing: [
      { label: "Basic", price: "$20" },
      { label: "Detailed", price: "$30" },
      { label: "Commercial Use", price: "+50%" },
    ],
    images: ["/img1.png", "/img2.png", "/img3.png", "/img4.png"],
  },
  {
    title: "Profile Pictures",
    subtitle: "(Prices are in USD)",
    columns: 2,
    pricing: [
      { label: "Basic", price: "$15" },
      { label: "Detailed", price: "$25" },
    ],
    images: ["/img1.png", "/img2.png", "/img3.png", "/img4.png"],
  },
  {
    title: "Overlays",
    subtitle: "(Prices are in USD)",
    columns: 3,
    pricing: [
      { label: "Starting Soon Scene", static: "$25", animated: "$50" },
      { label: "Just Chatting Scene", static: "$20", animated: "$45" },
      { label: "Ending Scene", static: "$25", animated: "$50" },
      { label: "BRB Scene", static: "$25", animated: "$50" },
      { label: "Panels (6)", static: "$25" },
      { label: "Profile Banner", static: "$30" },
      { label: "Add On : Character Illust.", static: "$30", animated: "$60" },
      { label: "Overlay Bundle", static: "$85", animated: "$175" },
    ],
    details: {
      title: "Overlay Bundle",
      description: "Includes: ",
      list: [
        "Starting Soon Scene",
        "Just Chatting Scene",
        "Ending Scene",
        "BRB Scene",
      ],
    },

    images: ["/img1.png", "/img2.png", "/img3.png", "/img4.png"],
  },
  {
    title: "Deskmats",
    subtitle: "(Prices are in USD)",
    columns: 2,
    pricing: [
      { label: "Basic", price: "$30" },
      { label: "Detailed", price: "$50" },
      { label: "Commercial", price: "+100%" },
    ],
    images: ["/img1.png", "/img2.png", "/img3.png", "/img4.png"],
  },
  {
    title: "PNGtubers / VTubers",
    subtitle: "(Prices are in USD)",
    columns: 2,
    pricing: [
      { label: "Static Open and Close", price: "$35" },
      { label: "VTube Model (Art Only)", price: "$120" },
    ],
    images: ["/img1.png", "/img2.png", "/img3.png", "/img4.png"],
  },
  {
    title: "Emotes",
    subtitle: "(Prices are in USD)",
    columns: 3,
    pricing: [
      { label: "YCH", static: "$20", animated: "$30" },
      { label: "Custom", static: "$25", animated: "$35" },
      { label: "Bundle of 3", static: "$50", animated: "$80" },
      { label: "Bundle of 6", static: "$110", animated: "$170" },
    ],
    images: ["/img1.png", "/img2.png", "/img3.png", "/img4.png"],
  },
  {
    title: "Illustrations",
    subtitle: "(Prices are in USD)",
    columns: 2,

    pricing: [
      { label: "Chibi - Base Colors", price: "$20" },
      { label: "Chibi - Detailed", price: "$30" },
      { label: "Half Body - Base Colors", price: "$30" },
      { label: "Half Body - Detailed", price: "$50" },
    ],
    images: ["/img1.png", "/img2.png", "/img3.png", "/img4.png"],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);
  const [activeImage, setActiveImage] = useState(services[0].images[0]);

  const handleServiceChange = (service) => {
    setActiveService(service);
    setActiveImage(service.images?.[0] || "");
  };

  const parseItem = (item) => {
    if (!item) return { type: "-", price: "-" };

    const parts = item.split("–");
    if (parts.length === 2) {
      return {
        type: parts[0].trim(),
        price: parts[1].trim(),
      };
    }

    return {
      type: item,
      price: "-",
    };
  };

  const pricingRows =
    activeService.items?.length > 0
      ? activeService.items.map(parseItem)
      : [
          { type: "Standard Package", price: "Contact for pricing" },
          { type: "Custom Work", price: "Varies" },
          { type: "Commercial Use", price: "+50%" },
          { type: "Bulk Order", price: "Discount available" },
        ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-secondary">
        Services
      </h2>

      {/* Service Pills */}
      <div className="flex flex-wrap justify-center gap-4 mb-14 font-radwave">
        {services.map((service) => (
          <button
            key={service.title}
            onClick={() => handleServiceChange(service)}
            className={`px-6 py-2 rounded-xl text-sm bg-primary font-semibold transition
              ${
                activeService.title === service.title
                  ? "bg-secondary text-accent"
                  : "bg-base-200 border-base-300 hover:bg-[#e5d6ca]"
              }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Big Card */}
      <div className="bg-[#e5d6ca] border border-base-300 rounded-[2.5rem] p-8 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-10"
          >
            {/* LEFT 50% IMAGES */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square bg-base-300 rounded-2xl overflow-hidden">
                {activeImage && (
                  <img
                    src={activeImage}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                )}
              </div>

              <div className="flex gap-4">
                {activeService.images?.slice(1, 4).map((img) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    className="w-20 h-20 rounded-xl overflow-hidden border border-base-300 hover:scale-105 transition"
                  >
                    <img
                      src={img}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT 50% CONTENT */}
            <div className="flex flex-col max-h-[560px] overflow-y-auto pr-2 ">
              <h3 className="text-3xl font-bold text-neutral">
                {activeService.title}
              </h3>
              <p className="text-neutral/70 mb-6">{activeService.subtitle}</p>

              {activeService.columns === 3 ? (
                <table className="w-full text-left mb-6 border-collapse">
                  <thead>
                    <tr className="border-b border-base-300">
                      <th className="py-3 text-md font-radwave text-neutral/70">
                        Type
                      </th>
                      <th className="py-3 text-md font-radwave text-right text-neutral/70">
                        Static
                      </th>
                      <th className="py-3 text-md font-radwave text-right text-neutral/70">
                        Animated
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {activeService.pricing.map((row, i) => (
                      <tr key={i} className="border-b border-base-300">
                        <td className="py-4 text-lg font-futura text-black">
                          {row.label}
                        </td>
                        <td className="py-4 text-lg text-right font-black text-primary">
                          {row.static}
                        </td>
                        <td className="py-4 text-lg text-right font-black text-primary">
                          {row.animated}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full text-left mb-6 border-collapse ">
                  <thead>
                    <tr className="border-b border-base-300">
                      <th className="py-3 text-lg font-radwave  text-neutral/70">
                        Type
                      </th>
                      <th className="py-3 text-lg font-radwave  text-right text-neutral/70">
                        Price
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {activeService.pricing.map((row, i) => (
                      <tr key={i} className="border-b border-base-300">
                        <td className="py-4 text-lg font-futura text-black">
                          {row.label}
                        </td>
                        <td className="py-4 text-lg text-right font-black text-primary">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeService.details && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-neutral mb-2">
                    {activeService.details.title}
                  </h4>

                  <p className="text-sm text-neutral/70 mb-4">
                    {activeService.details.description}
                  </p>

                  <ul className="space-y-2 text-sm text-neutral/80">
                    {activeService.details.list.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
