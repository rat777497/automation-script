// دالة لتنفيذ العمليات باستخدام الاسم
function processName(name, index) {
  // إزالة علامات الاقتباس إذا كانت موجودة
  name = name.replace(/^"|"$/g, "").trim(); // إزالة علامات الاقتباس من البداية والنهاية
  setTimeout(() => {
    let clearIcon = document.querySelector(
      "#CasePageCaseOwnerLookupEdit-clear-icon"
    );
    if (clearIcon) {
      clearIcon.click();
      console.log("🔹 تم الضغط على أيقونة المسح.");
    } else {
      console.log("⚠️ لم يتم العثور على الأيقونة.");
    }
  }, 1000 * index); // الانتظار حسب الفهرس

  setTimeout(() => {
    let searchInput = document.querySelector("#CasePageCaseOwnerLookupEdit-el");
    if (searchInput) {
      searchInput.value = name; // إدخال الاسم في الحقل
      console.log("🔹 تم إدخال القيمة في حقل النص.");
      let event = new Event("input", { bubbles: true });
      searchInput.dispatchEvent(event);
    } else {
      console.log("⚠️ لم يتم العثور على الحقل النصي.");
    }
  }, 2000 * index); // الانتظار حسب الفهرس

  setTimeout(() => {
    let rightIcon = document.querySelector(
      "#CasePageCaseOwnerLookupEdit-right-icon"
    );
    if (rightIcon) {
      rightIcon.click();
      console.log("🔹 تم الضغط على أيقونة البحث.");
    } else {
      console.log("⚠️ لم يتم العثور على الأيقونة.");
    }
  }, 3000 * index); // الانتظار حسب الفهرس

  setTimeout(() => {
    // البحث عن العنصر الذي يحتوي على الكلاس المحدد
    let gridItem = document.querySelector(
      ".grid-listed-row.grid-active-selectable"
    );

    if (gridItem) {
      // إضافة الكلاس الجديد
      gridItem.classList.add("grid-row-selected");
      console.log("🔹 تم إضافة الكلاس grid-row-selected.");

      // إذا أردت محاكاة الضغط على العنصر، يمكنك تنفيذ التالي:
      gridItem.click();
      console.log("🔹 تم الضغط على العنصر.");
    } else {
      console.log("⚠️ لم يتم العثور على العنصر.");
    }
  }, 500); // يمكنك تعديل الوقت هنا حسب الحاجة

  setTimeout(() => {
    let selectButton = document.querySelector('[data-tag="SelectButton"]');
    if (selectButton) {
      selectButton.click();
      console.log("🔹 تم الضغط على زر Select.");
    } else {
      console.log("⚠️ لم يتم العثور على زر Select.");
    }
  }, 1000); // الانتظار حسب الفهرس
}

// استدعاء الدالة لجلب البيانات من Google Sheets
fetchDataFromGoogleSheet();
