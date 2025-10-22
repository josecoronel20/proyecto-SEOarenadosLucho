import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TechCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

export function TechCard({ 
  title, 
  description, 
  icon, 
  href 
}: TechCardProps) {
  const content = (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            {icon}
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )

  if (href) {
    return (
      <Link href={href} rel="noopener" aria-label={`Más información sobre ${title}`}>
        {content}
      </Link>
    )
  }

  return content
}
