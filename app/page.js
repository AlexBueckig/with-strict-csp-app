import { headers } from "next/headers";
import Script from "next/script";

export const dynamic = "force-dynamic";

export default function Page() {
  const nonce = headers().get("x-nonce");

  return (
    <main>
      <h1>CSP Test </h1>
      <Script nonce={nonce}>{`console.log("CSP");`}</Script>
    </main>
  );
}
