import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getAllCategories } from "@/data/blog"

export function CategoriesSection() {
  const categories = getAllCategories()

  return (
    <section className="py-16" aria-labelledby="categories-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="categories-heading" className="text-3xl font-bold mb-4">
            Categorías de Arenado en Pilar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora nuestros artículos por categoría y encuentra información específica sobre servicios de arenado en Pilar, San Isidro, Tigre y Zona Norte.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" role="list" aria-label="Categorías de artículos sobre arenado">
          {categories.map((category, index) => (
            <Button 
              key={index} 
              variant="outline" 
              className="group hover:bg-primary hover:text-primary-foreground h-auto p-4 flex flex-col items-center gap-2" 
              asChild
              role="listitem"
            >
              <Link href={`/blog/categoria/${category.slug}`} aria-label={`Ver artículos de la categoría ${category.name}`}>
                <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
