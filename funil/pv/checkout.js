// Encontra todas as tags com a classe "checkout-link"
const elements = document.getElementsByClassName("checkout-link");

// Percorre os elementos encontrados e insere o link
for (let i = 0; i < elements.length; i++) {
  elements[i].href = "https://go.perfectpay.com.br/PPU38CN0MBM";
}