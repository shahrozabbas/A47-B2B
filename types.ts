
export enum NewsRole {
  EDITORIAL = 'Editorial',
  STANDARDS = 'Standards',
  OPS = 'Newsroom Ops',
  AUDIENCE = 'Audience/SEO'
}

export interface Source {
  id: string;
  name: string;
  type: string;
  status: 'verified' | 'pending' | 'flagged';
  url: string;
}

export interface VerificationResult {
  score: number;
  summary: string;
  trustSignals: string[];
}

export interface ToneProfile {
  formality: number; // 0-100
  objectivity: number; // 0-100
  complexity: number; // 0-100
  urgency: number; // 0-100
  voiceName: string;
}

export interface VoiceAnalysis {
  profile: ToneProfile;
  suggestedAdjustments: string[];
  alignmentScore: number;
}
