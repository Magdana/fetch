async function fetchAdvice() {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = response.data.advice;
    document.getElementById("advice").textContent = advice;
  } catch (error) {
    console.error("error fetching advice", error);
    document.getElementById("advice").textContent = "failed to load advice";
  }
}
document.getElementById("advice-button").addEventListener("click", fetchAdvice);
