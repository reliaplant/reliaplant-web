export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="font-ZenDots text-gray-900 text-3xl md:text-4xl mb-6 tracking-tight">
        RELIAPLANT
      </div>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
