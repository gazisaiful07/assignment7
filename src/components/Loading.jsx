const Loading = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">

      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-[#244d3f] border-t-white rounded-full animate-spin"></div>

      {/* Text */}
      <p className="text-[#244d3f] font-semibold text-lg">
        Loading friends...
      </p>

    </div>
  );
}

export default Loading