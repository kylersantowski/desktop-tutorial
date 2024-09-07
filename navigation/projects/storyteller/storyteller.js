  // Function to add a phrase to the textarea
  function addPhrase(phrase) {
    document.getElementById("textInput").value += phrase;
  }
  
  // Function to speak the given text
  function speakText(text) {
    if ("speechSynthesis" in window) {
      var utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in this browser.");
    }
  }
  
  // Event listener for the button click
  document.getElementById("speakButton").addEventListener("click", function () {
    var text = document.getElementById("textInput").value;
    speakText(text);
  });