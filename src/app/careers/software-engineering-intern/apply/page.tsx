"use client"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { createClient } from "@supabase/supabase-js"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function ApplySoftwareEngineeringInternPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    
    try {
      const { error } = await supabase
        .from('internship_applications')
        .insert({
          role: 'Software Engineering Intern',
          full_name: formData.get('fullName') as string,
          email: formData.get('email') as string,
          phone: formData.get('phone') as string,
          location: formData.get('location') as string,
          github_url: formData.get('github') as string,
          linkedin_url: formData.get('linkedin') as string,
          resume_link: formData.get('resumeLink') as string,
          motivation: formData.get('motivation') as string,
          experience: formData.get('experience') as string,
        })

      if (error) throw error
      setSubmitted(true)
    } catch (err) {
      console.error('Error submitting application:', err)
      setError('Failed to submit application. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="text-foreground font-base px-5 md:py-[80px] py-[60px]">
      <div className="mx-auto w-container max-w-full">
        <h1 className="mb-2">Apply – Software Engineering Intern</h1>
        <p className="mb-8 text-lg">Please ensure you have completed the Learning Based Training before applying.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="rounded-base border-2 border-border bg-background shadow-shadow lg:col-span-2">
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
              <CardDescription>Your application will be stored securely in our database.</CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="rounded-base border-2 border-border p-4 bg-secondary-background">
                  <h3 className="font-semibold mb-2">Application Submitted Successfully!</h3>
                  <p>We will contact you shortly.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {error && (
                    <div className="rounded-base border-2 border-red-200 p-3 bg-red-50 text-red-700">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input required name="fullName" placeholder="Full Name" />
                    <Input required name="email" type="email" placeholder="Email" />
                    <Input required name="phone" placeholder="Phone" />
                    <Input name="location" placeholder="Location (City, Country)" />
                  </div>
                  <Input required name="github" type="url" placeholder="GitHub URL" />
                  <Input name="linkedin" type="url" placeholder="LinkedIn URL" />
                  <Textarea required name="motivation" placeholder="Why are you a good fit for Software Engineering?" />
                  <Textarea name="experience" placeholder="Relevant projects or experience (brief)" />
                  <div className="space-y-1">
                    <label className="block text-sm font-medium">Upload the resume to Google Drive and share the public link here. Make sure it is public.</label>
                    <Input required name="resumeLink" type="url" placeholder="https://drive.google.com/..." />
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      type="submit" 
                      disabled={submitting}
                      className="text-main-foreground rounded-base border-2 border-border bg-main px-6 py-2 shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none disabled:opacity-50"
                    >
                      {submitting ? 'Submitting...' : 'Submit Application'}
                      <ArrowUpRight className="size-4 ml-2" />
                    </Button>
                    <Button variant="neutral" asChild className="rounded-base border-2 border-border px-6 py-2 shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
                      <Link href="/careers/software-engineering-intern/training">View Training</Link>
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          <Card className="rounded-base border-2 border-border bg-background shadow-shadow">
            <CardHeader>
              <CardTitle>Role Summary</CardTitle>
              <CardDescription>Full‑stack engineering internship</CardDescription>
            </CardHeader>
            <CardContent>
              Build features with React/Next.js, APIs and databases; learn testing and deployments.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


