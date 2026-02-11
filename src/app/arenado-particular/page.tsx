import React from 'react'
import { HeroSection } from '@/components/arenado-particular/HeroSection'
import { ResumeSection } from '@/components/arenado-particular/ResumeSection'
import { ProcessSection } from '@/components/arenado-particular/ProcessSection'
import { AccordionSection } from '@/components/common/AccordionSection'
import projectsData from '@/lib/projectsInfo.json'
import { Project } from '@/components/common/ProjectDescription'
import CTASection from '@/components/common/CTASection'
import H2 from '@/components/common/H2'
const page = () => {
  // Safely extract particular projects
  const particularProjects = (projectsData as any)[1]?.particularProjects || []
  
  return (
    <>
      <HeroSection />
      <ResumeSection />
      <ProcessSection />
      <AccordionSection
        projects={particularProjects as Project[]}
        title="Proyectos Particulares"
        type="multiple"
      />
      <CTASection />
    </>
  )
}

export default page
