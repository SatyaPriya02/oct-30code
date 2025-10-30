// src/components/JobApplicationForm.jsx
import React, { useState } from "react";
import axios from "axios"; // or use your api wrapper: import { api } from "../api/api";

export default function JobApplicationForm({ jobId, jobTitle, onClose, onSuccess }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    currentCompany: "",
    currentDesignation: "",
    experience: "",
    noticePeriod: "",
    expectedSalary: "",
    workPreference: "remote",
    linkedin: "",
    portfolio: "",
    skills: "",
    coverLetter: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [attachments, setAttachments] = useState([]); // optional extra files
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  // validation rules (simple)
  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone)) e.phone = "Invalid phone";
    if (!resumeFile) e.resume = "Resume / CV is required (PDF/DOC/DOCX)";
    // resume size limit 5MB
    if (resumeFile && resumeFile.size > 5 * 1024 * 1024) e.resume = "Resume must be ≤ 5MB";
    // attachments limit — example: total 10MB
    const totalAttachmentsSize = attachments.reduce((s, f) => s + (f.size || 0), 0);
    if (totalAttachmentsSize > 10 * 1024 * 1024) e.attachments = "All attachments must total ≤ 10MB";
    return e;
  };

  const onChange = (key) => (e) => {
    setForm((s) => ({ ...s, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: null }));
  };

  const onResumeChange = (e) => {
    const f = e.target.files[0];
    setResumeFile(f);
    setErrors((prev) => ({ ...prev, resume: null }));
  };

  const onAttachmentsChange = (e) => {
    const list = Array.from(e.target.files);
    setAttachments(list);
    setErrors((prev) => ({ ...prev, attachments: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length) return;

    setLoading(true);
    try {
      // Build form-data
      const fd = new FormData();
      fd.append("jobId", jobId || "");
      fd.append("jobTitle", jobTitle || "");
      Object.keys(form).forEach((k) => fd.append(k, form[k] ?? ""));
      fd.append("resume", resumeFile);
      attachments.forEach((file, idx) => fd.append(`attachments[${idx}]`, file));

      // Example axios request (adjust base URL or use your api wrapper)
      const res = await axios.post("/api/apply", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // expected: { success: true, message: "...", data: {...} }
      if (res.data && res.data.success) {
        setMessage({ type: "success", text: res.data.message || "Application submitted successfully." });
        setForm({
          fullName: "",
          email: "",
          phone: "",
          location: "",
          currentCompany: "",
          currentDesignation: "",
          experience: "",
          noticePeriod: "",
          expectedSalary: "",
          workPreference: "remote",
          linkedin: "",
          portfolio: "",
          skills: "",
          coverLetter: "",
        });
        setResumeFile(null);
        setAttachments([]);
        if (onSuccess) onSuccess(res.data);
        // optionally auto-close after some time:
        // setTimeout(() => onClose && onClose(), 1500);
      } else {
        setMessage({ type: "error", text: (res.data && res.data.message) || "Failed to submit application." });
      }
    } catch (err) {
      console.error(err);
      const text = err?.response?.data?.message || err.message || "Submission failed. Please try again.";
      setMessage({ type: "error", text });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Apply for {jobTitle || "this role"}</h2>

      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full name */}
        <label className="flex flex-col">
          <span className="text-sm font-medium">Full name <span className="text-red-500">*</span></span>
          <input aria-label="Full name" value={form.fullName} onChange={onChange("fullName")}
            className={`mt-1 px-3 py-2 border rounded focus:outline-none ${errors.fullName ? "border-red-400" : "border-gray-200"}`} />
          {errors.fullName && <small className="text-red-500 mt-1">{errors.fullName}</small>}
        </label>

        {/* Email */}
        <label className="flex flex-col">
          <span className="text-sm font-medium">Email <span className="text-red-500">*</span></span>
          <input aria-label="Email" value={form.email} onChange={onChange("email")}
            className={`mt-1 px-3 py-2 border rounded focus:outline-none ${errors.email ? "border-red-400" : "border-gray-200"}`} />
          {errors.email && <small className="text-red-500 mt-1">{errors.email}</small>}
        </label>

        {/* Phone */}
        <label className="flex flex-col">
          <span className="text-sm font-medium">Phone <span className="text-red-500">*</span></span>
          <input aria-label="Phone" value={form.phone} onChange={onChange("phone")}
            className={`mt-1 px-3 py-2 border rounded focus:outline-none ${errors.phone ? "border-red-400" : "border-gray-200"}`} />
          {errors.phone && <small className="text-red-500 mt-1">{errors.phone}</small>}
        </label>

        {/* Location */}
        <label className="flex flex-col">
          <span className="text-sm font-medium">Location (City, State)</span>
          <input aria-label="Location" value={form.location} onChange={onChange("location")}
            className="mt-1 px-3 py-2 border rounded focus:outline-none border-gray-200" />
        </label>
      </div>

      {/* Job-specific & experience rows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Current company</span>
          <input value={form.currentCompany} onChange={onChange("currentCompany")} className="mt-1 px-3 py-2 border rounded focus:outline-none border-gray-200" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Current designation</span>
          <input value={form.currentDesignation} onChange={onChange("currentDesignation")} className="mt-1 px-3 py-2 border rounded focus:outline-none border-gray-200" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Years of experience</span>
          <input type="number" min="0" value={form.experience} onChange={onChange("experience")} className="mt-1 px-3 py-2 border rounded focus:outline-none border-gray-200" />
        </label>
      </div>

      {/* notice, salary, preference */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Notice period</span>
          <input value={form.noticePeriod} onChange={onChange("noticePeriod")} placeholder="e.g. 1 month / Immediate" className="mt-1 px-3 py-2 border rounded focus:outline-none border-gray-200" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Expected salary</span>
          <input value={form.expectedSalary} onChange={onChange("expectedSalary")} placeholder="₹ / year" className="mt-1 px-3 py-2 border rounded focus:outline-none border-gray-200" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Work preference</span>
          <select value={form.workPreference} onChange={onChange("workPreference")} className="mt-1 px-3 py-2 border rounded focus:outline-none border-gray-200">
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">On-site</option>
          </select>
        </label>
      </div>

      {/* Links & skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">LinkedIn profile</span>
          <input value={form.linkedin} onChange={onChange("linkedin")} placeholder="https://linkedin.com/in/yourname" className="mt-1 px-3 py-2 border rounded focus:outline-none border-gray-200" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Portfolio / Website</span>
          <input value={form.portfolio} onChange={onChange("portfolio")} placeholder="Optional" className="mt-1 px-3 py-2 border rounded focus:outline-none border-gray-200" />
        </label>
      </div>

      {/* Skills and cover letter */}
      <label className="flex flex-col mt-4">
        <span className="text-sm font-medium">Skills (comma separated)</span>
        <input value={form.skills} onChange={onChange("skills")} placeholder="React, Node.js, SQL, AWS" className="mt-1 px-3 py-2 border rounded focus:outline-none border-gray-200" />
      </label>

      <label className="flex flex-col mt-4">
        <span className="text-sm font-medium">Cover letter / message</span>
        <textarea value={form.coverLetter} onChange={onChange("coverLetter")} rows="5" placeholder="Write a short message to the recruiter (optional)" className="mt-1 px-3 py-2 border rounded focus:outline-none border-gray-200"></textarea>
      </label>

      {/* File uploads */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Upload resume (PDF / DOCX) <span className="text-red-500">*</span></span>
          <input type="file" accept=".pdf,.doc,.docx" onChange={onResumeChange} className="mt-2" />
          {resumeFile && <small className="text-sm text-gray-600 mt-1">Selected: {resumeFile.name}</small>}
          {errors.resume && <small className="text-red-500 mt-1 block">{errors.resume}</small>}
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Attachments (certificates, portfolio) — optional</span>
          <input type="file" accept=".pdf,.jpg,.png,.docx" onChange={onAttachmentsChange} multiple className="mt-2" />
          {attachments.length > 0 && <small className="text-sm text-gray-600 mt-1">{attachments.length} file(s) selected</small>}
          {errors.attachments && <small className="text-red-500 mt-1 block">{errors.attachments}</small>}
        </label>
      </div>

      {/* Consent */}
      <label className="flex items-start gap-2 mt-4">
        <input type="checkbox" required className="mt-1" />
        <span className="text-sm text-gray-700">I confirm that the information provided is correct and I consent to background checks if required.</span>
      </label>

      {/* Buttons */}
      <div className="mt-6 flex items-center gap-3">
        <button type="submit" disabled={loading} className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-lg shadow hover:opacity-90 transition">
          {loading ? "Submitting..." : "Submit Application"}
        </button>
        <button type="button" onClick={() => onClose && onClose()} className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition">
          Cancel
        </button>
      </div>
    </form>
  );
}
