export interface StepData {
  id: string;
  letter: string;
  title: string;
  description: string;
  details: string[];
  tools: string[];
}

export interface VisualProps {
  isVisible: boolean;
}