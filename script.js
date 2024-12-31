const messages = [
    'ขอให้ปีใหม่ของคุณเต็มไปด้วยความสุขและความสำเร็จนะค้าบ',
    'ขอให้มีสุขภาพแข็งแรงและโชคดีตลอดปีนะจ๊ะ',
    'ขอให้พบแต่สิ่งดีๆ ในปี 2025 นะค้าบ',
    'ขอให้ปีใหม่มีแต่คนรักนะจ๊ะ',
    'ขอให้ปีใหม่เต็มไปด้วยเสียงหัวเราะและความสุขนะค้าบ!'
];

const gifUrl = 'https://i.pinimg.com/originals/b1/6b/78/b16b78a667cab34bd68e2a91148dcf02.gif';

function openNewTabWithMessage() {
    const randomMessageIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomMessageIndex];

    const newTab = window.open('', '_blank');
    newTab.document.write(`
        <html lang="th">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>คำอวยพรปีใหม่</title>
                <!-- ลิงก์ไปที่ฟอนต์ Sarabun จาก Google Fonts -->
                <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Sarabun', sans-serif;
                        background-color: #f4f4f9;
                        color: #333;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #2a9d8f;
                    }
                    p {
                        font-size: 24px;
                    }
                    .gif {
                        margin-top: 30px;
                    }
                </style>
            </head>
            <body>
                <h1>สุขสันต์วันปีใหม่ 2025!</h1>
                <p>${randomMessage}</p>
                <div class="gif">
                    <img src="${gifUrl}" alt="Happy New Year GIF" width="500">
                </div>
            </body>
        </html>
    `);
    newTab.document.close();
}
