function form(ID) {
  return document.getElementById(`${ID}`)}
function cetak() {
  let isi = form("isi");
  let inp = form("input1");
  let inp2 = form("input2");
  let hasil = Number(inp.value) + Number(inp2.value);
  if (inp.value !== "") {
    if (inp2.value !== "") {
      isi.innerHTML = `<a class="hasil">result is ${hasil}</a>`;
    } else {
      isi.innerHTML = '<a class="hasil">Input Invalid</a>';
    }
  } else {
    isi.innerHTML = '<a class="hasil">Input Invalid</a>';
  }
}
function gambar() {
  window.location.href = "beta.html";
}
function login() {
  let username = form("username");
  let password = form("password");
  let status = form("status");
  if (username.value !== "" && password.value !== "") {
    if (username.value.length >= 5 && password.value.length >= 5) {
      status.innerHTML = "accepted";
      window.location.replace("options.html");
    } else {
      status.innerHTML = "minimum input are five characters";
    }
  } else {
    status.innerHTML = "invalid username or password";
  }
  username.value = "";
}
function old() {
  window.location.href = "main.html";
}
function newest() {
  window.location.href = "math.html";
}
function passwordGenerator() {
  window.location.href = "passGenerator.html";
}