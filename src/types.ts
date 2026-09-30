export type AppView = 'home' | 'containment' | 'recovery';

export type PlatformTab = 'Instagram (Meta)' | 'B: WhatsApp' | 'C: LinkedIn';

export interface ThreatItem {
  id: string;
  title: string;
  subtext: string;
  statusBadge: string;
  statusType: 'rising' | 'steady' | 'easing';
  icon: string;
  description?: string;
  mitigation?: string;
}

export interface IncidentFormData {
  username: string;
  dateOfCompromise: string;
  phoneNumber?: string;
}
