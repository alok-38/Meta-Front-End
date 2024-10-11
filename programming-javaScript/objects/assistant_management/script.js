let assistantManager = {
  movement: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  experience: 0,
};

function manageTeam() {
  if (assistantManager.socialSkills > 25) {
    console.log("Successfully motivated the team!");
    assistantManager.experience += 10;
  } else {
    console.log("Struggled to connect with the team.");
  }
}

function completeTask(task) {
  console.log(`Completing task: ${task}`);
  assistantManager.socialSkills += 5;
  assistantManager.experience += 5;
  console.log(`New social skills: ${assistantManager.socialSkills}`);
}

function encounterChallenge(challenge) {
  switch (challenge) {
    case "conflict":
      if (assistantManager.socialSkills > 20) {
        console.log("Resolved the conflict successfully!");
      } else {
        console.log("The conflict escalated.");
      }
      break;
  }
}

manageTeam();
completeTask("Prepare presentation");
encounterChallenge("conflict");
