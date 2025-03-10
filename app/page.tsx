import {
  Github,
  Mail,
  Linkedin,
  Award,
  Briefcase,
  Code,
  GraduationCap,
  User,
  Brain,
  Database,
  Server,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { TypingEffect } from "@/components/typing-effect"
import { TechIcons } from "@/components/tech-icons"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <div className="w-40" /> {/* Spacer for balanced layout */}
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#experience">
            Experience
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#awards">
            Awards
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36 relative overflow-hidden">
          <AnimatedBackground />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800 dark:from-blue-400 dark:to-indigo-600 animate-pulse">
                  Ayush Gupta
                </h1>
                <div className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300">
                  <TypingEffect
                    text="Data Science graduate student at Duke University, specializing in deep learning, NLP, and Cloud Computing."
                    speed={50}
                  />
                </div>
              </div>

              <TechIcons />

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative flex space-x-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <Link href="#projects">View My Work</Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                  <p className="font-bold text-2xl text-blue-600 dark:text-blue-400">3.96</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">GPA at Duke</p>
                </div>
                <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                  <p className="font-bold text-2xl text-blue-600 dark:text-blue-400">4+ yrs</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
                </div>
                <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                  <p className="font-bold text-2xl text-blue-600 dark:text-blue-400">NASA</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Project Lead</p>
                </div>
                <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                  <p className="font-bold text-2xl text-blue-600 dark:text-blue-400">$1M+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Funding Secured</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <User className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                </div>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-600 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed dark:text-gray-300 leading-relaxed">
                    I'm a Data Science graduate student at Duke University with a passion for developing AI models and
                    solving complex problems with data. Currently, I'm leading a NASA-funded research project focused on
                    methane emissions detection using satellite data, combining my expertise in geospatial analysis and
                    deep learning.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                    <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                      <Brain className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-medium text-center">AI & Deep Learning</h3>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                      <Database className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-medium text-center">Data Engineering</h3>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                      <Server className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-medium text-center">Cloud Computing</h3>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                      <Code className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-medium text-center">Machine Learning</h3>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                      <Brain className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-medium text-center">NLP</h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">Education</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-lg">Duke University</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          M.S. Data Science | GPA: 3.96/4.0 | Aug 2023 – May 2025
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {[
                            "NLP",
                            "LLMs",
                            "Deep Learning",
                            "Statistical Modelling",
                            "Machine Learning",
                            "Data Engineering",
                            "Cloud Computing",
                          ].map((course) => (
                            <span
                              key={course}
                              className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-lg">University of Petroleum & Energy Studies, India</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Bachelor of Technology (B. Tech), Production Engineering | May 2015 – Apr 2019
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {["Data Structures", "Algorithms", "Advanced Calculus", "Probability", "Linear Algebra"].map(
                            (course) => (
                              <span
                                key={course}
                                className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                              >
                                {course}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button asChild>
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resume.pdf">Download Resume</Link>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 aspect-square">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photooo.jpg-3uGHRXZL9Ut4Of1BOmegxpq5gaY4qo.jpeg"
                    alt="Ayush Gupta"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-lg mb-2">Current Focus</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Leading a NASA-funded research project on methane emissions detection using satellite imagery and
                    deep learning techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center space-x-2">
                <Briefcase className="h-6 w-6" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience</h2>
              </div>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                My professional journey in data science and AI engineering.
              </p>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">AI Engineer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Geolabe (NASA-partnered project) | May 2024 – Current
                </p>
                <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    • Built an end-to-end geospatial data engineering pipeline using Python, BigQuery, and Rasterio for
                    a Methane Detection AI model that detects methane with 90% accuracy and offers global coverage every
                    2 days
                  </li>
                  <li>
                    • Developed the project in partnership with NASA, this project advances methane monitoring at a
                    scale and 1/10th of the cost of the current state-of-the-art techniques
                  </li>
                  <li>
                    • Developing an AI model for detecting oil and gas equipment with satellite data (using Kubernetes
                    and Google Earth Engine), expected to improve methane detection precisely with over 95% accuracy
                    (using CNN and Vision Transformers)
                  </li>
                  <li>
                    • The project won the NASA Entrepreneurs Challenge (Secured NASA funding of $1,000,000), Google for
                    Startups Accelerator ($300,000 in Google Cloud credits), and Activate Fellowship
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">Data Scientist & Analytics Consultant</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Citizens Bank | Sep 2024 – Current</p>
                <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    • Developed a predictive model (Marketing Mix Model) to analyze the impact of various marketing
                    channels and improve sales for individual business products
                  </li>
                  <li>
                    • Incorporated the time-lagged impact of each marketing channel (Adstock) and leveraged advanced
                    statistical techniques (Mixed Models), integrating seasonality, holiday effects, and macroeconomic
                    variables
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">Technical Project Manager</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Duke Health (Data +) | May 2024 – Jul 2024</p>
                <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    • Led a project to boost the response rate of patient-entered questionnaires by 43% for Duke Health,
                    using data analytics to pinpoint response time delays and optimize follow-up strategies, resulting
                    in improved patient engagement
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">Sr. Production Data Analyst</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Reliance Industries Limited | Jul 2019 – Jul 2023
                </p>
                <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    • Optimized error rates in flow meters (used to measure oil production) by 15% using regression
                    modeling. Utilized Python for modeling and SQL for ETL operations
                  </li>
                  <li>• Improved production forecasting efficiency from 85% to 99%, thus making precise predictions</li>
                  <li>
                    • Saved ~ USD 500,000 in future penalties with these accurate predictions, received special
                    recognition for project
                  </li>
                  <li>
                    • Supported the commissioning of a $5 billion oil & gas project as Operations Analytics Lead,
                    managing a team of 12 people
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center space-x-2">
                <Code className="h-6 w-6" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
              </div>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Showcasing my technical projects and implementations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Nutri AI</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Generative AI Hackathon by Open AI | Nov 2023
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-500 dark:text-gray-400">
                      Built a personalized nutrition app with a chatbot by leveraging scientific nutritional research
                      and FDA data to provide personalized food recommendations based on users' dietary preferences,
                      health goals, and nutritional needs.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Improved context with OpenAI API, Google Maps APIs and Prompt Engineering.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" asChild>
                      <Link href="https://github.com/ayushg245" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Stock Price Analysis Application</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Infrastructure as Code Implementation | Sep 2023
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-500 dark:text-gray-400">
                      Developed a stock price analysis application by using PySpark for Data Wrangling, Spark SQL for
                      data querying, and ETL operations, and Delta Lake for reliable and scalable data storage and
                      deployed using Kubernetes.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" asChild>
                      <Link href="https://github.com/ayushg245" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                My technical expertise and professional capabilities.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>• Generative AI</li>
                  <li>• LLM</li>
                  <li>• CNN</li>
                  <li>• Transformers</li>
                  <li>• Power BI</li>
                  <li>• AWS</li>
                  <li>• Google Cloud Platform</li>
                  <li>• Azure</li>
                  <li>• GitHub</li>
                  <li>• QGIS</li>
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Languages & Libraries</h3>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>• Python (TensorFlow, PyTorch, Keras, SkLearn)</li>
                  <li>• R</li>
                  <li>• C++</li>
                  <li>• SQL</li>
                  <li>• Docker</li>
                  <li>• Kubernetes</li>
                  <li>• Spark SQL</li>
                </ul>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>• Project Management</li>
                  <li>• Strong Negotiation</li>
                  <li>• Organized</li>
                  <li>• Delegation</li>
                  <li>• Strategic Planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="awards" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center space-x-2">
                <Award className="h-6 w-6" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Awards</h2>
              </div>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Recognition for my academic and professional achievements.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Rajiv Gandhi Scholarship</h3>
                  <p className="text-gray-500 dark:text-gray-400">2024</p>
                  <p className="text-gray-500 dark:text-gray-400">For Extraordinary Research & Academic Excellence</p>
                  <p className="font-medium">Funding of $70,000</p>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">Dean's Research Award</h3>
                  <p className="text-gray-500 dark:text-gray-400">2023</p>
                  <p className="text-gray-500 dark:text-gray-400">For Master's Students at Duke University</p>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">R-Samman Award</h3>
                  <p className="text-gray-500 dark:text-gray-400">2021</p>
                  <p className="text-gray-500 dark:text-gray-400">Reliance Industries Limited</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Feel free to reach out if you want to collaborate or just say hello.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="flex items-center gap-2" asChild>
                  <Link href="mailto:a.gupta@duke.edu">
                    <Mail className="h-4 w-4" />
                    a.gupta@duke.edu
                  </Link>
                </Button>
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <Link href="https://github.com/ayushg245" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <Link
                    href="https://www.linkedin.com/in/ayush-gupta-6489b434/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-4">Tel: +1 919-638-2462</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Ayush Gupta. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

