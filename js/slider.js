// هنا للف علي جميع اللينكات في القائمة
const links = document.querySelectorAll(".itemLinks");
const descriptions = document.querySelectorAll("#descriptionContainer .description");
links.forEach(link => {
    // event (e) دي في معلومات الحركه في الكليك 
    link.addEventListener("click", function(e) {
        // هنا لحذف الكلاس active من جميع اللينكات
        links.forEach(l => l.classList.remove("active"));
        // جلب معلمات اللينك الي تم الكليك عليه
        const clickedLink = e.currentTarget;
    //     جلب معلمات اللينك الي تم الكليك عليه
        const position = clickedLink.getAttribute("data-pos");
        // للتحريك الافقي 25 % فقط  في الاربعه 
        const translateValue =`translate3d(${position * 25}%, 0px, 0)`;
        // بدانا الصوره من صفر عشان القوىَم تبدا من صفر و هيتم حسب 25 في المىه * position
        document.querySelector("#wrapper").style.transform = translateValue;
        clickedLink.classList.add("active");
        // لاخفاء جميع الوصفات
        descriptions.forEach(desc => desc.style.display = "none");
        const activeDesc = document.querySelector(`#descriptionContainer .description[data-pos="${position}"]`);
        // لاظهار الوصف الي تم الكليك عليه
        if (activeDesc) {
            activeDesc.style.display = "block";
        }

    })
})
// لنضيف اكتيف للعنصر الاول الي يساوي صفر وياخد اللون اثناء فتح الصفحة 
if(links.length > 0){
    links[0].classList.add("active");
}
if (descriptions.length > 0) {
    descriptions.forEach(desc => desc.style.display = "none");
    descriptions[0].style.display = "block";
}
