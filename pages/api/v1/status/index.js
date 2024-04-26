function status(request, response) {
  response.status(200).json({ Chave: "Testando esse role pra ver no que da." });
}

export default status;
