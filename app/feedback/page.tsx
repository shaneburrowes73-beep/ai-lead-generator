// Drop at: app/feedback/page.tsx in the ai-lead-generator repo
// Also requires: components/FeedbackForm.tsx (copy from shared/FeedbackForm.tsx)

import FeedbackForm, { SmartQuestion } from '@/components/FeedbackForm';

const ARTIFACT = 'AI Lead Generator';
const TABLE = 'ai_lead_generator_feedback';

const QUESTIONS: [SmartQuestion, SmartQuestion, SmartQuestion] = [
  { key: 'q1_leads_in_5min',  label: 'I can generate qualified leads in under 5 minutes.' },
  { key: 'q2_score_accuracy', label: 'The lead scoring matches my own judgement of fit.' },
  { key: 'q3_daily_adoption', label: 'I would use this every day if rolled out to my team.' },
];

export default function FeedbackPage() {
  return <FeedbackForm artifactName={ARTIFACT} tableName={TABLE} questions={QUESTIONS} />;
}
