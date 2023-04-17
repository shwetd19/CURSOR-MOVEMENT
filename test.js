const trackingText = document.getElementById("tracking-text");
      const blackSection = document.getElementById("black-section");
      const blackSectionHeight = blackSection.offsetHeight;
      blackSection.addEventListener("mousemove", function (event) {
        let mouseY = event.clientY;
        let trackingTextY = (mouseY / blackSectionHeight) * 100;
        trackingText.style.top = trackingTextY + "%";
      });