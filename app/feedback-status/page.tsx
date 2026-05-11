// Drop at: app/feedback-status/page.tsx in the ai-lead-generator repo
// Also requires: components/FeedbackStatus.tsx (copy from shared/FeedbackStatus.tsx)

import FeedbackStatus from '@/components/FeedbackStatus';

export default function FeedbackStatusPage() {
  return (
    <FeedbackStatus
      artifactName="AI Lead Generator"
      tableName="ai_lead_generator_feedback"
    />
  );
}
