async function generateChatCompletion() {
  const apiKey = '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'; // Replace 'YOUR_API_KEY' with your actual OpenAI API key

  const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
  };

  const data = {
      model: 'gpt-3.5-turbo',
      messages: [
          {
              role: 'system',
              content: 'You are a helpful assistant.'
          },
          {
              role: 'user',
              content: 'Hello!'
          }
      ]
  };

  try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const completion = await response.json();
      return completion;
  } catch (error) {
      console.error('Error:', error.message);
      return null;
  }
}

generateChatCompletion()
  .then(completion => {
      console.log('Completion:', completion);
  })
  .catch(error => {
      console.error('Error:', error);
  });
