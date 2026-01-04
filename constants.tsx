import React from 'react';
import { StepData } from './types';
import { Radio, Cpu, Activity, Zap, Search, PenTool, GitMerge, CheckCircle } from 'lucide-react';

export const STEPS: StepData[] = [
  {
    id: 'signal',
    letter: 'S',
    title: 'Signal',
    description: 'Finding the problem worth solving.',
    details: [
      "Use Buzzabout.ai to identify pain points.",
      "Example: Search 'Social Media Growth' to find users lacking content ideas.",
      "Goal: Build a dashboard that scrapes Reddit & Newsletters for viral hooks.",
      "Objective: Catch trends before they go mainstream."
    ],
    tools: ['Buzzabout.ai', 'Reddit', 'Market Research']
  },
  {
    id: 'process',
    letter: 'P',
    title: 'Process',
    description: 'Designing the solution with AI assistance.',
    details: [
      "Ask Claude for a Standard Operating Procedure (SOP).",
      "Find design inspiration on Dribbble.",
      "Use Google Gemini to generate UI code from screenshots.",
      "Result: A beautiful, minimalistic dashboard ready for logic."
    ],
    tools: ['Claude AI', 'Google AI Studio (Gemini)', 'Dribbble']
  },
  {
    id: 'engine',
    letter: 'E',
    title: 'Engine',
    description: 'Connecting the backend logic.',
    details: [
      "Set up Node.js and a code editor (Cursor/VS Code).",
      "Build an n8n workflow to scrape data sources.",
      "Enable MCP (Model Context Protocol) in n8n.",
      "Connect the App UI button to the n8n workflow."
    ],
    tools: ['n8n', 'Node.js', 'Cursor/Anti-Gravity', 'MCP']
  },
  {
    id: 'enhance',
    letter: 'E',
    title: 'Enhance',
    description: 'Refining and troubleshooting.',
    details: [
      "Test the 'Scrape Now' functionality.",
      "Use AI (Claude/Cursor) to debug errors (e.g., missing scripts).",
      "Refine the UI to filter news and manage data sources.",
      "Final Polish: Ensure a smooth user experience."
    ],
    tools: ['Debugging', 'AI Code Assistants', 'UI Polish']
  },
];

export const STEP_ICONS: Record<string, React.ReactNode> = {
  signal: <Radio className="w-6 h-6" />,
  process: <PenTool className="w-6 h-6" />,
  engine: <Cpu className="w-6 h-6" />,
  enhance: <Zap className="w-6 h-6" />
};