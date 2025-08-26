import { ArrowUpRight, Check, Clock, GraduationCap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DesignInternTrainingPage() {
  return (
    <div className="text-foreground font-base">
      <main className="relative flex min-h-[60dvh] flex-col overflow-hidden items-center justify-center bg-background px-5 md:py-[140px] py-[100px] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
        <div className="mx-auto w-container max-w-full text-center">
          <h1 className="leading-normal mb-6">Design Intern – Mandatory Learning Based Training</h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Before applying, completion of our Learning Based Training is mandatory 
            so you can contribute confidently to product design and UX.
          </p>
        </div>
      </main>

      <section className="border-t-4 border-b-4 border-border bg-secondary-background py-12 lg:py-[80px]">
        <div className="mx-auto w-container max-w-full px-5">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            <Card className="rounded-base border-2 border-border bg-background shadow-shadow w-full md:w-[380px]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="size-6 text-main" />
                  <CardTitle>Training Fee</CardTitle>
                </div>
                <CardDescription>One-time fee for the full program</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-heading mb-2">
                  <span className="line-through text-muted-foreground mr-3">₹23,000</span>
                  <span className="text-main">₹15,000</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Early bird price applies for a limited time.</p>
                <Button className="flex items-center gap-2 text-main-foreground rounded-base border-2 border-border bg-main px-6 py-2 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none" asChild>
                  <Link href="/careers/design-intern/apply">
                    Enroll Now
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="flex-1">
              <h3 className="mb-6">What you will learn</h3>
              <div className="space-y-6">
                <TimelineItem week="Week 1" title="Design Foundations">
                  Visual hierarchy, typography, color theory, spacing, grids and layout.
                </TimelineItem>
                <TimelineItem week="Week 2" title="Figma & Prototyping">
                  Components, variants, auto‑layout, interactive prototyping and handoff.
                </TimelineItem>
                <TimelineItem week="Week 3" title="UX Research & Information Architecture">
                  User flows, wireframes, usability heuristics and task-based testing.
                </TimelineItem>
                <TimelineItem week="Week 4" title="Design Systems & Accessibility">
                  Tokens, components library, contrast, keyboard navigation and WCAG basics.
                </TimelineItem>
                <TimelineItem week="Week 5" title="Collaboration with Engineering">
                  Design-to-dev workflows, annotations, assets, and responsive thinking.
                </TimelineItem>
                <TimelineItem week="Week 6" title="Portfolio & Capstone">
                  End-to-end case study, presentation, and feedback for portfolio polish.
                </TimelineItem>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-heading mb-3">Completion & Next Steps</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-main mt-0.5 flex-shrink-0" />
                    <span>Certificate of completion and portfolio-ready case study</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-main mt-0.5 flex-shrink-0" />
                    <span>Eligibility to apply for the Design internship</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="neutral" className="flex items-center gap-2 rounded-base border-2 border-border px-6 py-2 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none" asChild>
                  <Link href="/careers#openings">
                    Back to Openings
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
                <Button className="flex items-center gap-2 text-main-foreground rounded-base border-2 border-border bg-main px-6 py-2 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none" asChild>
                  <Link href="/careers/design-intern/apply">
                    Proceed to Application
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function TimelineItem({ week, title, children }: { week: string; title: string; children: React.ReactNode }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 h-5 w-5 rounded-full border-2 border-border bg-background flex items-center justify-center">
        <Clock className="size-3 text-main" />
      </div>
      <div className="rounded-base border-2 border-border bg-background p-4 shadow-shadow">
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="neutral" className="rounded-base border-2 border-border">{week}</Badge>
          <span className="font-heading">{title}</span>
        </div>
        <p className="text-base">{children}</p>
      </div>
    </div>
  )
}


