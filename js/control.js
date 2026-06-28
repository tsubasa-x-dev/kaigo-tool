//停止ボタン//
const stopButton = document.getElementById('stop-button');
const clearButton = document.getElementById('clear-button');

stopButton.addEventListener('click', () => {
    speechSynthesis.cancel();
});
//リセットボタン//
clearButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input');
    textInput.value = '';
});
