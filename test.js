const trackingText = document.getElementById("tracking-text");
const blackSection = document.getElementById("black-section");

blackSection.addEventListener("mousemove", function (event) {
  const blackSectionRect = blackSection.getBoundingClientRect();
  const mouseY = event.clientY - blackSectionRect.top;
  const blackSectionHeight = blackSectionRect.height;
  const trackingTextY = (mouseY / blackSectionHeight) * 100;
  
  trackingText.style.position = 'absolute'; // Ensure positioning is absolute
  trackingText.style.top = trackingTextY + "%";
});
