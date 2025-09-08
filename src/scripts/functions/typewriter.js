export default function typewriter() {
    const typewriterElement = document.querySelector(".writerMachine");

    const textToType =
        "Frontend and database developer passionate about creating attractive and functional web experiences";

    const typingSpeed = 75;

    if (typewriterElement) {
        typewriterElement.textContent = "";
        let charIndex = 0;

        function type() {
            if (charIndex < textToType.length) {
                typewriterElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            }
        }

        type();
    }
}
