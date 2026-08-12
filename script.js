// รอให้โหลด DOM ครบถ้วน
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionBtn');
    const message = document.getElementById('message');

    // ตรวจสอบว่ามีองค์ประกอบครบไหม
    if (button && message) {
        button.addEventListener('click', () => {
            // สลับคลาสเพื่อแสดงหรือซ่อนข้อความ
            if (message.classList.contains('hidden')) {
                message.classList.remove('hidden');
                message.classList.add('visible');
                button.textContent = 'ซ่อนข้อความ';
            } else {
                message.classList.remove('visible');
                message.classList.add('hidden');
                button.textContent = 'คลิกดูความเปลี่ยนแปลง';
            }
        });
    }
});
