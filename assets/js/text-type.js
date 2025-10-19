function TextType(element, options) {
  const defaults = {
    text: ["Default text."],
    typingSpeed: 75,
    pauseDuration: 1500,
    deletingSpeed: 30,
    initialDelay: 500,
    loop: true,
    showCursor: true,
    cursorCharacter: '|',
  };

  const settings = { ...defaults, ...options };

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  element.innerHTML = '';
  const contentSpan = document.createElement('span');
  element.appendChild(contentSpan);

  let cursorSpan;
  if (settings.showCursor) {
    cursorSpan = document.createElement('span');
    cursorSpan.textContent = settings.cursorCharacter;
    cursorSpan.className = 'text-type_cursor'; // Corrected class name
    element.appendChild(cursorSpan);
  }

  function tick() {
    const currentText = settings.text[textIndex];

    if (isDeleting) {
      // Deleting
      charIndex--;
      contentSpan.textContent = currentText.substring(0, charIndex);

      if (charIndex === 0) {
        // Finished deleting
        isDeleting = false;
        textIndex = (textIndex + 1) % settings.text.length;

        if (!settings.loop && textIndex === 0) {
          if (cursorSpan) cursorSpan.style.display = 'none';
          return; // End of animation
        }

        // Pause before typing next string
        setTimeout(tick, settings.pauseDuration);
      } else {
        // Continue deleting
        setTimeout(tick, settings.deletingSpeed);
      }
    } else {
      // Typing
      charIndex++;
      contentSpan.textContent = currentText.substring(0, charIndex);

      if (charIndex === currentText.length) {
        // Finished typing, pause then start deleting
        isDeleting = true;
        setTimeout(tick, settings.pauseDuration);
      } else {
        // Continue typing
        setTimeout(tick, settings.typingSpeed);
      }
    }
  }

  // Initial start
  setTimeout(tick, settings.initialDelay);
}