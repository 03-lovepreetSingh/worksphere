import { SuccessMessage } from "@/components/auth/success-message"

export default function VerificationCompletePage() {
  return (
    <SuccessMessage
      title="Verification Complete"
      message="You've successfully completed the verification process and are now officially a part of the WorkSphere community – where excellence meets opportunity."
      redirectText="Redirecting to complete profile..."
    />
  )
}
