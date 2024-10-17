document.getElementById('giftButton').addEventListener('click', function() {
    const gift = document.getElementById('gift');
    
    // Kiểm tra nếu quà đang ẩn, thì hiện ra và thêm hiệu ứng
    if (gift.classList.contains('hidden')) {
        gift.classList.remove('hidden');
        gift.classList.add('show');
        gift.style.animation = 'openGift 0.5s ease forwards';
        createHearts(); // Gọi hàm tạo trái tim sau khi món quà hiện ra
    } else {
        // Nếu đã hiện, thì ẩn đi và reset hiệu ứng
        gift.classList.remove('show');
        gift.classList.add('hidden');
        gift.style.animation = 'none'; // Dừng animation
    }
});

// Hàm tạo các trái tim bay
function createHearts() {
    const heartContainer = document.getElementById('heart-container');

    for (let i = 0; i < 20; i++) { // Tạo 20 trái tim
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Tạo vị trí ngẫu nhiên cho các trái tim
        heart.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên theo chiều ngang
        heart.style.animationDelay = `${Math.random() * 2}s`; // Tạo độ trễ ngẫu nhiên

        heartContainer.appendChild(heart);

        // Xóa trái tim sau khi animation kết thúc (sau 2 giây)
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
document.getElementById('giftButton').addEventListener('click', function() {
    const gift = document.getElementById('gift');
    
    // Kiểm tra nếu quà đang ẩn, thì hiện ra và thêm hiệu ứng
    if (gift.classList.contains('hidden')) {
        gift.classList.remove('hidden');
        gift.classList.add('show');
        gift.style.animation = 'openGift 0.5s ease forwards';
        createHearts(); // Gọi hàm tạo trái tim sau khi món quà hiện ra
    } else {
        // Nếu đã hiện, thì ẩn đi và reset hiệu ứng
        gift.classList.remove('show');
        gift.classList.add('hidden');
        gift.style.animation = 'none'; // Dừng animation
    }
});

// Hàm tạo các trái tim bay
function createHearts() {
    const heartContainer = document.getElementById('heart-container');

    for (let i = 0; i < 20; i++) { // Tạo 20 trái tim
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Tạo vị trí ngẫu nhiên cho các trái tim
        heart.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên theo chiều ngang
        heart.style.animationDelay = `${Math.random() * 2}s`; // Tạo độ trễ ngẫu nhiên

        heartContainer.appendChild(heart);

        // Xóa trái tim sau khi animation kết thúc (sau 2 giây)
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
