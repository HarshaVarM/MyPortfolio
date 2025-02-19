document.addEventListener("mousemove", (e) => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  let bg = document.getElementById("dynamic-bg");
  bg.style.background = `linear-gradient(120deg, rgba(160,233,255,${x}), rgba(135,206,235,${y}))`;
});

document.addEventListener("touchmove", (e) => {
  let x = e.touches[0].clientX / window.innerWidth;
  let y = e.touches[0].clientY / window.innerHeight;
  let bg = document.getElementById("dynamic-bg");
  bg.style.background = `linear-gradient(120deg, rgba(160,233,255,${x}), rgba(135,206,235,${y}))`;
});

function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  let modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
function toggleCert(certId) {
  let certBlock = document.getElementById(certId);
  let parentBlock = certBlock.parentElement;

  if (certBlock.style.display === "block") {
    certBlock.style.display = "none";
    parentBlock.classList.remove("cert-open");
  } else {
    certBlock.style.display = "block";
    parentBlock.classList.add("cert-open");
  }
}

function toggleLeadership(leaderId) {
  let leaderBlock = document.getElementById(leaderId);
  let parentBlock = leaderBlock.parentElement;

  if (leaderBlock.style.display === "block") {
    leaderBlock.style.display = "none";
    parentBlock.classList.remove("leader-open");
  } else {
    leaderBlock.style.display = "block";
    parentBlock.classList.add("leader-open");
  }
}
