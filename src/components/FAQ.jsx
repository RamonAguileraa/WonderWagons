import React from "react";
import { useNavigate } from "react-router-dom";

function FAQ() {
  const navigate = useNavigate();

  return (
    <div class="max-w-lg mx-auto p-8">
      <details
        class="open:bg-white  open:ring-1 open:ring-black/5 dark:open:ring-black/10 open:shadow-lg p-6 rounded-lg"
        open
      >
        <summary class="text-sm leading-6 text-slate-900 dark:text-black font-semibold select-none">
          Who is behind WonderWagons?
        </summary>
        <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <p className="text-slate-900 dark:text-black">
            We are a team of amateurs college developers ^^
          </p>
        </div>
      </details>
    </div>
  );
}

export default FAQ;
