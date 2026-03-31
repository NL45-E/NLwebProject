function bilangan() {
  let display = document.getElementById("display");
  let stat = document.getElementById("stat");
  //conditioning//
  if (isNaN(Number(display.innerHTML))) {
    stat.innerHTML = "invalid";
  }
  else if (Number(display.innerHTML) % 2 === 0) {
    stat.innerHTML = "even";
  }
  else {
    stat.innerHTML = "odd";
  }
}
function math() {
  let display = document.getElementById("display");
  //input user//
  let input1 = document.getElementById("angka1");
  let input2 = document.getElementById("angka2");
  //option//
  let option = document.querySelector('input[name="operator"]:checked');
  //conditioning//
  if (option && option.value === "tambah") {
    display.innerHTML = `${Number(input1.value)+Number(input2.value)}`;
  }
  else if (option && option.value === "kurang") {
    display.innerHTML = `${Number(input1.value)-Number(input2.value)
    }`}
  else if (option && option.value === "kali") {
    display.innerHTML = `${Number(input1.value)*Number(input2.value)}`}
  else if (option && option.value === "bagi") {
    display.innerHTML = `${Number(input1.value)/Number(input2.value)}`}
  else {
    display.innerHTML = "invalid";}
  input1.value = "";
  input2.value = "";
}