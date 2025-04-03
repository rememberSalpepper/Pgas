// Nuevo componente CallToAction.tsx MEJORAR
export default function CallToAction() {
    return (
      <section className="bg-gradient-to-r from-emerald-500 to-cyan-500 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h3>
          <p className="text-gray-900 mb-8">Agenda una consultoría gratuita</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
            className="bg-gray-900 text-white hover:bg-gray-800"
          >
            Programar reunión
          </button>
        </div>
      </section>
    )
  }