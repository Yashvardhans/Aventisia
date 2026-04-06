export const ButtonClose = ({ onClick, color = 'gray' }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-lg hover:bg-${color}-100 transition text-${color}-600`}
    aria-label="Close modal"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);