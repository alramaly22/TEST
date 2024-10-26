function calculate() {
    // الحصول على القيم المدخلة
    const targetAmount = parseFloat(document.getElementById('targetAmount').value);
    const originalFood = parseFloat(document.getElementById('originalFood').value);
    const replacementFood = parseFloat(document.getElementById('replacementFood').value);

    // التحقق من إدخال القيم
    if (isNaN(targetAmount) || targetAmount <= 0) {
        document.getElementById('result').innerText = "يرجى إدخال كمية مطلوبة صالحة.";
        return;
    }

    // حساب كمية البديل باستخدام المعادلة
    const replacementAmount = (replacementFood * targetAmount) / originalFood;

    // عرض النتيجة
    document.getElementById('result').innerText = `الكمية المطلوبة من البديل: ${replacementAmount.toFixed(2)} جم`;
}