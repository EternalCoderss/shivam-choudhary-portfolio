export const smoothScroll = (targetId, offset = 0) => {
  const target = document.querySelector(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}; 