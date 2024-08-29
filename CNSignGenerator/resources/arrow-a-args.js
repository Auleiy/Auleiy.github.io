const beamWidthInput = document.getElementById("beam-width-arg-input");
const beamWidthDisplay = document.getElementById("beam-width-arg-display");

beamWidthInput.addEventListener("input", onBeamWidthValueChanged);

function onBeamWidthValueChanged() {
    document.body.style.cssText = "--beam-width: " + beamWidthInput.value;
    beamWidthDisplay.textContent = beamWidthInput.value;
}