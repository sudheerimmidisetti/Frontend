let currentLevel = '';
const workouts = {
  beginner: {
    1: [
      { 
        name: "Bodyweight Squats x15", 
        img: "https://i.ibb.co/6rpj2Hf/dumbbell-squat.jpg",
        steps: ["Stand with feet shoulder-width apart.", "Lower into squat, keeping knees behind toes.", "Push through heels to stand."]
      },
      { 
        name: "Wall Push-ups x10", 
        img: "https://i.ibb.co/RDkDMYv/pushup.jpg",
        steps: ["Stand arm's length from wall.", "Lean forward and bend elbows.", "Push back to start."]
      }
    ],
    2: [
      { 
        name: "Brisk Walk 20 mins", 
        img: "https://i.ibb.co/vz5xd24/treadmill.jpg",
        steps: ["Maintain good posture.", "Swing arms naturally.", "Breathe steadily."]
      }
    ],
  },
  intermediate: {
    1: [
      { 
        name: "Dumbbell Squats x20", 
        img: "https://i.ibb.co/6rpj2Hf/dumbbell-squat.jpg",
        steps: ["Hold weights at shoulders.", "Squat low with control.", "Drive up through heels."]
      }
    ],
  }
};

function showDays(level) {
  currentLevel = level;
  document.getElementById('levels-page').style.display = 'none';
  document.getElementById('days-page').style.display = 'block';
  document.getElementById('level-title').textContent = 
    `${level.charAt(0).toUpperCase() + level.slice(1)} Level - Choose a Day`;
}

function backToLevels() {
  document.getElementById('days-page').style.display = 'none';
  document.getElementById('workout-page').style.display = 'none';
  document.getElementById('levels-page').style.display = 'block';
}

function showWorkouts(day) {
  document.getElementById('days-page').style.display = 'none';
  document.getElementById('workout-page').style.display = 'block';
  document.getElementById('day-title').textContent = `${currentLevel} - Day ${day}`;
  
  const container = document.getElementById('workout-tasks');
  container.innerHTML = '';
  
  workouts[currentLevel][day].forEach((workout, index) => {
    const stepsHTML = workout.steps.map((step, i) => `
      <div class="step">
        <div class="step-number">${i + 1}</div>
        <p>${step}</p>
      </div>
    `).join('');
    
    container.innerHTML += `
      <div class="workout-card">
        <img src="${workout.img}" alt="${workout.name}">
        <h3>
          <input type="checkbox" class="progress-checkbox" id="day-${day}-ex-${index}">
          ${workout.name}
        </h3>
        ${stepsHTML}
      </div>
    `;
  });
  
  workouts[currentLevel][day].forEach((_, index) => {
    const checkbox = document.getElementById(`day-${day}-ex-${index}`);
    if (localStorage.getItem(`${currentLevel}-day-${day}-ex-${index}`)) {
      checkbox.checked = true;
    }
    checkbox.addEventListener('change', (e) => {
      localStorage.setItem(
        `${currentLevel}-day-${day}-ex-${index}`,
        e.target.checked
      );
    });
  });
}

function backToDays() {
  document.getElementById('workout-page').style.display = 'none';
  document.getElementById('days-page').style.display = 'block';
}