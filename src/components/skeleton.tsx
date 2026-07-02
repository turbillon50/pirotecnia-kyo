'use client';

export function SkeletonCard() {
  return (
    <div className="bg-[#111] border border-white/5 rounded-[var(--r-md)] p-4 animate-pulse">
      <div className="w-full aspect-square rounded-[var(--r-sm)] bg-white/[0.05] mb-3" />
      <div className="h-3.5 w-3/4 rounded bg-white/[0.07] mb-2" />
      <div className="h-3 w-1/2 rounded bg-white/[0.05]" />
    </div>
  );
}

export function SkeletonRow() {
  return (
    <div className="bg-[#111] border border-white/5 rounded-[var(--r-md)] p-4 flex items-center gap-3 animate-pulse">
      <div className="w-12 h-12 rounded-[var(--r-sm)] bg-white/[0.06] shrink-0" />
      <div className="flex-1">
        <div className="h-3.5 w-2/3 rounded bg-white/[0.07] mb-2" />
        <div className="h-3 w-1/3 rounded bg-white/[0.05]" />
      </div>
    </div>
  );
}
