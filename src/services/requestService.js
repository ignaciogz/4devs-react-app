function generateOptionsObj(method, data, withFormData) {
  const body = withFormData ? data : JSON.stringify(data)

  let optionsObj = {
    credentials: 'include',
    method,
    body,
  }

  if (withFormData) return optionsObj

  return {
    ...optionsObj,
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

async function generateRequestWithOptions(url, method, data, withFormData) {
  const options = generateOptionsObj(method, data, withFormData)

  return await fetch(url, options).then((res) => res.json())
}

async function GET(url) {
  return await fetch(url, { credentials: 'include' }).then((res) => res.json())
}

async function POST(url, data = {}, withFormData = false) {
  return await generateRequestWithOptions(url, 'POST', data, withFormData)
}

async function PUT(url, data = {}, withFormData = false) {
  return await generateRequestWithOptions(url, 'PUT', data, withFormData)
}

async function DELETE(url, data = {}) {
  return await generateRequestWithOptions(url, 'DELETE', data, false)
}

export default { GET, POST, PUT, DELETE }
