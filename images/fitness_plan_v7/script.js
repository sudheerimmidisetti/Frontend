
const workoutData = {
  beginner: [
    [
      { name: "Push-ups", img: "https://via.placeholder.com/400x250?text=Push-ups", tips: ["10 reps.", "Keep your back straight."] },
      { name: "Squats", img: "https://via.placeholder.com/400x250?text=Squats", tips: ["15 reps.", "Maintain posture."] },
      { name: "Plank", img: "https://via.placeholder.com/400x250?text=Plank", tips: ["30 sec.", "Keep core tight."] },
      { name: "Jumping Jacks", img: "https://via.placeholder.com/400x250?text=Jumping+Jacks", tips: ["25 reps.", "Light on feet."] },
      { name: "Arm Circles", img: "https://via.placeholder.com/400x250?text=Arm+Circles", tips: ["30 sec.", "Rotate slowly."] }
    ],
    [
      { name: "Brisk Walk", img: "https://via.placeholder.com/400x250?text=Brisk+Walk", tips: ["20 min.", "Steady pace."] },
      { name: "Crunches", img: "https://via.placeholder.com/400x250?text=Crunches", tips: ["20 reps.", "Engage core."] },
      { name: "Leg Raises", img: "https://via.placeholder.com/400x250?text=Leg+Raises", tips: ["15 reps.", "Control legs."] },
      { name: "High Knees", img: "https://via.placeholder.com/400x250?text=High+Knees", tips: ["20 sec.", "Lift knees high."] },
      { name: "Russian Twists", img: "https://via.placeholder.com/400x250?text=Russian+Twists", tips: ["20 reps.", "Twist fully."] }
    ],
    [
      { name: "Shoulder Taps", img: "https://via.placeholder.com/400x250?text=Shoulder+Taps", tips: ["15 reps.", "Avoid hip sway."] },
      { name: "DB Shoulder Press", img: "https://via.placeholder.com/400x250?text=DB+Shoulder+Press", tips: ["12 reps.", "Steady motion."] },
      { name: "Bicep Curls", img: "https://via.placeholder.com/400x250?text=Bicep+Curls", tips: ["12 reps.", "Full range."] },
      { name: "Tricep Dips", img: "https://via.placeholder.com/400x250?text=Tricep+Dips", tips: ["10 reps.", "Elbows back."] },
      { name: "Wall Push-ups", img: "https://via.placeholder.com/400x250?text=Wall+Push-ups", tips: ["15 reps.", "Body straight."] }
    ],
    [
      { name: "Light Stretching", img: "https://via.placeholder.com/400x250?text=Light+Stretching", tips: ["5 min.", "Deep breathing."] },
      { name: "Neck Rotations", img: "https://via.placeholder.com/400x250?text=Neck+Rotations", tips: ["10 reps.", "Slow circles."] },
      { name: "Arm Stretches", img: "https://via.placeholder.com/400x250?text=Arm+Stretches", tips: ["20 sec.", "Feel the stretch."] },
      { name: "Walking", img: "https://via.placeholder.com/400x250?text=Walking", tips: ["10 min.", "Relaxed pace."] },
      { name: "Breathing", img: "https://via.placeholder.com/400x250?text=Breathing", tips: ["5 min.", "Inhale deeply."] }
    ],
    [
      { name: "Squats", img: "https://via.placeholder.com/400x250?text=Squats", tips: ["15 reps.", "Knees behind toes."] },
      { name: "Lunges", img: "https://via.placeholder.com/400x250?text=Lunges", tips: ["12 reps.", "Stay balanced."] },
      { name: "Calf Raises", img: "https://via.placeholder.com/400x250?text=Calf+Raises", tips: ["20 reps.", "Full extension."] },
      { name: "Glute Bridge", img: "https://via.placeholder.com/400x250?text=Glute+Bridge", tips: ["15 reps.", "Squeeze at top."] },
      { name: "Step-ups", img: "https://via.placeholder.com/400x250?text=Step-ups", tips: ["10 reps.", "Use controlled steps."] }
    ],
    [
      { name: "Jog", img: "https://via.placeholder.com/400x250?text=Jog", tips: ["20 min.", "Consistent pace."] },
      { name: "Mountain Climbers", img: "https://via.placeholder.com/400x250?text=Mountain+Climbers", tips: ["20 reps.", "Drive knees quickly."] },
      { name: "Skaters", img: "https://via.placeholder.com/400x250?text=Skaters", tips: ["15 reps.", "Stay low."] },
      { name: "Side Shuffles", img: "https://via.placeholder.com/400x250?text=Side+Shuffles", tips: ["10 reps.", "Light on feet."] },
      { name: "Butt Kicks", img: "https://via.placeholder.com/400x250?text=Butt+Kicks", tips: ["25 sec.", "Kick heels high."] }
    ],
    [
      { name: "Yoga", img: "https://via.placeholder.com/400x250?text=Yoga", tips: ["20 min.", "Breathe deeply."] },
      { name: "Ankle Rolls", img: "https://via.placeholder.com/400x250?text=Ankle+Rolls", tips: ["10 reps.", "Gentle circles."] },
      { name: "Hamstring Stretch", img: "https://via.placeholder.com/400x250?text=Hamstring+Stretch", tips: ["30 sec.", "Do not bounce."] },
      { name: "Cat-Cow", img: "https://via.placeholder.com/400x250?text=Cat-Cow", tips: ["10 reps.", "Smooth transitions."] },
      { name: "Deep Breathing", img: "https://via.placeholder.com/400x250?text=Deep+Breathing", tips: ["5 min.", "Stay calm."] }
    ]
  ],

  intermediate: [
    [
      { name: "Barbell Bench Press", img: "https://via.placeholder.com/400x250?text=Bench+Press", tips: ["8 reps.", "Controlled descent."] },
      { name: "Incline DB Press", img: "https://via.placeholder.com/400x250?text=Incline+DB+Press", tips: ["10 reps.", "Push evenly."] },
      { name: "Chest Fly", img: "https://via.placeholder.com/400x250?text=Chest+Fly", tips: ["12 reps.", "Stretch and contract."] },
      { name: "Triceps Pushdown", img: "https://via.placeholder.com/400x250?text=Triceps+Pushdown", tips: ["12 reps.", "Elbows tucked."] },
      { name: "DB Kickbacks", img: "https://via.placeholder.com/400x250?text=DB+Kickbacks", tips: ["10 reps.", "Full extension."] }
    ],
    [
      { name: "Deadlifts", img: "https://via.placeholder.com/400x250?text=Deadlifts", tips: ["6 reps.", "Keep back flat."] },
      { name: "Lat Pulldown", img: "https://via.placeholder.com/400x250?text=Lat+Pulldown", tips: ["10 reps.", "Squeeze at bottom."] },
      { name: "Seated Row", img: "https://via.placeholder.com/400x250?text=Seated+Row", tips: ["12 reps.", "Pull to abs."] },
      { name: "Barbell Curl", img: "https://via.placeholder.com/400x250?text=Barbell+Curl", tips: ["10 reps.", "Avoid swinging."] },
      { name: "Hammer Curl", img: "https://via.placeholder.com/400x250?text=Hammer+Curl", tips: ["10 reps.", "Keep wrists neutral."] }
    ],
    [
      { name: "Squats", img: "https://via.placeholder.com/400x250?text=Squats", tips: ["10 reps.", "Break parallel."] },
      { name: "Leg Press", img: "https://via.placeholder.com/400x250?text=Leg+Press", tips: ["12 reps.", "Controlled tempo."] },
      { name: "Walking Lunges", img: "https://via.placeholder.com/400x250?text=Walking+Lunges", tips: ["20 steps.", "Stay upright."] },
      { name: "Leg Curl", img: "https://via.placeholder.com/400x250?text=Leg+Curl", tips: ["12 reps.", "Contract hamstrings."] },
      { name: "Calf Raises", img: "https://via.placeholder.com/400x250?text=Calf+Raises", tips: ["25 reps.", "Hold at top."] }
    ],
    [
      { name: "Push-ups", img: "https://via.placeholder.com/400x250?text=Push-ups", tips: ["20 reps.", "Chest to floor."] },
      { name: "Pull-ups", img: "https://via.placeholder.com/400x250?text=Pull-ups", tips: ["5 reps.", "Chin above bar."] },
      { name: "Plank", img: "https://via.placeholder.com/400x250?text=Plank", tips: ["1 min.", "Flat body."] },
      { name: "Flutter Kicks", img: "https://via.placeholder.com/400x250?text=Flutter+Kicks", tips: ["20 reps.", "Quick motion."] },
      { name: "Side Plank", img: "https://via.placeholder.com/400x250?text=Side+Plank", tips: ["30 sec/side.", "Stack feet."] }
    ],
    [
      { name: "DB Shoulder Press", img: "https://via.placeholder.com/400x250?text=Shoulder+Press", tips: ["10 reps.", "Control path."] },
      { name: "Lateral Raise", img: "https://via.placeholder.com/400x250?text=Lateral+Raise", tips: ["15 reps.", "Elbows soft."] },
      { name: "Front Raise", img: "https://via.placeholder.com/400x250?text=Front+Raise", tips: ["12 reps.", "Avoid swinging."] },
      { name: "Shrugs", img: "https://via.placeholder.com/400x250?text=Shrugs", tips: ["15 reps.", "Squeeze traps."] },
      { name: "Upright Row", img: "https://via.placeholder.com/400x250?text=Upright+Row", tips: ["12 reps.", "Don't lift too high."] }
    ],
    [
      { name: "Treadmill Intervals", img: "https://via.placeholder.com/400x250?text=Treadmill", tips: ["30 min.", "Alternate speeds."] },
      { name: "Jump Rope", img: "https://via.placeholder.com/400x250?text=Jump+Rope", tips: ["2 min.", "Light bounce."] },
      { name: "Burpees", img: "https://via.placeholder.com/400x250?text=Burpees", tips: ["10 reps.", "Explosive jumps."] },
      { name: "Mountain Climbers", img: "https://via.placeholder.com/400x250?text=Mountain+Climbers", tips: ["25 reps.", "Quick pace."] },
      { name: "Box Jumps", img: "https://via.placeholder.com/400x250?text=Box+Jumps", tips: ["10 reps.", "Land softly."] }
    ],
    [
      { name: "Foam Roll", img: "https://via.placeholder.com/400x250?text=Foam+Roll", tips: ["10 min.", "Target tight areas."] },
      { name: "Yoga", img: "https://via.placeholder.com/400x250?text=Yoga", tips: ["30 min.", "Stretch deeply."] },
      { name: "Walking", img: "https://via.placeholder.com/400x250?text=Walking", tips: ["15 min.", "Gentle pace."] },
      { name: "Static Stretching", img: "https://via.placeholder.com/400x250?text=Static+Stretch", tips: ["20 sec each.", "No bouncing."] },
      { name: "Deep Breathing", img: "https://via.placeholder.com/400x250?text=Breathing", tips: ["10 min.", "Relax mind."] }
    ]
  ],

  advanced: [
    [ // Day 1 - Chest & Triceps
      { name: "Weighted Push-ups", img: "https://via.placeholder.com/400x250?text=Weighted+Push-ups", tips: ["15 reps.", "Keep core tight."] },
      { name: "Bench Press", img: "https://via.placeholder.com/400x250?text=Bench+Press", tips: ["6 reps.", "Control the bar on descent."] },
      { name: "Cable Crossover", img: "https://via.placeholder.com/400x250?text=Cable+Crossover", tips: ["12 reps.", "Squeeze at center."] },
      { name: "Skull Crushers", img: "https://via.placeholder.com/400x250?text=Skull+Crushers", tips: ["10 reps.", "Keep elbows stable."] },
      { name: "Diamond Push-ups", img: "https://via.placeholder.com/400x250?text=Diamond+Push-ups", tips: ["15 reps.", "Target triceps."] }
    ],
    [ // Day 2 - Back & Biceps
      { name: "Weighted Pull-ups", img: "https://via.placeholder.com/400x250?text=Weighted+Pull-ups", tips: ["8 reps.", "Chin above bar."] },
      { name: "Deadlifts", img: "https://via.placeholder.com/400x250?text=Deadlifts", tips: ["5 reps.", "Keep back flat."] },
      { name: "T-Bar Row", img: "https://via.placeholder.com/400x250?text=T-Bar+Row", tips: ["10 reps.", "Drive elbows back."] },
      { name: "Preacher Curl", img: "https://via.placeholder.com/400x250?text=Preacher+Curl", tips: ["12 reps.", "Full range."] },
      { name: "Concentration Curl", img: "https://via.placeholder.com/400x250?text=Concentration+Curl", tips: ["12 reps.", "Isolate bicep."] }
    ],
    [ // Day 3 - Legs (Strength)
      { name: "Front Squat", img: "https://via.placeholder.com/400x250?text=Front+Squat", tips: ["8 reps.", "Keep elbows high."] },
      { name: "Bulgarian Split Squat", img: "https://via.placeholder.com/400x250?text=Split+Squat", tips: ["12 reps.", "Drive through heel."] },
      { name: "Hack Squat", img: "https://via.placeholder.com/400x250?text=Hack+Squat", tips: ["10 reps.", "Keep knees aligned."] },
      { name: "Romanian Deadlift", img: "https://via.placeholder.com/400x250?text=RDL", tips: ["10 reps.", "Stretch hamstrings."] },
      { name: "Seated Calf Raise", img: "https://via.placeholder.com/400x250?text=Calf+Raise", tips: ["30 reps.", "Pause at top."] }
    ],
    [ // Day 4 - Conditioning
      { name: "HIIT Sprints", img: "https://via.placeholder.com/400x250?text=HIIT+Sprints", tips: ["30 sec ×8.", "Go all-out."] },
      { name: "Burpee Pull-ups", img: "https://via.placeholder.com/400x250?text=Burpee+Pull-ups", tips: ["12 reps.", "Explode upward."] },
      { name: "Battle Ropes", img: "https://via.placeholder.com/400x250?text=Battle+Ropes", tips: ["30 sec.", "Fast and controlled."] },
      { name: "KB Swings", img: "https://via.placeholder.com/400x250?text=KB+Swings", tips: ["15 reps.", "Drive with hips."] },
      { name: "Plank to Push-up", img: "https://via.placeholder.com/400x250?text=Plank+to+Push-up", tips: ["12 reps.", "Stay stable."] }
    ],
    [ // Day 5 - Shoulders
      { name: "Arnold Press", img: "https://via.placeholder.com/400x250?text=Arnold+Press", tips: ["10 reps.", "Rotate slowly."] },
      { name: "Cable Lateral Raise", img: "https://via.placeholder.com/400x250?text=Cable+Lateral+Raise", tips: ["12 reps.", "Control lift."] },
      { name: "Military Press", img: "https://via.placeholder.com/400x250?text=Military+Press", tips: ["8 reps.", "Keep core tight."] },
      { name: "Barbell Shrugs", img: "https://via.placeholder.com/400x250?text=Barbell+Shrugs", tips: ["20 reps.", "Squeeze traps."] },
      { name: "Reverse Pec Deck", img: "https://via.placeholder.com/400x250?text=Reverse+Pec+Deck", tips: ["15 reps.", "Control back."] }
    ],
    [ // Day 6 - Functional Power
      { name: "Box Jump", img: "https://via.placeholder.com/400x250?text=Box+Jump", tips: ["12 reps.", "Land softly."] },
      { name: "Tire Flips", img: "https://via.placeholder.com/400x250?text=Tire+Flips", tips: ["10 reps.", "Use whole body."] },
      { name: "Sled Push", img: "https://via.placeholder.com/400x250?text=Sled+Push", tips: ["20m.", "Low drive position."] },
      { name: "Agility Ladder Drills", img: "https://via.placeholder.com/400x250?text=Agility+Ladder", tips: ["4 sets.", "Fast feet."] },
      { name: "Jump Lunges", img: "https://via.placeholder.com/400x250?text=Jump+Lunges", tips: ["20 reps.", "Explode upward."] }
    ],
    [ // Day 7 - Recovery
      { name: "Ice Bath", img: "https://via.placeholder.com/400x250?text=Ice+Bath", tips: ["5-10 mins.", "Relax muscles."] },
      { name: "Foam Rolling", img: "https://via.placeholder.com/400x250?text=Foam+Rolling", tips: ["10 mins.", "Slow and controlled."] },
      { name: "Full-body Stretch", img: "https://via.placeholder.com/400x250?text=Stretching", tips: ["10 mins.", "Breathe deep."] },
      { name: "Mobility Work", img: "https://via.placeholder.com/400x250?text=Mobility+Drills", tips: ["10 mins.", "Focus on hips & shoulders."] },
      { name: "Meditation", img: "https://via.placeholder.com/400x250?text=Meditation", tips: ["10 mins.", "Clear your mind."] }
    ]
  ]
};

let currentLevel = '';

function showDays(level) {
  currentLevel = level;
  document.getElementById('levels-page').style.display = 'none';
  document.getElementById('days-page').style.display = 'block';
  document.getElementById('level-title').innerText = level.charAt(0).toUpperCase() + level.slice(1) + " Level";
  document.getElementById('workout-tasks').innerHTML = '';
}

function backToLevels() {
  document.getElementById('days-page').style.display = 'none';
  document.getElementById('levels-page').style.display = 'block';
}

function showWorkouts(day) {
  const workoutDiv = document.getElementById('workout-tasks');
  workoutDiv.innerHTML = '';

  const exercises = workoutData[currentLevel][day - 1] || [];

  let content = `<div class="workout-card"><h3>Day ${day} Workout</h3>`;
  exercises.forEach(ex => {
    content += `
      <div class="exercise">
        <img src="${ex.img}" alt="${ex.name}">
        <ul class="exercise-text">
          <li>${ex.tips[0]}</li>
          <li>${ex.tips[1]}</li>
        </ul>
      </div>`;
  });
  content += `</div>`;

  workoutDiv.innerHTML = content;
  workoutDiv.scrollIntoView({ behavior: 'smooth' });
}
