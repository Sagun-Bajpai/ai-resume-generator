let finalResume = "";

function generateResume() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;
  const tone = document.getElementById("tone").value;

  if (!name || !role || !skills || !experience) {
    output.innerText = "Please fill all fields.";
    return;
  }

  let summary = "";

  if (tone === "Fresher") {
    summary = `A motivated ${role} with a strong foundation in ${skills}. Passionate about learning, building projects, and applying skills in real-world environments.`;
  } else if (tone === "Experienced") {
    summary = `Results-driven ${role} with proven experience in ${skills}. Adept at delivering high-quality solutions and working in professional environments.`;
  } else if (tone === "Technical") {
    summary = `Technically skilled ${role} specializing in ${skills}. Strong focus on clean code, performance optimization, and scalable solutions.`;
  } else {
    summary = `Creative ${role} combining skills in ${skills} with innovative thinking to build engaging and user-friendly solutions.`;
  }

  finalResume = `
${name.toUpperCase()}
${role}

PROFESSIONAL SUMMARY
${summary}

SKILLS
${skills}

EXPERIENCE / PROJECTS
${experience}
`;

  document.getElementById("output").innerText = finalResume;

  // Voice output
  const speech = new SpeechSynthesisUtterance(finalResume);
  speechSynthesis.speak(speech);
}

function copyResume() {
  navigator.clipboard.writeText(finalResume);
  alert("Resume copied to clipboard!");
}