import type { ResumeData } from '@/lib/types';

export interface TemplateProps {
  data: ResumeData;
  theme?: {
      primary: string;
      bg: string;
      text: string;
      sidebarBg: string;
  };
}
