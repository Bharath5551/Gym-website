document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("userEmail").innerText = user.email;

  const workouts = {
    Monday: "Chest",
    Tuesday: "Back",
    Wednesday: "Legs",
    Thursday: "Arms",
    Friday: "Shoulders",
    Saturday: "Cardio + Core",
    Sunday: "Rest"
  };

  const list = document.getElementById("workoutList");
  for (const day in workouts) {
    const li = document.createElement("li");
    li.innerText = `${day}: ${workouts[day]}`;
    list.appendChild(li);
  }
});
