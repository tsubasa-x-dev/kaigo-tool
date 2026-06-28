// 1. 入力欄とボタンのDOM操作
const textInput = document.getElementById('text-input');
const speakbutton = document.getElementById('speak-button');

// クリック時間を保存しておくための箱
let lastClickTime = 0;

// ボタンがクリックされた時の処理
speakbutton.addEventListener('click', () => {
    // 時間の計測（後ひく前）//     
    const currentTime = Date.now();
    const interval = currentTime - lastClickTime;
    console.log(`クリックの間隔: ${interval} ミリ秒`);

// 入力欄の文字の読み取り
    const message = textInput.value;

// 音声の台本（設定の箱）を作る
    const utterance = new SpeechSynthesisUtterance(message);
// 【3段階の条件分岐】
    if (lastClickTime === 0) {
// 最初の1回目のクリックは「普通」にする
        utterance.rate = 0.8;
        utterance.volume = 0.6;
    } else if (interval < 200) {
// 【激しい連打】大声 ＋ 爆速（緊急）
        utterance.rate = 2.2;
        utterance.volume = 1.0;
    } else if (interval < 400) {
    // 【普通の連打】少し大きめ ＋ 少し早口（通常連絡）
        utterance.rate = 1.3;
        utterance.volume = 0.8;
    } else {
    // 【のんびり・通常】普通の大きさ ＋ 普通の速さ（日常）
        utterance.rate = 0.8;
        utterance.volume = 0.6;
    }

// 今喋っている途中の声を強制終了して、今すぐ新しいスピードで喋り直す
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);

// 次の繰り返しの計算のために、今回の時間をメモ帳に上書きする
    lastClickTime = currentTime;
});
