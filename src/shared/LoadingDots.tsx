const LoadingDots = () => {
  return (
    <div className="loading-dots" aria-live="polite">
      <span className="visually-hidden">Submitting</span>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default LoadingDots;
