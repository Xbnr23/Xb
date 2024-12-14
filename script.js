document.getElementById('subscriberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على البيانات المدخلة
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // التحقق من وجود جميع البيانات
    if (!firstName || !lastName || !phone || !startDate || !endDate) {
        alert('يرجى ملء جميع الحقول.');
        return;
    }

    // إضافة المشترك إلى الجدول
    const table = document.getElementById('subscribersTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const currentDate = new Date();
    const endSubscriptionDate = new Date(endDate);
    const subscriptionStatus = endSubscriptionDate < currentDate ? 'منتهية' : 'مفعلة';

    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${phone}</td>
        <td>${startDate}</td>
        <td>${endDate}</td>
        <td class="${subscriptionStatus === 'منتهية' ? 'expired' : 'active'}">${subscriptionStatus}</td>
    `;
    
    // مسح الحقول بعد الإضافة
    document.getElementById('subscriberForm').reset();
});

document.getElementById('filterExpired').addEventListener('click', function() {
    const rows = document.querySelectorAll('#subscribersTable tbody tr');
    
    rows.forEach(row => {
        const statusCell = row.cells[5]; // الخلية الخاصة بحالة الاشتراك
        if (statusCell.textContent === 'مفعلة') {
            row.style.display = 'none'; // إخفاء المشتركين المفعلة اشتراكاتهم
        } else {
            row.style.display = ''; // عرض المشتركين المنتهية اشتراكاتهم
        }
    });
});
