import { headers } from "next/headers";
import Script from "next/script";

export default function Page() {
  const nonce = headers().get("x-nonce");

  return <Script nonce={nonce}>
    {`console.log("CSP");`}
    </Script>;
}
