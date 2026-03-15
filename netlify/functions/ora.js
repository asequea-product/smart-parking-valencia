exports.handler = async function(event, context) {
  const url = 'https://valencia.opendatasoft.com/api/explore/v2.1/catalog/datasets/parkings/records?limit=100';
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
