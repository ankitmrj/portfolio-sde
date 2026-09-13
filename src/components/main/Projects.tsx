'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import {
  Plus,
  Minus,
  Terminal,
  ShieldAlert,
  Cpu,
  Award,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import SectionWrapper from '@/components/ui/section-wrapper'

type Project = {
  title: string
  date: string
  description: string
  problem: string
  approach: string
  infra: string
  outcome: string
  tags: string[]
  github: string
}

const projects: Project[] = [
  {
    title: 'LifeConnect – Medical Emergency Help Platform',
    date: 'May 2025',
    description:
      'Full-stack emergency coordination platform connecting patients, hospitals and ambulances through a one-tap SOS workflow.',
    problem:
      'Emergency response often requires coordinating patients, hospitals and ambulances quickly while working with location and availability data.',
    approach:
      'Built an end-to-end SOS workflow with role-based access, geospatial hospital discovery, hospital ranking, real-time notifications and ambulance coordination.',
    infra:
      'React + Vite + Tailwind frontend with Express, MongoDB/Mongoose, JWT RBAC, Socket.IO, Leaflet and Dijkstra-based shortest-path routing.',
    outcome:
      'Created a real-time emergency coordination platform that connects patients, hospitals and ambulances through a unified incident workflow.',
    tags: [
      'React',
      'Vite',
      'Tailwind',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.IO',
      'JavaScript',
    ],
    github:
      'https://github.com/ankitmrj/LifeConnect-Medical-Emergency-Help',
  },

  {
    title: 'AlgoStudio – Interactive Algorithm Learning Platform',
    date: 'July 2025',
    description:
      'Interactive platform for visualizing data structures and algorithms through animations, step-by-step explanations and user interaction.',
    problem:
      'Learning algorithms from static implementations can make it difficult to understand how data structures and algorithms evolve step by step.',
    approach:
      'Designed interactive visualizations for sorting, graph algorithms, pathfinding and fundamental data structures with controls for step-by-step execution.',
    infra:
      'Interactive frontend architecture using React/Next.js with algorithm visualization through D3.js or Canvas/SVG, state management and responsive styling.',
    outcome:
      'Built an educational platform that makes algorithm execution easier to understand through visual and interactive demonstrations.',
    tags: [
      'React',
      'Next.js',
      'D3.js',
      'TypeScript',
      'Tailwind',
      'JavaScript',
    ],
    github:
      'https://github.com/ankitmrj/AlgoStudio-Interactive-Algorithm-Learning-Platform-',
  },

  {
    title: 'Hiver AI Customer Support Agent',
    date: 'May 2026',
    description:
      'AI customer support agent for AmazonHelp that classifies customer intent, retrieves relevant historical cases, generates grounded responses and decides when to escalate.',
    problem:
      'Customer support automation must handle repetitive requests efficiently without inventing policies, refunds, actions or outcomes.',
    approach:
      'Built a pipeline around AmazonHelp conversations from the Customer Support on Twitter dataset, combining intent classification, historical-case retrieval, escalation policy and grounded reply generation.',
    infra:
      'AmazonHelp-specific intent taxonomy with conversation reconstruction, customer-response pairs, golden-set holdout, historical retrieval and conservative escalation logic.',
    outcome:
      'Focused on trustworthy automation by handling low-risk repetitive cases while escalating requests when evidence or context is insufficient.',
    tags: [
      'AI',
      'NLP',
      'Intent Classification',
      'Retrieval',
      'Escalation',
      'Grounded Generation',
    ],
    github:
      'https://github.com/ankitmrj/hiver-ai-support-agent',
  },

  {
    title: 'User Analytics Application',
    date: 'June 2026',
    description:
      'Full-stack analytics platform that tracks user interactions and visualizes sessions, user journeys and click heatmaps.',
    problem:
      'Understanding how users interact with a webpage requires collecting event-level data and turning those events into useful behavioral insights.',
    approach:
      'Built an analytics tracker that captures page views, clicks, timestamps, URLs and coordinates, then sends events to an Express API for dashboard visualization.',
    infra:
      'React + Vite frontend with React Router, Node.js/Express backend and MongoDB Atlas with Mongoose for session and event storage.',
    outcome:
      'Delivered session analytics, chronological user journeys, event counts and page-specific click heatmaps through a dedicated analytics dashboard.',
    tags: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JavaScript',
    ],
    github:
      'https://github.com/ankitmrj/CausalFunnel-Assesement-',
  },
]

const getIconKey = (tag: string): string => {
  const t = tag.toLowerCase().trim()

  if (t === 'node.js' || t === 'nodejs') return 'nodejs'
  if (t === 'python') return 'py'
  if (t === 'react') return 'react'
  if (t === 'next.js' || t === 'nextjs') return 'nextjs'
  if (t === 'typescript' || t === 'ts') return 'ts'
  if (t === 'javascript' || t === 'js') return 'js'
  if (t === 'express') return 'express'
  if (t === 'mongodb') return 'mongodb'
  if (t === 'mongoose') return 'mongodb'
  if (t === 'mysql') return 'mysql'
  if (t === 'tailwind' || t === 'tailwindcss') return 'tailwind'
  if (t === 'vite') return 'vite'
  if (t === 'd3.js' || t === 'd3') return 'd3'
  if (t === 'docker') return 'docker'
  if (t === 'aws') return 'aws'
  if (t === 'socket.io') return 'socketio'

  return ''
}

export const Projects: FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)
  const { t } = useLanguage()

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <SectionWrapper id="projects" title={t.projects.title} code="0x05">
      <div className="px-6 pb-12 pt-8">
        <div className="space-y-0 border-b border-border">
          {projects.map((project, idx) => {
            const isExpanded = expandedIndex === idx

            return (
              <div
                key={project.title}
                className={`hover:bg-muted/10 transition-colors duration-200 ${idx === 0 ? '' : 'border-t border-border'
                  }`}
              >
                {/* Project Header */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full text-left py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    {/* Project Icon */}
                    <div
                      className={`size-10 border rounded-lg shrink-0 mt-0.5 overflow-hidden transition-all duration-300 flex items-center justify-center ${isExpanded
                          ? 'border-brand-blue/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                          : 'border-border'
                        }`}
                    >
                      <span className="font-mono text-xs font-bold text-muted-foreground">
                        {project.title
                          .split(' ')
                          .slice(0, 2)
                          .map((word) => word[0])
                          .join('')}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-xs text-muted-foreground/80 mt-1 max-w-[620px]">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-2 sm:mt-0">
                    <span className="font-mono text-[11px] text-muted-foreground/50">
                      {project.date}
                    </span>

                    <div className="text-muted-foreground border border-border/60 p-1 rounded hover:text-foreground transition-colors bg-background">
                      {isExpanded ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Case Study */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: 'easeInOut',
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-0 sm:pl-14 pr-2 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Left Column */}
                          <div className="space-y-4">
                            <div className="space-y-1.5">
                              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">
                                <ShieldAlert className="w-3.5 h-3.5 text-muted-foreground/50" />
                                {t.extra.projects.labels.problem}
                              </span>

                              <p className="text-xs text-muted-foreground/80 leading-relaxed pl-5 border-l border-border/50">
                                {project.problem}
                              </p>
                            </div>

                            <div className="space-y-1.5">
                              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">
                                <Terminal className="w-3.5 h-3.5 text-muted-foreground/50" />
                                {t.extra.projects.labels.approach}
                              </span>

                              <p className="text-xs text-muted-foreground/80 leading-relaxed pl-5 border-l border-border/50">
                                {project.approach}
                              </p>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-4">
                            <div className="space-y-1.5">
                              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">
                                <Cpu className="w-3.5 h-3.5 text-muted-foreground/50" />
                                {t.extra.projects.labels.infra}
                              </span>

                              <p className="text-xs text-foreground/80 font-medium leading-relaxed pl-5 border-l border-border/50">
                                {project.infra}
                              </p>
                            </div>

                            <div className="space-y-1.5">
                              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">
                                <Award className="w-3.5 h-3.5 text-brand-blue/70" />
                                {t.extra.projects.labels.outcome}
                              </span>

                              <p className="text-xs text-brand-blue font-medium leading-relaxed pl-5 border-l border-brand-blue/30">
                                {project.outcome}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Technologies + GitHub */}
                        <div className="flex flex-col sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between gap-4 pt-4 border-t border-border/20">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => {
                              const iconKey = getIconKey(tag)

                              return (
                                <span
                                  key={tag}
                                  className="group/tag flex items-center gap-1.5 font-mono text-[9px] border border-border/40 rounded-full px-2.5 py-1 text-muted-foreground bg-background/60 backdrop-blur-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-brand-blue/40 hover:text-foreground hover:bg-brand-blue/[0.04] hover:shadow-[0_0_12px_rgba(59,130,246,0.08)] transition-all duration-300 cursor-default"
                                >
                                  {iconKey && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                      src={`https://skillicons.dev/icons?i=${iconKey}`}
                                      alt={tag}
                                      className="w-3 h-3 object-contain group-hover/tag:scale-110 transition-transform duration-300"
                                      loading="lazy"
                                    />
                                  )}

                                  <span>{tag}</span>
                                </span>
                              )
                            })}
                          </div>

                          {/* GitHub Only */}
                          <div className="flex w-full sm:w-auto shrink-0 border border-border font-mono text-[10px] uppercase tracking-widest font-bold">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn flex flex-1 sm:flex-initial items-center justify-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors duration-200"
                            >
                              <FaGithub className="h-3 w-3" />
                              <span>{t.extra.projects.labels.code}</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Projects
