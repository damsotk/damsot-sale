import {
  SiJavascript, SiReact, SiTypescript, SiNextdotjs, SiMysql, SiHtml5,
  SiCss3, SiNodedotjs, SiExpress
} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'

export const icons = {
  javascript: SiJavascript,
  react: SiReact,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  sql: FaDatabase,
  html: SiHtml5,
  css: SiCss3,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mysql: SiMysql,
} as const

export type IconKey = keyof typeof icons

export interface Technology {
  name: string
  duration: string
  icon: IconKey
}

export const technologies: Technology[] = [
  { name: 'React', duration: '2 years', icon: 'react' },
  { name: 'Next.js', duration: '6 months', icon: 'nextjs' },
  { name: 'JavaScript', duration: '3 years', icon: 'javascript' },
  { name: 'TypeScript', duration: '2 years', icon: 'typescript' },
  { name: 'SQL', duration: '2 years', icon: 'sql' },
  { name: 'HTML', duration: '4 years', icon: 'html' },
  { name: 'CSS', duration: '4 years', icon: 'css' },
  { name: 'Node.js', duration: '1 year', icon: 'nodejs' },
  { name: 'Express', duration: '1 year', icon: 'express' },
  { name: 'MySQL', duration: '2 years', icon: 'mysql' },
]

export interface HistoryItem {
  year: string
  months: {
    [month: string]: string[]
  }
}
export const history: HistoryItem[] = [
  {
    year: "2022",
    months: {
      july: ["JavaScript"],
      october: ["HTML&CSS", "IT STEP Courses"],
      December: ["JavaScript", "Advanced"],
    },
  },
  {
    year: "2025",
    months: {
      january: ["Started portfolio website"],
      may: ["Work with clients"],
    },
  },
]
