import HiringAdvert, { JobType } from "@/components/hiring";
import { getAllJob } from "../services/careerService";
import JobStructuredData from "@/components/JobStructuredData";

export default async function Hiring() {
  const data = await getAllJob();
  const jobs: JobType[] = data.jobs || [];
  return (
    <div className="mt-[160px]">
      <section>
        {jobs.map((job) => (
          <JobStructuredData key={job._id} job={job} />
        ))}
      </section>
      <HiringAdvert />
    </div>
  );
}
