import { Shield, Award, Users } from "lucide-react"

export function TrustSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container w-full px-4">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Clientes y certificaciones
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabajamos con empresas y particulares. Seguro y cumplimiento de normas.
          </p>
          
          <div className="flex flex-wrap w-full justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="h-6 w-6 text-blue-600" />
              <span>Seguro de responsabilidad</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Award className="h-6 w-6 text-orange-500" />
              <span>Normas de seguridad</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="h-6 w-6 text-green-600" />
              <span>+100 clientes satisfechos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
