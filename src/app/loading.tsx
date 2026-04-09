export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-border border-t-accent animate-spin rounded-full" />
        <p className="text-sm text-muted">載入中...</p>
      </div>
    </div>
  );
}
