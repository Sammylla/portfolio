"use client";

import { FormEvent, useState } from "react";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const endpoint = "https://formspree.io/f/xjybkpvl";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    const form = event.currentTarget;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Failed to submit form");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const message = {
    idle: "",
    sending: "SENDING...",
    success: "MESSAGE SENT. THANK YOU!",
    error: "FAILED TO SEND. PLEASE TRY AGAIN.",
  }[status];

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <label className="block">
        <span className="mb-3 block text-xs uppercase tracking-widest text-[#2f60ff]">01 / Name</span>
        <input
          type="text"
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="YOUR NAME"
          className="w-full border-0 border-b border-white/35 bg-transparent px-0 py-3 text-lg text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#2f60ff]"
        />
      </label>

      <label className="block">
        <span className="mb-3 block text-xs uppercase tracking-widest text-[#2f60ff]">02 / Email</span>
        <input
          type="email"
          name="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="YOUR@EMAIL.COM"
          className="w-full border-0 border-b border-white/35 bg-transparent px-0 py-3 text-lg text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#2f60ff]"
        />
      </label>

      <label className="block">
        <span className="mb-3 block text-xs uppercase tracking-widest text-[#2f60ff]">03 / Message</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={4}
          placeholder="WRITE YOUR MESSAGE..."
          className="w-full resize-none border-0 border-b border-white/35 bg-transparent px-0 py-3 text-lg text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#2f60ff]"
        />
      </label>

      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className={`text-[10px] uppercase tracking-widest ${status === "error" ? "text-red-400" : "text-white/60"}`} aria-live="polite">
          {message}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="border border-[#2f60ff] bg-[#2f60ff] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-transparent disabled:cursor-wait disabled:opacity-50"
        >
          {status === "sending" ? "SENDING..." : "SEND MESSAGE >"}
        </button>
      </div>
    </form>
  );
}
