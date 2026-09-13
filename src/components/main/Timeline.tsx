'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'
import { Plus, Minus, Briefcase } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import SectionWrapper from '@/components/ui/section-wrapper'

const experience = {
  id: 1,
  company: 'Accenture',
  role: 'Associate Software Engineer Intern',
  location: 'Bangalore, Karnataka',
  date: 'May 2026 – July 2026',
  description:
    'Worked on a US-based enterprise application for Valet Living LLC, contributing to application development and feature implementation.',
  achievements: [
    'Contributed to the development of enterprise application features.',
    'Worked across frontend and backend components to implement application functionality.',
    'Collaborated with the development team on software engineering tasks.',
  ],
  tags: ['Node.js', 'React.js', 'SQL'],
}

const getIconKey = (tag: string): string => {
  const t = tag.toLowerCase().trim()

  if (t === 'node.js' || t === 'nodejs') return 'nodejs'
  if (t === 'react' || t === 'react.js') return 'react'
  if (t === 'sql') return 'mysql'

  return ''
}

export const Timeline: FC = () => {
  const [expanded, setExpanded] = useState(true)
  const { t } = useLanguage()

  return (
    <SectionWrapper id="experience" title={t.experience.title} code="0x04">
      <div className="px-6 pb-10 pt-8">
        <div className="border-b border-border">
          <div className="hover:bg-muted/10 transition-colors duration-200">
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full text-left py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="size-10 border border-border rounded-md bg-white flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </div>

                <div>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {experience.role}
                  </h3>

                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    {experience.company} • {experience.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-2 sm:mt-0">
                <span className="font-mono text-[11px] text-muted-foreground">
                  {experience.date}
                </span>

                <div className="text-muted-foreground border border-border p-1 rounded">
                  {expanded ? (
                    <Minus className="h-3 w-3" />
                  ) : (
                    <Plus className="h-3 w-3" />
                  )}
                </div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-0 sm:pl-14 pr-2 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>

                    <ul className="space-y-2.5">
                      {experience.achievements.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-foreground/85 flex items-start gap-2.5 leading-relaxed"
                        >
                          <span className="text-brand-blue font-mono mt-0.5">
                            &gt;
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {experience.tags.map((tag) => {
                        const iconKey = getIconKey(tag)

                        return (
                          <span
                            key={tag}
                            className="group/tag flex items-center gap-1.5 font-mono text-[10px] border border-border/40 rounded-full px-2.5 py-1 text-muted-foreground bg-background/60 backdrop-blur-sm transition-all duration-300"
                          >
                            {iconKey && (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={`https://skillicons.dev/icons?i=${iconKey}`}
                                alt={tag}
                                className="w-3.5 h-3.5 object-contain"
                                loading="lazy"
                              />
                            )}

                            <span>{tag}</span>
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Timeline
