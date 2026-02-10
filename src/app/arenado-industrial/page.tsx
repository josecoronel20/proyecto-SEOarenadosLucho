import React from 'react'
import { HeroSection } from '@/components/arenado-industrial/HeroSection'
import { ResumeSection } from '@/components/arenado-industrial/ResumeSection'
import { ProcessSection } from '@/components/arenado-industrial/ProcessSection'
import { AccordionSection } from '@/components/common/AccordionSection'
import projectsData from '@/lib/projectsInfo.json'
import { Project } from '@/components/common/ProjectDescription'
import CTASection from '@/components/common/CTASection'
const page = () => {
  const projects = projectsData[0].industrialProjects
  return (<>
    <HeroSection />
    <ResumeSection />
    <ProcessSection />
    <AccordionSection
      projects={projects as unknown as Project[]}
      title="Proyectos Industriales"
      type="multiple"
    />
    <CTASection />
    </>)
}

export default page