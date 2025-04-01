document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
  });
  
  // ฟังก์ชันสำหรับแสดง/ซ่อนเมนูบนมือถือ
  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }

  function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return false; // ป้องกันการส่งฟอร์ม
    }

    // ข้อมูลตัวอย่าง (สามารถเปลี่ยนเป็นการเชื่อมต่อฐานข้อมูล)
    const validUsers = [
        { user: "Compro", pass: "minny" },
        { user: "user", pass: "password" }
    ];

    const userFound = validUsers.some(user => user.user === username && user.pass === password);

    if (userFound) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", username); // บันทึกสถานะล็อกอิน
        window.location.href = "Weather.html"; // เปลี่ยนหน้าไปยัง Weather.html
        return false;
    } else {
        alert("Invalid username or password!");
        return false;
    }
}

// ฟังก์ชันออกจากระบบ
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "index.html"; // กลับไปหน้า Login
}

// ตรวจสอบสถานะล็อกอิน
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("loggedInUser")) {
        console.log("User is logged in:", localStorage.getItem("loggedInUser"));
    }
});
