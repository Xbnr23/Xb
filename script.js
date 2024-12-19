const subscriptionForm = document.getElementById("subscriptionForm");
const activeSubscriptions = document.getElementById("activeSubscriptions");
const expiredSubscriptions = document.getElementById("expiredSubscriptions");

// تخزين البيانات
let subscriptions = [];

// إضافة مشترك جديد
subscriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const price = document.getElementById("price").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  const newSubscription = {
    firstName,
    lastName,
    phone,
    price,
    startDate,
    endDate,
  };

  subscriptions.push(newSubscription);
  updateSubscriptions();

  subscriptionForm.reset();
});

// function updateSubscriptions() {
  activeSubscriptions.innerHTML = "";
  expiredSubscriptions.innerHTML = "";

  const today = new Date().toISOString().split("T")[0];

  subscriptions.forEach((sub) => {
    const subscriptionItem = document.createElement("div");
    subscriptionItem.classList.add("subscription-item");

    // تفاصيل المشترك
    subscriptionItem.innerHTML = `
      <p><strong>الاسم:</strong> ${sub.firstName} ${sub.lastName}</p>
      <p><strong>رقم الهاتف:</strong> ${sub.phone}</p>
      <p><strong>السعر:</strong> ${sub.price} دج</p>
      <p><strong>تاريخ البداية:</strong> ${sub.startDate}</p>
      <p><strong>تاريخ الانتهاء:</strong> ${sub.endDate}</p>
    `;

    // إضافة الاشتراك حسب الحالة
    if (sub.endDate >= today) {
      activeSubscriptions.appendChild(subscriptionItem);
    } else {
      expiredSubscriptions.appendChild(subscriptionItem);
    }
  });
}
