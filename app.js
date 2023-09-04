const adviceId = document.querySelector(".advice__header p span"),
  adviceContent = document.querySelector(".advice__content h1 span"),
  generator = document.querySelector(".advice__generator button");

const getAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");

  const data = await res.json();

  adviceId.innerText = data.slip.id;

  adviceContent.innerText = data.slip.advice;
};

generator.addEventListener("click", getAdvice);
