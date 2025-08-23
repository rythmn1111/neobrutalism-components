"use client"
import { Marquee } from "@devnomic/marquee"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

import "@/styling/marquee.css"

import Link from "next/link"
import Image from "next/image"

import reviews from "@/data/reviews"

import HeroComponents, { HeroStrip } from "@/components/app/hero-components"
import { sharedComponents } from "@/components/app/mdx-components"
import { Pre } from "@/components/app/pre"
import StylingCustomizer from "@/components/app/styling-customizer"
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const { Tabs, TabsContent, TabsList, TabsTrigger } = sharedComponents

  // Custom hook for counting animation
  const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    
    useEffect(() => {
      if (!hasStarted) return
      
      let startTime: number
      let animationFrame: number
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }
      
      animationFrame = requestAnimationFrame(animate)
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }, [end, duration, hasStarted])
    
    return { count, setHasStarted }
  }

  // Animated counts
  const countriesCount = useCountUp(28)
  const operatorsCount = useCountUp(53)
  const subscribersCount = useCountUp(9)
  const experienceCount = useCountUp(10)

  // Intersection Observer for triggering animations
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countriesCount.setHasStarted(true)
            operatorsCount.setHasStarted(true)
            subscribersCount.setHasStarted(true)
            experienceCount.setHasStarted(true)
            observer.disconnect() // Only trigger once
          }
        })
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [countriesCount, operatorsCount, subscribersCount, experienceCount])

  return (
    <div className="text-foreground font-base prose-headings:font-heading prose-h1:2xl:text-6xl prose-h1:xl:text-5xl prose-h1:md:text-5xl prose-h1:sm:text-[33px] prose-h1:text-2xl prose-h2:2xl:text-4xl prose-h2:lg:text-4xl prose-h2:md:text-3xl prose-h2:text-2xl prose-h3:2xl:text-4xl prose-h3:xl:text-3xl prose-h3:lg:text-3xl prose-h3:md:text-2xl prose-h3:sm:text-xl">
      <main className="relative flex min-h-[100dvh] flex-col overflow-hidden items-center justify-center bg-background px-5 md:py-[200px] py-[100px] bg-[linear-gradient(to_right,#80808080_1px,transparent_1px),linear-gradient(to_bottom,#80808080_1px,transparent_1px)] bg-[size:70px_70px]">
        {/* Side floating components on large screens */}
        <HeroComponents className="hidden lg:block top-[70px] -left-[140px] xl:-left-[130px] w-[300px] xl:w-[340px]" />
        <HeroComponents
          className="hidden lg:block top-[70px] -right-[140px] xl:-right-[130px] w-[300px] xl:w-[340px]"
          reverse
        />
        {/* Mobile horizontal strips that reuse the hero components */}
        <div className="absolute inset-x-0 top-8 px-3 lg:hidden pointer-events-none">
          <HeroStrip />
        </div>
        <div className="absolute inset-x-0 bottom-8 px-3 lg:hidden pointer-events-none">
          <HeroStrip reverse />
        </div>
        <div className="mx-auto w-container max-w-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="leading-normal">
              
              <span className="relative px-2 sm:mr-2 mr-0 md:[&_svg]:size-[45px] sm:[&_svg]:size-7 bg-main/50 rounded-base border-2 border-border/40 dark:border-border/70">
                BlueBuild
                <Star9
                  className="absolute block -bottom-2 -right-2 md:-bottom-4 md:-right-5 size-5"
                  color="var(--main)"
                  pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                />
                <Star9
                  className="absolute block -top-2 -left-2 md:-top-4 md:-left-5 size-5"
                  color="var(--main)"
                  pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                />
              </span>{" "}
              Digital <br />
              <span>
                Your next Content Platform <br /> Click made by Us
              </span>
            </h1>
            <br />
            

            <Link
              className="flex items-center gap-2.5 w-max text-main-foreground rounded-base border-2 border-border bg-main md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              href="https://cal.com/rythmn/talk-to-founders"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to Founder
              <ArrowUpRight className="md:size-[30px] size-5" />
            </Link>
          </div>
        </div>
      </main>
      <div>
        <Marquee
          className="border-t-4 border-border md:[&_.animate-marquee-left]:gap-[50px]! [&_.animate-marquee-left]:gap-[35px]! bg-secondary-background md:py-4 py-3"
          direction="left"
        >
          {Array.from({ length: 7 }).map((_, id) => {
            return (
              <div
                className="flex items-center md:gap-[50px] gap-[35px] xl:[&_span]:text-3xl md:[&_span]:text-2xl sm:[&_span]:text-xl [&_span]:text-base lg:[&_svg]:size-[50px] md:[&_svg]:size-10 [&_svg]:size-[30px]"
                key={id}
              >
                <span>GAMING CONTENT</span>
                <Star32 className="text-foreground" />
                <span>INFLUENCER CONTENT</span>
                <Star22 stroke="black" strokeWidth={6} color="var(--main)" />
                <span>EXCLUSIVE CONTENT</span>
                <Star11 className="text-foreground" />
                <span>LIFESTYLE CONTENT</span>
                <Star26 color="var(--main)" stroke="black" strokeWidth={7} />
              </div>
            )
          })}
        </Marquee>
        
                  {/* Video Platform Features Section */}
          <section id="how-we-do-it" className="border-b-4 border-t-4 border-border bg-background bg-[linear-gradient(to_right,#80808080_1px,transparent_1px),linear-gradient(to_bottom,#80808080_1px,transparent_1px)] bg-[size:70px_70px] py-16 lg:py-[100px]">
            <div className=" max-w-full">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading mb-6">WHY CHOOSE US</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Comprehensive solutions that transform your carrier business with innovative content platforms.
              </p>
            </div>
            
            <div id="why-choose-us" className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-t-4 border-border">
              <section className="border-b-4 md:border-r-4 border-border md:bg-background 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7 border-r-0 bg-main md:text-foreground text-main-foreground">
                <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
                  <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                    <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>

                  <h3>Custom Platform Development</h3>
                </div>

                <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
                  We design and build specialized content platforms that perfectly align with your carrier&apos;s unique requirements and business objectives.
                </p>
              </section>
              
              <section className="border-b-4 border-border md:text-main-foreground md:dark:text-main-foreground md:bg-main text-main-foreground dark:text-foreground 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7 bg-background">
                <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
                  <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                    <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z"/>
                    </svg>
                  </div>

                  <h3>Seamless Integration</h3>
                </div>

                <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
                  Our platforms integrate effortlessly with your existing billing systems and carrier infrastructure for immediate deployment.
                </p>
              </section>
              
              <section className="md:border-r-4 md:border-b-0 border-border bg-main dark:text-main-foreground 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7 border-b-4">
                <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
                  <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                    <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13H7V23H3V13M10 9H14V23H10V9M17 5H21V23H17V5Z"/>
                    </svg>
                  </div>

                  <h3>Revenue Optimization</h3>
                </div>

                <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
                  Advanced analytics and optimization tools to maximize your content revenue and subscriber engagement metrics.
                </p>
              </section>
              
              <section className="bg-background 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7">
                <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
                  <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                    <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
                    </svg>
                  </div>

                  <h3>Dedicated Partnership</h3>
                </div>

                <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
                  Ongoing collaboration and dedicated account management to ensure your platform evolves with your business needs.
                </p>
              </section>
            </div>
          </div>
        </section>
        
        <section id="about-us" className="border-b-4 border-b-border bg-background bg-[linear-gradient(to_right,#80808080_1px,transparent_1px),linear-gradient(to_bottom,#80808080_1px,transparent_1px)] bg-[size:70px_70px] py-16 lg:py-[100px]">
          <div className="mx-auto w-container max-w-full px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading mb-6">ABOUT US</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Pioneering the future of carrier content platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-heading">WHO WE ARE</h3>
                <div className="space-y-4 text-base md:text-lg">
                  <p>
                    BlueBuild Digital provides a complete solution for mobile value-added services (MVAS), 
                    specializing in the development, management, and distribution of premium content platforms 
                    for major carriers worldwide.
                  </p>
                  <p>
                    In addition to our B2C content platforms, we provide comprehensive services and solutions 
                    for commercial clients and businesses (B2B), specializing in direct carrier billing integration 
                    and revenue optimization for content providers.
                  </p>
                </div>
              
              </div>
              
              <div className="relative">
                <div className="bg-main rounded-base border-2 border-border shadow-shadow p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 bg-background rounded-base border-2 border-border flex items-center justify-center">
                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading text-lg">Content Platform Development</h4>
                        <p className="text-sm text-muted-foreground">Custom solutions for carriers</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="size-12 bg-background rounded-base border-2 border-border flex items-center justify-center">
                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading text-lg">Mobile Payments</h4>
                        <p className="text-sm text-muted-foreground">Secure and convenient transactions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="size-12 bg-background rounded-base border-2 border-border flex items-center justify-center">
                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 1H7C5.89 1 5 1.89 5 3V21C5 22.11 5.89 23 7 23H17C18.11 23 19 22.11 19 21V3C19 1.89 18.11 1 17 1ZM17 19H7V5H17V19ZM12 6.72C10.45 6.72 9.19 7.98 9.19 9.53C9.19 11.08 10.45 12.34 12 12.34C13.55 12.34 14.81 11.08 14.81 9.53C14.81 7.98 13.55 6.72 12 6.72Z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-heading text-lg">Revenue Optimization</h4>
                        <p className="text-sm text-muted-foreground">Maximize your content earnings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Global Coverage Section */}
        <section id="global-coverage" ref={statsRef} className="border-b-4 border-b-border bg-background bg-[linear-gradient(to_right,#80808080_1px,transparent_1px),linear-gradient(to_bottom,#80808080_1px,transparent_1px)] bg-[size:70px_70px] py-16 lg:py-[100px]">
          <div className="mx-auto w-container max-w-full px-5">
            <div className="text-center mb-16">
              <p className="text-sm text-muted-foreground mb-2">COMPANY STATS</p>
              <h2 className="text-4xl md:text-5xl font-heading mb-6">GLOBAL COVERAGE</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Our concentration lies in providing persistent delivery, curated content, daily engagement SMSes and live updates in order to ensure customer engagement, higher conversion rates and a consequent long-term association with the clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* World Map */}
              <div className="relative">
                <div className="bg-main rounded-base border-2 border-border shadow-shadow p-6 lg:p-8">
                  <div className="aspect-[4/3] bg-background rounded-sm border-2 border-border relative overflow-hidden">
                    {/* Simplified World Map */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/map.png"
                        alt="Global Coverage Map"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statistics */}
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-main rounded-base border-2 border-border shadow-shadow p-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 bg-background rounded-base border-2 border-border flex items-center justify-center">
                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl font-heading font-bold">{countriesCount.count}</div>
                        <div className="text-sm text-muted-foreground">COUNTRIES</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-main rounded-base border-2 border-border shadow-shadow p-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 bg-background rounded-base border-2 border-border flex items-center justify-center">
                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl font-heading font-bold">{operatorsCount.count}</div>
                        <div className="text-sm text-muted-foreground">OPERATORS</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-main rounded-base border-2 border-border shadow-shadow p-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 bg-background rounded-base border-2 border-border flex items-center justify-center">
                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl font-heading font-bold">{subscribersCount.count}<span className="text-lg">MN</span></div>
                        <div className="text-sm text-muted-foreground">SUBSCRIBERS</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-main rounded-base border-2 border-border shadow-shadow p-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 bg-background rounded-base border-2 border-border flex items-center justify-center">
                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl font-heading font-bold">{experienceCount.count}<span className="text-lg">Years</span></div>
                        <div className="text-sm text-muted-foreground">EXPERIENCE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                  <section id="testimonials" className="inset-0 flex relative overflow-hidden w-full px-5 flex-col items-center justify-center bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] z-0">
          <Star20
            color="var(--main)"
            stroke="black"
            strokeWidth={3}
            size={250}
            className="absolute top-[120px] lg:block hidden -left-[125px] -z-10"
          />
          <Star14
            color="var(--main)"
            stroke="black"
            strokeWidth={3}
            size={250}
            className="absolute bottom-[120px] lg:block hidden -right-[125px] -z-10"
          />
          <div className="mx-auto w-container max-w-full py-16 lg:py-[100px]">
            <h2 className="sm:mb-20 mb-14 text-center">
              Trusted by Global Carriers
            </h2>
            <div className="grid-cols-1 grid lg:grid-cols-3 gap-0 lg:gap-8">
              {[
                [reviews[0], reviews[1]],
                [reviews[2], reviews[3], reviews[4]],
                [reviews[5], reviews[6]],
              ].map((card, cardIndex) => (
                <div className="group flex flex-col justify-center" key={cardIndex}>
                  {card.map((reviewData, reviewIndex) => {
                    // Calculate the global index for this review
                    const globalIndex = cardIndex === 0 ? reviewIndex : 
                                      cardIndex === 1 ? reviewIndex + 2 : 
                                      reviewIndex + 5;
                    
                    // DCB-focused names
                    const dcbNames = [
                      "Joe Green",
                      "Amelia Cao", 
                      "Carlos Mendez",
                      "Rachel Woods",
                      "Marcus Thompson", 
                      "Yuki Tanaka",
                      "Omar Khalil"
                    ];
                    
                    // DCB-focused job titles
                    const dcbTitles = [
                      "Carrier Relations Manager",
                      "Content Platform Director",
                      "Billing Integration Specialist", 
                      "MVAS Business Lead",
                      "Revenue Operations Manager",
                      "Carrier Partnership Director",
                      "Content Strategy Head"
                    ];
                    
                    // DCB-focused reviews
                    const dcbReviews = [
                      "BlueBuild Digital transformed our carrier billing operations. Their content platform integration increased our revenue by 40% within the first quarter. The seamless DCB implementation exceeded all expectations.",
                      "Working with BlueBuild has revolutionized our content delivery strategy. Their platform handles millions of transactions daily with zero downtime. The carrier integration is flawless.",
                      "The direct carrier billing solution from BlueBuild is game-changing. Our subscriber engagement increased by 60% and revenue optimization tools are incredibly powerful.",
                      "BlueBuild's MVAS platform is exactly what we needed. The content curation and daily engagement features have significantly improved our customer retention rates.",
                      "Outstanding partnership with BlueBuild. Their revenue optimization tools and analytics have given us unprecedented insights into our carrier business performance.",
                      "BlueBuild's carrier integration capabilities are unmatched. They've helped us expand to 15 new markets with their comprehensive content platform solutions.",
                      "The content platform from BlueBuild has been instrumental in our global expansion. Their carrier billing expertise and support team are exceptional."
                    ];
                    
                    return (
                      <div
                        className="min-h-20 sm:w-[500px] w-full mx-auto mb-4 lg:min-h-48 lg:mb-8 lg:w-full rounded-base border-2 border-border bg-background p-5 shadow-shadow"
                        key={reviewIndex}
                      >
                        <div className="flex items-center sm:gap-5 gap-3">
                          <img
                            className="size-10 sm:size-12 rounded-base border-2 border-border"
                            src={`${reviewData.pfp.src}`}
                            alt="pfp"
                          />

                          <div>
                            <h4 className="sm:text-lg text-base font-heading">
                              {dcbNames[globalIndex]}
                            </h4>
                            <p className="text-xs sm:text-sm ">
                              {dcbTitles[globalIndex]}
                            </p>
                          </div>
                        </div>
                        <div className="sm:mt-5 mt-3 sm:text-base text-sm break-words">
                          {dcbReviews[globalIndex]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Marquee
          className="border-t-4 border-b-4 border-border md:[&_.animate-marquee-left]:gap-[50px]! [&_.animate-marquee-left]:gap-[35px]! bg-secondary-background md:py-4 py-3"
          direction="left"
          reverse
        >
          {Array.from({ length: 7 }).map((_, id) => {
            return (
              <div
                className="flex items-center md:gap-[50px] gap-[35px] xl:[&_span]:text-3xl md:[&_span]:text-2xl sm:[&_span]:text-xl [&_span]:text-base lg:[&_svg]:size-[50px] md:[&_svg]:size-10 [&_svg]:size-[30px]"
                key={id}
              >
                <span>GAMING CONTENT</span>
                <Star29 className="text-foreground" />
                <span>LIFESTYLE CONTENT</span>
                <Star37 stroke="black" strokeWidth={6} color="var(--main)" />
                <span>INFLUENCER CONTENT</span>
                <Star16 className="text-foreground" />
                <span>ENTERTAINMENT CONTENT</span>
                <Star8 color="var(--main)" stroke="black" strokeWidth={7} />
              </div>
            )
          })}
        </Marquee>
        <section className="inset-0 w-full flex flex-col items-center justify-center bg-main  bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:70px_70px] px-5 lg:py-[200px] md:py-[150px] sm:py-[100px] py-[100px]">
          <h2 className="text-center font-heading not-prose 2xl:text-5xl xl:text-5xl md:text-4xl sm:text-3xl text-[22px] text-main-foreground mb-12">
            Ready to transform your business?
          </h2>

          <Link
            className="flex items-center gap-2.5 w-max text-foreground rounded-base border-2 border-border bg-background dark:bg-secondary-background md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            href="https://cal.com/rythmn/talk-to-founders"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talk to Founder
            <ArrowUpRight className="md:size-[30px] size-5" />
          </Link>

          {/* <Tabs defaultValue="pnpm" className="max-w-[650px] w-full h-max">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="bun">bun</TabsTrigger>
            </TabsList>
            <TabsContent value="pnpm">
              <Pre
                __rawstring__="pnpm dlx shadcn@latest init https://neobrutalism.dev/r/styling/blue.json"
                data-language="bash"
                wrapperClassName="mb-0!"
              >
                <code>
                  <span className="text-white font-bold">pnpm</span>
                  <span className="text-white/[0.53] ">{` dlx shadcn@latest init https://neobrutalism.dev/r/styling/blue.json`}</span>
                </code>
              </Pre>
            </TabsContent>
            <TabsContent className="**:data-avatar:mb-0" value="npm">
              <Pre
                __rawstring__="npx shadcn@latest init https://neobrutalism.dev/r/styling/blue.json"
                data-language="bash"
                wrapperClassName="mb-0!"
              >
                <code>
                  <span className="text-white font-bold">npx</span>
                  <span className="text-white/[0.53] ">{` shadcn@latest init https://neobrutalism.dev/r/styling/blue.json`}</span>
                </code>
              </Pre>
            </TabsContent>
            <TabsContent value="yarn">
              <Pre
                __rawstring__="npx shadcn@latest init https://neobrutalism.dev/r/styling/blue.json"
                data-language="bash"
                wrapperClassName="mb-0!"
              >
                <code>
                  <span className="text-white font-bold">npx</span>
                  <span className="text-white/[0.53] ">{` shadcn@latest init https://neobrutalism.dev/r/styling/blue.json`}</span>
                </code>
              </Pre>
            </TabsContent>
            <TabsContent value="bun">
              <Pre
                __rawstring__="bunx shadcn@latest init https://neobrutalism.dev/r/styling/blue.json"
                data-language="bash"
                wrapperClassName="mb-0!"
              >
                <code>
                  <span className="text-white font-bold">bunx</span>
                  <span className="text-white/[0.53] ">{` --bun shadcn@latest init https://neobrutalism.dev/r/styling/blue.json`}</span>
                </code>
              </Pre>
            </TabsContent>
          </Tabs> */}
        </section>
      </div>
      <footer className="z-30 border-t-4 border-border bg-secondary-background px-5 py-5 text-center sm:text-base text-sm">
         © 2025 BlueBuild Digital. All rights reserved. Empowering carriers with innovative content platforms.
       </footer>
    </div>
  )
}

const OpenSourceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 768" fill="none">
    <path
      d="M400 10C615.398 10 790 184.585 790 399.958C790 557.315 696.772 692.954 562.483 754.562L468.604 510.384C505.457 487.481 530 446.609 530 399.958C530 328.161 471.802 269.971 400 269.971C328.198 269.971 270 328.161 270 399.958C270 446.619 294.587 487.487 331.438 510.419L237.559 754.599C103.226 692.917 10 557.313 10 399.958C10 184.585 184.602 10 400 10Z"
      className="md:fill-black fill-main md:stroke-none stroke-black md:dark:fill-black dark:fill-main"
      strokeWidth="30"
    />
  </svg>
)

const ShadcnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none"></rect>
    <line
      x1="208"
      y1="128"
      x2="128"
      y2="208"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    ></line>
    <line
      x1="192"
      y1="40"
      x2="40"
      y2="192"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    ></line>
  </svg>
)

const CustomizableIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
    <path
      d="M493.281 161.223L493.259 161.244L493.237 161.266C479.348 175.17 479.348 198.163 493.237 212.067L588.139 307.067C602.034 320.978 625.021 320.978 638.917 307.067L773.317 172.527C775.305 171.081 777.213 170.855 778.356 171.073C778.936 171.184 779.329 171.398 779.603 171.635C779.852 171.85 780.207 172.255 780.494 173.074C786.805 193.659 790 215.947 790 240C790 375.796 673.608 484.265 534.943 468.421C513.811 465.156 493.099 460.323 474.193 452.437L468.006 449.857L463.269 454.599L153.591 764.599C137.117 781.091 114.674 790 94.0687 790C73.4638 790 51.0205 781.091 34.5461 764.599L34.464 764.517L34.3799 764.437C1.96834 733.466 1.72473 679.929 34.5409 647.073C34.5427 647.071 34.5444 647.069 34.5461 647.067L345.87 337.086L350.624 332.352L348.046 326.157C340.129 307.138 335.322 288.025 332.083 265.39C316.219 126.527 424.606 10 560.25 10C582.145 10 605.607 13.0663 627.556 19.181C628.909 20.2855 629.87 21.8429 630.23 23.3556C630.631 25.0419 630.177 25.8434 629.774 26.254C629.77 26.2581 629.766 26.262 629.762 26.2659L493.281 161.223Z"
      className="fill-main stroke-black md:dark:fill-main dark:fill-main"
      strokeWidth="30"
    />
  </svg>
)

const TailwindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 481" fill="none">
    <mask
      id="mask0_16_29"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="800"
      height="481"
    >
      <path
        d="M10 10H790V470.109H10V10Z"
        fill="white"
        stroke="white"
        strokeWidth="20"
      />
    </mask>
    <g mask="url(#mask0_16_29)">
      <path
        d="M423.375 147.135L423.377 147.137C443.066 167.128 463.341 187.643 490.645 203.37C517.718 218.964 552.121 230.055 600 230.055C651.642 230.055 692.597 217.167 723.752 192.237C745.528 174.813 763.021 151.101 776.006 120.731C764.266 130.791 751.918 138.658 738.94 144.222C713.428 155.158 686.175 156.885 657.574 149.733C624.429 141.452 600.952 117.617 577.656 93.9664L576.625 92.9192L576.623 92.918C556.934 72.9264 536.659 52.4117 509.355 36.6846C482.282 21.0905 447.879 10 400 10C348.358 10 307.403 22.8873 276.248 47.8171C254.472 65.2416 236.979 88.9535 223.994 119.324C235.734 109.264 248.082 101.396 261.06 95.8327C286.572 84.8967 313.824 83.1696 342.424 90.3209L423.375 147.135ZM423.375 147.135L422.344 146.088M423.375 147.135L422.344 146.088M422.344 146.088C399.048 122.437 375.571 98.6022 342.426 90.3214L422.344 146.088ZM576.006 360.785C563.021 391.156 545.528 414.868 523.752 432.292C492.597 457.222 451.642 470.109 400 470.109C352.121 470.109 317.718 459.019 290.645 443.424C263.341 427.697 243.066 407.183 223.377 387.191L223.375 387.19L222.386 386.185C199.072 362.517 175.589 338.677 142.428 330.377L142.426 330.376C113.825 323.224 86.5722 324.951 61.0601 335.887C48.0816 341.451 35.7343 349.318 23.9935 359.378C36.9788 329.008 54.4722 305.296 76.2478 287.872C107.403 262.942 148.358 250.055 200 250.055C247.879 250.055 282.282 261.145 309.355 276.739C336.659 292.466 356.934 312.981 376.623 332.973L376.625 332.974L377.656 334.021C400.952 357.672 424.429 381.507 457.574 389.788C486.175 396.94 513.428 395.213 538.94 384.276C551.918 378.713 564.266 370.845 576.006 360.785Z"
        className="md:fill-main fill-black"
        stroke="black"
        strokeWidth="20"
      />
    </g>
  </svg>
)
