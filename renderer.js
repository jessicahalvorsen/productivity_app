/*
// Send a request to the main process to retrieve user data
ipcRenderer.send('get-user-first-name', 1);

// Handle the response from the main process
ipcRenderer.on('get-user-first-name-reply', (event, data) => {
    console.log('Received user data:', data);
    document.getElementById('first-name').textContent = `First Name: ${data.error ? 'Error' : data.firstName}`;
  });
  */
  const updateButton = document.getElementById('btn'); 
  const getButton = document.getElementById('get-btn'); 

  updateButton.addEventListener('click', () => {
    console.log("View Script > Update clicked"); 

    const userID = document.getElementById('user-id').value; 
    const firstName = document.getElementById('new-name').value;

    window.Bridge.updateFirstName(userID, firstName); 
  }); 

  getButton.addEventListener('click', () => {
    console.log("View Script > Get clicked"); 

    const userID = document.getElementById('user-id2').value; 
    window.Bridge.getFirstName((userID)); 
    window.Bridge.firstNameReply((firstName) => {
        const firstNameShow = document.getElementById('first-name'); 
        console.log(`this is the first name: ${firstName}`); 
        firstNameShow.textContent = firstName; 
    })
  }); 
  
