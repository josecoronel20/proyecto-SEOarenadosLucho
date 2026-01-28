

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
          Conoce temas de interés en nuestro blog
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Consejos de expertos, guías técnicas y casos de éxito de proyectos.
          </p>
</div>
      </div>
    </section>
  )
}
