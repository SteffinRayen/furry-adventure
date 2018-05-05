function hello() {
    chrome.tabs.executeScript({
      file: 'alert.js'
    }); 
  }
  
  document.getElementById('acho').addEventListener('click', hello);