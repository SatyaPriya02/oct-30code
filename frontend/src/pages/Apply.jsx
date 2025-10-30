import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import JobApplicationForm from "../components/JobApplicationForm";

export default function Apply() {
  const { jobId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const jobTitle = location.state?.jobTitle || location.state?.title || "";

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <JobApplicationForm
        jobId={jobId}
        jobTitle={jobTitle}
        onClose={() => navigate(-1)}
        onSuccess={() => navigate(-1)}
      />
    </div>
  );
}
