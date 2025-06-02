import { motion } from "framer-motion";

export default function PlataformaPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="bg-gradient-to-b from-blue-600 to-blue-500 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Impulsa tu negocio con automatización conversacional
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Plataforma completa para crear, gestionar y evolucionar experiencias conversacionales.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 text-lg">Solicitar demo</button>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Conecta múltiples canales", desc: "Integra WhatsApp, Instagram, Webchat y más desde un solo lugar." },
            { title: "Diseña flujos inteligentes", desc: "Crea conversaciones automatizadas con lógica de negocio." },
            { title: "Mide y mejora", desc: "Visualiza métricas clave y optimiza tus resultados." },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.2 }}>
              <div className="rounded-2xl shadow-md p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Por qué elegir nuestra plataforma?</h2>
          <p className="text-lg text-gray-700 mb-10">
            Nuestro enfoque te permite escalar tu atención al cliente con calidad, eficiencia y personalización.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {["Atención 24/7", "Reducción de costos operativos", "Mayor satisfacción del cliente", "Automatización sin programar"].map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.2 }} className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl shadow">
              <p className="text-lg">✅ {b}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
        <p className="text-lg mb-6">
          Descubre cómo nuestra plataforma puede ayudarte a automatizar y escalar la atención al cliente.
        </p>
        <button className="text-lg px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-xl font-semibold">
          Comienza ahora
        </button>
      </section>
    </div>
  );
}