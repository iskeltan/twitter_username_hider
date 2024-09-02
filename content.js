// Elementi bulmaya çalışmak için belirli aralıklarla kontrol eden fonksiyon
function removeTargetElement() {
    const targetElement = document.querySelector('[aria-label="Hesap menüsü"]');
    if (targetElement) {
        targetElement.remove();  // Elementi kaldır
        clearInterval(intervalId);  // İşlem başarılı olursa kontrolü durdur
        console.log('Element başarıyla kaldırıldı.');
    } else {
        console.log('Element henüz yüklenmedi. Bekleniyor...');
    }
}

// Her 500 milisaniyede bir elementi kontrol et
const intervalId = setInterval(removeTargetElement, 500);

