import { ArrowUpRight, Briefcase, Users, Zap, Heart, Star, Globe, Coffee, Smartphone, DollarSign, Network, Shield } from "lucide-react"
import Link from "next/link"

import Star8 from "@/components/stars/s8"
import Star9 from "@/components/stars/s9"
import Star11 from "@/components/stars/s11"
import Star14 from "@/components/stars/s14"
import Star16 from "@/components/stars/s16"
import Star20 from "@/components/stars/s20"
import Star22 from "@/components/stars/s22"
import Star26 from "@/components/stars/s26"
import Star29 from "@/components/stars/s29"
import Star32 from "@/components/stars/s32"
import Star37 from "@/components/stars/s37"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const jobOpenings = [
  {
    id: 1,
    title: "Business Development Intern",
    department: "Business Development",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    description: "Join our team to learn about direct carrier billing and help build strategic partnerships with carriers worldwide.",
    requirements: [
      "Currently pursuing or recently completed degree in Business, Marketing, or related field",
      "Strong interest in telecommunications and mobile payment industry",
      "Excellent communication and research skills",
      "Ability to work independently and in a team environment"
    ],
    benefits: [
      "Hands-on experience in carrier business development",
      "Mentorship from industry experts",
      "Flexible remote work schedule",
      "Potential for full-time conversion"
    ]
  },
  {
    id: 2,
    title: "AI Developer",
    department: "AI/ML",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    description: "Help design and build AI-powered features, from LLM integrations to model-driven services that enhance carrier platforms.",
    requirements: [
      "Pursuing a degree in Computer Science, AI/ML, Data Science, or related field",
      "Proficiency with Python or JavaScript/TypeScript",
      "Familiarity with ML frameworks (TensorFlow/PyTorch) or LLM APIs",
      "Understanding of data processing and evaluation best practices"
    ],
    benefits: [
      "Hands-on experience shipping AI features to production",
      "Mentorship from experienced ML and platform engineers",
      "Flexible remote work schedule",
      "Potential for full-time conversion"
    ]
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    description: "Work across the stack to build reliable, scalable components for our carrier billing and content platforms.",
    requirements: [
      "Pursuing a degree in Computer Science or related field",
      "Knowledge of JavaScript/TypeScript and modern web frameworks (React/Next.js)",
      "Basic understanding of APIs, databases, and Git workflows",
      "Strong problem-solving and debugging skills"
    ],
    benefits: [
      "Real-world experience with production-grade systems",
      "Mentorship from senior software engineers",
      "Flexible remote work schedule",
      "Potential for full-time conversion"
    ]
  },
  {
    id: 4,
    title: "Design Intern",
    department: "Design",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    description: "Collaborate with product and engineering to craft intuitive, on-brand experiences for carrier solutions.",
    requirements: [
      "Pursuing a degree in Design, HCI, or related field",
      "Proficiency with Figma and rapid prototyping",
      "Understanding of design systems, accessibility, and UX fundamentals",
      "Strong collaboration and communication skills"
    ],
    benefits: [
      "Portfolio-worthy projects across web and mobile",
      "Mentorship from experienced product designers",
      "Flexible remote work schedule",
      "Potential for full-time conversion"
    ]
  }
]

const values = [
  {
    icon: Smartphone,
    title: "Carrier Innovation",
    description: "Pioneering the future of direct carrier billing and mobile content platforms that drive revenue growth."
  },
  {
    icon: DollarSign,
    title: "Revenue Excellence",
    description: "Building platforms that maximize carrier revenue through optimized content delivery and billing systems."
  },
  {
    icon: Network,
    title: "Global Partnerships",
    description: "Creating strong relationships with carriers worldwide to expand our content platform reach."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Ensuring the highest standards of security and compliance in all our carrier billing solutions."
  }
]

export default function CareersPage() {
  return (
    <div className="text-foreground font-base prose-headings:font-heading prose-h1:2xl:text-6xl prose-h1:xl:text-5xl prose-h1:md:text-5xl prose-h1:sm:text-[33px] prose-h1:text-2xl prose-h2:2xl:text-4xl prose-h2:lg:text-4xl prose-h2:md:text-3xl prose-h2:text-2xl prose-h3:2xl:text-4xl prose-h3:xl:text-3xl prose-h3:lg:text-3xl prose-h3:md:text-2xl prose-h3:sm:text-xl">
      {/* Hero Section */}
      <main className="relative flex min-h-[100dvh] flex-col overflow-hidden items-center justify-center bg-background px-5 md:py-[200px] py-[100px] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
        <Star20
          color="var(--main)"
          stroke="black"
          strokeWidth={3}
          size={200}
          className="absolute top-[100px] lg:block hidden -left-[100px] -z-10"
        />
        <Star14
          color="var(--main)"
          stroke="black"
          strokeWidth={3}
          size={200}
          className="absolute bottom-[100px] lg:block hidden -right-[100px] -z-10"
        />
        
        <div className="mx-auto w-container max-w-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="leading-normal">
              Join our <br />
              <span className="relative px-2 sm:mr-2 mr-0 md:[&_svg]:size-[45px] sm:[&_svg]:size-7 bg-main/50 rounded-base border-2 border-border/40 dark:border-border/70">
                carrier
                <Star9
                  className="absolute sm:block hidden md:-bottom-4 md:-right-5 -bottom-2.5 -right-2.5"
                  color="var(--main)"
                  pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                />
                <Star9
                  className="absolute sm:block hidden md:-top-4 md:-left-5 -top-2.5 -left-2.5"
                  color="var(--main)"
                  pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                />
              </span>{" "}
              revolution.
            </h1>

            <p className="leading-snug w-full md:mt-[50px] md:mb-[60px] sm:mt-12 my-9 sm:mb-10 2xl:text-3xl xl:text-2xl lg:text-2xl xl:w-full lg:w-2/3 md:w-full md:text-2xl sm:text-xl text-xl">
              Help us build the future of direct carrier billing and content platforms. We are looking for passionate people who understand the telco industry and love pushing boundaries.
            </p>

            <Button
              className="flex items-center gap-2.5 w-max text-main-foreground rounded-base border-2 border-border bg-main md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              asChild
            >
              <Link href="#openings">
                View Open Positions
                <ArrowUpRight className="md:size-[30px] size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Values Section */}
      <section className="border-t-4 border-b-4 border-border bg-secondary-background py-16 lg:py-[100px]">
        <div className="mx-auto w-container max-w-full px-5">
          <h2 className="text-center mb-16">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="rounded-base border-2 border-border bg-background shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-base border-2 border-border bg-main">
                    <value.icon className="h-8 w-8 text-main-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="border-b-4 border-border bg-main py-16 lg:py-[100px]">
        <div className="mx-auto w-container max-w-full px-5">
          <h2 className="text-center text-main-foreground mb-16">
            Open Positions
          </h2>
          
          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="rounded-base border-2 border-border bg-background shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="default" className="rounded-base border-2 border-border">
                          {job.department}
                        </Badge>
                        <Badge variant="neutral" className="rounded-base border-2 border-border">
                          {job.location}
                        </Badge>
                        <Badge variant="neutral" className="rounded-base border-2 border-border">
                          {job.type}
                        </Badge>
                        <Badge variant="neutral" className="rounded-base border-2 border-border">
                          {job.experience}
                        </Badge>
                      </div>
                    </div>
                                         <Button
                       className="flex items-center gap-2 text-main-foreground rounded-base border-2 border-border bg-main px-6 py-2 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                       asChild
                     >
                       <Link
                         href={
                           job.title === "AI Developer"
                             ? "/careers/ai-developer/training"
                             : job.title === "Software Engineering Intern"
                             ? "/careers/software-engineering-intern/training"
                             : job.title === "Design Intern"
                             ? "/careers/design-intern/training"
                             : "/careers/business-development-intern/apply"
                         }
                       >
                         Apply Now
                         <ArrowUpRight className="size-4" />
                       </Link>
                     </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg">{job.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-heading mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Star32 className="size-4 text-main mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-heading mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Star11 className="size-4 text-main mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="inset-0 w-full flex flex-col items-center justify-center bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-5 lg:py-[200px] md:py-[150px] sm:py-[100px] py-[100px]">
        <Star26
          color="var(--main)"
          stroke="black"
          strokeWidth={3}
          size={200}
          className="absolute top-[100px] lg:block hidden -left-[100px] -z-10"
        />
        <Star37
          color="var(--main)"
          stroke="black"
          strokeWidth={3}
          size={200}
          className="absolute bottom-[100px] lg:block hidden -right-[100px] -z-10"
        />
        
        <div className="mx-auto w-container max-w-full text-center">
          <h2 className="text-center font-heading not-prose 2xl:text-5xl xl:text-5xl md:text-4xl sm:text-3xl text-[22px] mb-8">
            Ready to transform carrier billing?
          </h2>
          
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            We&apos;re always looking for passionate people who understand the telco industry and share our vision for innovative carrier solutions. 
            Even if you don&apos;t see a perfect fit above, we&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="flex items-center gap-2.5 text-main-foreground rounded-base border-2 border-border bg-main md:px-10 px-6 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              asChild
            >
              <Link href="mailto:careers@bluebuilddigital.com">
                Send us an email
                <ArrowUpRight className="md:size-[30px] size-5" />
              </Link>
            </Button>
            
            <Button
              variant="neutral"
              className="flex items-center gap-2.5 rounded-base border-2 border-border md:px-10 px-6 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              asChild
            >
              <Link href="/">
                Back to Home
                <ArrowUpRight className="md:size-[30px] size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
