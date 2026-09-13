'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import { useLanguage } from '@/components/language-provider'
import SectionWrapper from '@/components/ui/section-wrapper'

const SKILLS_LIST =
  'java,cpp,python,js,ts,react,nextjs,nodejs,express,mongodb,mysql,docker,aws,git,linux'

const SKILLS_LIST_MOBILE =
  'java,cpp,python,js,ts,react,nextjs,nodejs,express,mongodb,mysql,docker,aws,git,linux'

const SKILLICONS_URL_MOBILE = `https://skillicons.dev/icons?i=${SKILLS_LIST_MOBILE}&perline=8`

const SKILLICONS_URL_DESKTOP = `https://skillicons.dev/icons?i=${SKILLS_LIST}&perline=15`

export const Skills: FC = () => {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="skills" title={t.skills.title} code="0x01">
      <div className="px-6 pb-10 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          {/* Mobile */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SKILLICONS_URL_MOBILE}
            alt="Ankit Srivastav Tech Stack"
            width="100%"
            className="block min-[880px]:hidden w-full h-auto"
            loading="lazy"
          />

          {/* Desktop */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SKILLICONS_URL_DESKTOP}
            alt="Ankit Srivastav Tech Stack"
            width="100%"
            className="hidden min-[880px]:block w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Skills
