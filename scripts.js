document.addEventListener('DOMContentLoaded', () => {
  const commandInput = document.getElementById('command-input');
  const terminalOutput = document.getElementById('terminal-output');
  let history = [];

  function showWelcomeBanner() {
    const welcomeMessage = `
            <div>
                <p>Welcome to My Portfolio</p>
                <p>Type <strong>help</strong> for more commands.</p>
                <p>© 2024 Nizar Alghifary</p>
            </div>
        `;
    const bannerElement = document.createElement('div');
    bannerElement.innerHTML = welcomeMessage;
    terminalOutput.appendChild(bannerElement);
  }

  const commands = {
    help: () => {
      return 'Available commands: <strong>help</strong>, <strong>project</strong>, <strong>whois</strong>, <strong>whoami</strong>, <strong>email</strong>, <strong>clear</strong>, <strong>history</strong>, <strong>sudo</strong>, <strong>donate</donate>';
    },
    project: () => {
      return 'Projects: <a href="https://notes-app.nizaralghifary.my.id" target="_blank">Notes App</a>, <a href="https://memoirix.nizaralghifary.my.id" target="_blank">Memoirix</a>, <a href="https://meet.nizaralghifary.my.id" target="_blank">Meet</a>';
    },
    whois: () => {
      return 'I am Nizar, a web developer specialized in creating interactive and dynamic websites.';
    },
    whoami: () => {
      return `You&apos;re currently browsing as a human (maybe).`;
    },
    email: () => {
      window.location.href = 'mailto:contact@nizaralghifary.my.id'
      return 'You can contact me at: <a href="mailto:contact@nizaralghifary.my.id">contact@nizaralghifary.my.id</a>';
    },
    clear: () => {
      terminalOutput.innerHTML = '';
      showWelcomeBanner();
      return '';
    },
    history: () => {
      return history.join('<br>');
    },
    sudo: () => {
      window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=EHIXNLPAxhcOz7BR';
      return 'Redirecting to very important link...';
    },
    donate: () => {
      window.location.href = 'https://saweria.co/nizaralghifary';
      return 'Yang donasi dapet pahala 😁';
    },
  };

  function executeCommand(command) {
    const output = document.createElement('div');
    output.classList.add('output-line');
    output.innerHTML = `<span>$ ${command}</span>`;
    terminalOutput.appendChild(output);

    if (commands[command]) {
      const response = commands[command]();
      if (response) {
        const responseElement = document.createElement('div');
        responseElement.innerHTML = response;
        terminalOutput.appendChild(responseElement);
      }
    } else {
      const errorElement = document.createElement('div');
      errorElement.innerHTML = `Command not found: ${command}`;
      terminalOutput.appendChild(errorElement);
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  commandInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const command = commandInput.value.trim();
      if (command) {
        history.push(command);
        executeCommand(command);
      }
      commandInput.value = '';
    }
  });

  showWelcomeBanner();
});