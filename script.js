(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // password visibility toggles (used in multiple auth pages)
  document.querySelectorAll(".toggle-password[data-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const input = targetId ? document.getElementById(targetId) : null;
      if (!input) return;

      input.type = input.type === "password" ? "text" : "password";
    });
  });
})();

