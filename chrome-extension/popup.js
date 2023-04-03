function getInnerText() {
  return document.body.innerText;
}

function summarize(text) {
  const apiUrl = 'http://localhost:5000/summarize';
  const requestData = { text: text };

  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('summary').innerText = data.summary;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

chrome.runtime.sendMessage(
  { action: 'executeScript', script: getInnerText },
  (results) => {
    summarize(results[0].result);
  }
);
