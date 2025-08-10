import { SuccessMessage } from "@/components/auth/success-message"

export default function PasswordResetSuccessPage() {
  return (
    <SuccessMessage
      title="Password Change Successfully"
      message="You've successfully completed the verification process and are now officially a part of the WorkSphere community – where excellence meets opportunity."
      redirectText="Redirecting to Login Page..."
    />
  )
}
