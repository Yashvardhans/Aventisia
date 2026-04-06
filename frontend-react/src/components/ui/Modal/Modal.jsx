import { ButtonClose } from '../ButtonClose';
export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  width = "400px",
  height = "100vh",
  animation = "slideRight",
  overlayBlur = true,
  closeButton = true,
  closeButtonColor = "gray",
  children,
  containerClassName = "",
  headerClassName = "",
  contentClassName = "",
}) => {
  const animationMap = {
    slideRight: {
      keyframes: `
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `,
      className: "slideInRight",
    },
    slideLeft: {
      keyframes: `
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `,
      className: "slideInLeft",
    },
    slideDown: {
      keyframes: `
        @keyframes slideInDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `,
      className: "slideInDown",
    },
    slideUp: {
      keyframes: `
        @keyframes slideInUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `,
      className: "slideInUp",
    },
    popIn: {
      keyframes: `
        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `,
      className: "popIn",
    },
    fadeIn: {
      keyframes: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `,
      className: "fadeIn",
    },
  };

  const currentAnimation = animationMap[animation] || animationMap.slideRight;

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 transition-opacity duration-300 z-40 ${
          overlayBlur ? "bg-black/50" : "bg-transparent"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 rounded-l-lg right-0 bottom-0 bg-white shadow-2xl overflow-hidden z-50 ${containerClassName}`}
        style={{
          width,
          height,
          animation: `${currentAnimation.className} 0.3s ease-out forwards`,
        }}
      >
        <div className={`flex flex-col h-full ${contentClassName}`}>
          <div
            className={`flex items-center justify-between px-6 py-4 border-b border-gray-300 ${headerClassName}`}
          >
            <div className="flex-1">
              {title && (
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              )}
              {description && (
                <p className="text-sm text-gray-400 mt-0.5 font-medium">{description}</p>
              )}
            </div>
            {!closeButton && (
              <ButtonClose onClick={onClose} color={closeButtonColor} />
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};
