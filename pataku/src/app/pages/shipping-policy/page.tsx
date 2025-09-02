import ShippingPolicy from "@/components/pages/shipping_policy";
import { shippingPolicyMetadata } from "@/constants/metadata";
export const metadata=shippingPolicyMetadata

export default function LoginHome() {
  return (
    <main className="min-h-screen">
      <ShippingPolicy />
    </main>
  );
}
