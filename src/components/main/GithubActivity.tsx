'use client'

import React, { useEffect, useState } from 'react'
import { GitHubCalendar, Activity } from 'react-github-calendar'
import type { ThemeInput } from 'react-activity-calendar'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/language-provider'
import SectionWrapper from '@/components/ui/section-wrapper'

const LIGHT_SWATCHES: string[] = [
  '#ebedf0',
  '#9be9a8',
  '#40c463',
  '#30a14e',
  '#216e39',
]

const DARK_SWATCHES: string[] = [
  '#161b22',
  '#0e4429',
  '#006d32',
  '#26a641',
  '#39d353',
]

const RAMP: ThemeInput = {
  light: LIGHT_SWATCHES,
  dark: DARK_SWATCHES,
}

export const GithubActivity: React.FC = () => {
  const { theme } = useTheme()
  const { t } = useLanguage()

  const [mounted, setMounted] = useState(false)
  const [total, setTotal] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use light theme during SSR and initial hydration.
  // After mounting, use the actual selected theme.
  const scheme = mounted && theme === 'dark' ? 'dark' : 'light'

  // Explicitly typed arrays prevent the "possibly undefined" error.
  const swatches: string[] =
    scheme === 'dark' ? DARK_SWATCHES : LIGHT_SWATCHES

  const captureTotal = (contributions: Activity[]) => {
    const currentTotal = contributions.reduce(
      (sum: number, day: Activity) => sum + day.count,
      0
    )

    if (total !== currentTotal) {
      setTimeout(() => {
        setTotal(currentTotal)
      }, 0)
    }

    return contributions
  }

  return (
    <SectionWrapper
      id="github-activity"
      title={t.contributions.title}
      code="0x02"
    >
      <div className="px-6 pb-10 pt-8">
        <div className="w-full">
          <div className="w-full overflow-x-auto scrollbar-hide">
            {mounted ? (
              <GitHubCalendar
                username="ankitmrj"
                colorScheme={scheme}
                theme={RAMP}
                blockSize={12}
                blockMargin={4}
                blockRadius={0}
                fontSize={13}
                transformData={captureTotal}
                showColorLegend={false}
                showTotalCount={false}
                className="min-[880px]:w-full min-[880px]:[&_svg]:!h-auto min-[880px]:[&_svg]:!w-full min-[880px]:[&_svg]:!max-w-none"
                style={{
                  color: 'var(--muted-foreground)',
                }}
                tooltips={{
                  activity: {
                    withArrow: true,
                    text: (activity) =>
                      `${activity.count === 0 ? 'No' : activity.count} ${activity.count === 1
                        ? 'contribution'
                        : 'contributions'
                      } · ${new Date(
                        activity.date
                      ).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}`,
                  },
                }}
              />
            ) : (
              <div className="h-[180px] w-full animate-pulse" />
            )}
          </div>

          <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between">
            <span className="truncate font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 tabular-nums">
              {total !== null ? (
                `${total.toLocaleString('en-US')} ${t.contributions.totalCount
                }`
              ) : (
                <span className="animate-pulse">
                  {t.contributions.loading}
                </span>
              )}
            </span>

            <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                Less
              </span>

              <div className="flex items-center gap-1">
                {swatches.map((color, i) => (
                  <span
                    key={i}
                    className="h-[11px] w-[11px] border border-border/40"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                More
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default GithubActivity
