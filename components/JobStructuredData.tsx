import Head from "next/head";
import { JobType } from "./hiring";

export default function JobStructuredData({ job }: { job: JobType }) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    location: job.location,
    datePosted: job.createdAt,
    validThrough: job.closing,
    employmentType: job.type,
    mode: job.mode,
    hiringOrganization: {
      "@type": "Organization",
      name: "Shamzbridge Consult",
      sameAs: "https://www.shamzbridgeconsult.org/",
      logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1724055539467/36a4b661-bd4f-488c-88d9-7109189330e5.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abuja, Lagos, Remote",
        addressCountry: "Nigeria",
      },
    },
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
