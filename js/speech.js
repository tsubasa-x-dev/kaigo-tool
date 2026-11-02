
const textInput = document.getElementById('text-input');
const speakbutton = document.getElementById('speak-button');

let lastClickTime = 0;


speakbutton.addEventListener('click', () => {
    // 時間の計測（後ひく前）//     
    const currentTime = Date.now();
    const interval = currentTime - lastClickTime;
    console.log(`クリックの間隔: ${interval} ミリ秒`);

    const message = textInput.value;

    const utterance = new SpeechSynthesisUtterance(message);
// 【3段階の条件分岐】
    if (lastClickTime === 0) {
// 最初の1回目のクリックは「普通」にする
        utterance.rate = 0.8;
        utterance.volume = 0.6;
    } else if (interval < 200) {
// 【激しい連打】
        utterance.rate = 2.2;
        utterance.volume = 1.0;
    } else if (interval < 400) {
    // 【普通の連打】
        utterance.rate = 1.3;
        utterance.volume = 0.8;
    } else {
    // 【通常】
        utterance.rate = 0.8;
        utterance.volume = 0.6;
    }

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);

    lastClickTime = currentTime;
});