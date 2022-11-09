const items = document.querySelectorAll(".cta-inner");
const [...cardsPc] = document.querySelectorAll(".card-container-pc");
const [...cardsTel] = document.querySelectorAll(".card");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const nom = document.getElementById("nom");
  const mail = document.getElementById("mail");
  const message = document.getElementById("message");
  const placeholderText = document.getElementById("placeholder");

  const mailREGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;
  const nomREGEX = /^[a-zA-Z\s\é\ê\è\ï\î]+$/;
  if (!mail.value.match(mailREGEX) || !nom.value.match(nomREGEX)) {
    placeholderText.textContent =
      "Oops. Assurez-vous de renseigner une adresse email valide et d'éviter les caractères loufoques !";
    e.preventDefault();
    e.stopImmediatePropagation();
  } else {
    e.preventDefault();
    fetch("php/sendEmail.php", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      mode: "same-origin",
      credentials: "same-origin",
      body: JSON.stringify({
        nom: nom.value,
        mail: mail.value,
        message: message.value,
      }),
    })
      .then((response) => {
        try {
          return response.json();
        } catch (error) {
          console.log(error);
        }
      })
      .then((dataJSON) => {
        try {
          console.log(dataJSON);
        } catch (error) {
          console.log(error);
        }
        if (dataJSON["nom_err"]) {
          nom.insertAdjacentHTML(
            "beforebegin",
            `<p class="text-danger">${dataJSON["nom_err"]}</p>`
          );
        }
        if (dataJSON["mail_err"]) {
          mail.insertAdjacentHTML(
            "beforebegin",
            `<p class="text-danger">${dataJSON["mail_err"]}</p>`
          );
        }
        if (dataJSON["message_err"]) {
          message.insertAdjacentHTML(
            "beforebegin",
            `<p class="text-danger">${dataJSON["message_err"]}</p>`
          );
        }
        if (dataJSON["top_err"]) {
          placeholderText.textContent = dataJSON["top_err"];
        }
        if (
          dataJSON["top_err"] ||
          dataJSON["message_err"] ||
          dataJSON["mail_err"] ||
          dataJSON["nom_err"]
        )
          return;
        if (dataJSON["top_success"]) {
          placeholderText.textContent = dataJSON["top_success"];
          form.reset();
        }
      });
  }
});

const showCompetences = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("opacity-0");
  entry.target.classList.add("animate__jackInTheBox");
};

const observerComp = new IntersectionObserver(showCompetences, {
  root: null,
  threshold: 1,
});

items.forEach((item) => {
  observerComp.observe(item);
});

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener(
  "scroll",
  function () {
    items.forEach((item) => {
      isInViewport(item)
        ? item.classList.replace("opacity-0", "animate__jackInTheBox")
        : null;
    });
  },
  {
    passive: true,
  }
);

const showCardsPc = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("opacity-0");
  entry.target.classList.add("animate__zoomInDown");
};

const observerCardsPc = new IntersectionObserver(showCardsPc, {
  root: null,
  threshold: 0.5,
});

cardsPc.forEach((card) => {
  observerCardsPc.observe(card);
});

const showCardsTel = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("opacity-0");
  entry.target.classList.add("animate__zoomInDown");
};

const observerCardsTel = new IntersectionObserver(showCardsTel, {
  root: null,
  threshold: 0.5,
});

cardsTel.forEach((card) => {
  observerCardsTel.observe(card);
});
