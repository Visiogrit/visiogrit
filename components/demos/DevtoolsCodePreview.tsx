export function DevtoolsCodePreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl shadow-cyan-500/10">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 font-mono text-[10px] text-slate-500">api-console</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
        <code>
          <span className="text-slate-500">$ </span>
          <span className="text-cyan-300">curl</span>
          <span className="text-slate-300"> https://api.example.com/v1/events \</span>
          {"\n"}
          <span className="text-slate-300">  -H </span>
          <span className="text-emerald-300">&quot;Authorization: Bearer sk_live_···&quot;</span>
          {"\n\n"}
          <span className="text-slate-500">{"{"}</span>
          {"\n"}
          <span className="text-violet-300">  &quot;id&quot;</span>
          <span className="text-slate-300">: </span>
          <span className="text-emerald-300">&quot;evt_8f2a&quot;</span>
          <span className="text-slate-300">,</span>
          {"\n"}
          <span className="text-violet-300">  &quot;status&quot;</span>
          <span className="text-slate-300">: </span>
          <span className="text-emerald-300">&quot;delivered&quot;</span>
          <span className="text-slate-300">,</span>
          {"\n"}
          <span className="text-violet-300">  &quot;latency_ms&quot;</span>
          <span className="text-slate-300">: </span>
          <span className="text-amber-300">42</span>
          {"\n"}
          <span className="text-slate-500">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}
