//----size----
const f_1 = 'clamp(1rem, 10vw, 5rem)';
const f_1_5 = 'clamp(.95rem, 9.5vw, 4.75rem)';
const f_2 = 'clamp(.9rem, 9vw, 4.5rem)';
const f_2_5 = 'clamp(.85rem, 8.5vw, 4.25rem)';
const f_3 = 'clamp(.8rem, 8vw, 4rem)';
const f_3_5 = 'clamp(.75rem, 7.5vw, 3.75rem)';
const f_4 = 'clamp(.7rem, 7vw, 3.5rem)';
const f_4_5 = 'clamp(.65rem, 6.5vw, 3.25rem)';
const f_5 = 'clamp(.6rem, 6vw, 3rem)';
const f_5_5 = 'clamp(.55rem, 5.5vw, 2.75rem)';
const f_6 = 'clamp(.5rem, 5vw, 2.5rem)';
const f_6_5 = 'clamp(.45rem, 4.5vw, 2.25rem)';
const f_7 = 'clamp(.4rem, 4vw, 2rem)';
const f_7_5 = 'clamp(.35rem, 3.5vw, 1.75rem)';
const f_8 = 'clamp(.3rem, 3vw, 1.5rem)';
const f_8_5 = 'clamp(.25rem, 2.5vw, 1.25rem)';
const f_9 = 'clamp(.2rem, 2vw, 1rem)';
const f_9_5 = 'clamp(.15rem, 1.5vw, .75rem)';
const f_10 = 'clamp(.1rem, 1vw, .5rem)';
//----------------
document.body.style.width = '100%';
document.body.style.minHeight = '100vh';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
//variabel createElement
const header = document.createElement('header');
const h1 = document.createElement('h1');
const icon = document.createElement('i');
const icon2 = document.createElement('i');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const ol = document.createElement('ol');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const p4 = document.createElement('p');
const p5 = document.createElement('p');
const h2 = document.createElement('h2');
const pinInput1 = document.createElement('input');
const pinInput2 = document.createElement('input');
const pinInput3 = document.createElement('input');
const pinInput4 = document.createElement('input');
const pinInput5 = document.createElement('input');
const pinInput6 = document.createElement('input');
const pinInput7 = document.createElement('input');
const pinInput8 = document.createElement('input');
const nameInput = document.createElement('input');
const mulai = document.createElement('a');
const konfirmasi = document.createElement('a');
const ulangi = document.createElement('a');
const setor = document.createElement('a');
const footer = document.createElement('footer');
const divFooter1 = document.createElement('div');
const divFooter2 = document.createElement('div');
const linkFooter1 = document.createElement('a');
const linkFooter2 = document.createElement('a');
const linkFooter3 = document.createElement('a');
const linkFooter4 = document.createElement('a');
const iconFooter1 = document.createElement('i');
const iconFooter2 = document.createElement('i');
const iconFooter3 = document.createElement('i');
const iconFooter4 = document.createElement('i');
//variabel attribute and text manipulation
const textH1 = document.createTextNode(' Tebak Pin AWP');
const textParagraf1 = document.createTextNode('Game menebak pin 8 digit di persembahkan oleh Ahmad Beni Rusli dan segenap admin aodra wattpad');
const textP2 = document.createTextNode('Welcome To :');
const textP4 = document.createTextNode('Masukan Angka PIN dibawah ini');
const textH2 = document.createTextNode('- rules -');
const textMulai = document.createTextNode('Mulai');
const textKonfirmasi = document.createTextNode('Periksa');
const textUlangi = document.createTextNode('Ulangi');
const textSetor = document.createTextNode(' Setor');
const textDivFooter1 = document.createTextNode('© 2023 | Ahmad Beni Rusli - all right reserved');
const textP5 = document.createTextNode('* kamu belum memasukan nama kelompok')
const textLi1 = document.createTextNode('Tekan tombol mulai lalu tebaklah angka pin satu persatu di kolom yang sudah di sediakan dibawah.');
const textLi2 = document.createTextNode('Angka yang dimasukan hanya 1 sampai 9.');
const textLi3 = document.createTextNode('Tebaklah dengan yakin jika sudah selesai mengisi setiap kolom silahkan tekan tombol periksa.');
const textLi4 = document.createTextNode('Jika kolom berwarna merah berarti jawaban kamu salah.');
const textLi5 = document.createTextNode('jika ada pertanyaan bisa ditanyakan ke 088216018165');
//----------------
icon.setAttribute('class', 'fa-solid fa-gear');
icon2.setAttribute('class', 'fa-brands fa-whatsapp');
linkFooter1.setAttribute('href', 'https://wa.me/6288216018165');
linkFooter2.setAttribute('href', 'https://github.com/Abrazax56');
linkFooter3.setAttribute('href', 'https://instagram.com/beni_s.kom');
linkFooter4.setAttribute('href', 'https://tiktok.com/@this.ben');
iconFooter1.setAttribute('class', 'fa-brands fa-whatsapp');
iconFooter2.setAttribute('class', 'fa-brands fa-github');
iconFooter3.setAttribute('class', 'fa-brands fa-instagram');
iconFooter4.setAttribute('class', 'fa-brands fa-tiktok');
//style
header.style.display = 'flex';
header.style.justifyContent = 'center';
header.style.alignItems = 'center';
header.style.flexDirection = 'column';
header.style.width = '100%';
header.style.minHeight = '100vh';
header.style.padding = f_1 + ' ' + f_2;
header.style.boxSizing = 'border-box';
//----------------
p2.style.fontFamily = '"Mulish", Sans-serif';
p2.style.fontSize = f_7_5;
p2.style.fontWeight = '600';
p2.style.color = 'rgba(0, 180, 255, 1)';
//----------------
h1.style.fontSize = f_6;
h1.style.fontFamily = '"Mulish", Sans-serif';
h1.style.fontWeight = '900';
h1.style.color = '#333';
h1.style.marginTop = f_7;
//----------------
div1.style.width = 'min(100%, 500px)';
div1.style.marginTop = f_7;
//----------------
nameInput.setAttribute('placeholder', 'Masukan nama kelompok');
nameInput.style.marginTop = f_7;
nameInput.style.width = 'min(100%, 300px)';
nameInput.style.height = f_6;
nameInput.style.border = 'none';
nameInput.style.backgroundColor = 'rgba(230, 230, 230, 1)';
nameInput.style.textAlign = 'center';
nameInput.style.boxSizing = 'border-box';
nameInput.style.fontSize = f_8_5;
//----------------
p5.style.marginTop = f_7;
p5.style.color = 'rgba(255, 40, 10, 1)';
p5.style.fontSize = f_9;
p5.style.fontFamily = '"Mulish", Sans-serif';
p5.style.display = 'none';
//----------------
p1.style.fontSize = f_8_5;
p1.style.lineHeight = f_7_5;
p1.style.margin = 'auto';
p1.style.textAlign = 'center';
p1.style.fontFamily = '"Mulish", Sans-serif';
p1.style.height = '100%';
//----------------
h2.style.marginTop = f_7;
h2.style.fontSize = f_7;
h2.style.width = 'min(100%, 500px)';
h2.style.textAlign = 'center';
h2.style.fontFamily = '"Mulish", Sans-serif';
h2.style.fontWeight = '800';
//----------------
div2.style.width = 'min(100%, 500px)';
div2.style.marginTop = f_7;
//----------------
ol.setAttribute('type', '1');
ol.style.fontSize = f_8_5;
ol.style.lineHeight = f_7_5;
ol.style.margin = 'auto';
ol.style.fontFamily = '"Mulish", Sans-serif';
ol.style.height = '100%';
//----------------
p4.style.marginTop = f_1;
p4.style.fontSize = f_8_5;
p4.style.fontWeight = '300';
p4.style.color = 'rgba(0, 180, 255, 1)';
p4.style.fontFamily = '"Mulish", Sans-serif';
//----------------
div3.style.width = 'min(100%, 500px)';
div3.style.marginTop = f_7;
div3.style.display = 'flex';
div3.style.justifyContent = 'space-between';
div3.style.alignItems = 'center';
//----------------
const userInput = [pinInput1, pinInput2, pinInput3, pinInput4, pinInput5, pinInput6, pinInput7, pinInput8];
for (let i = 0; i < userInput.length; i++) {
  userInput[i].setAttribute('type', 'number');
  userInput[i].style.width = f_6;
  userInput[i].style.height = f_6;
  userInput[i].style.border = 'none';
  userInput[i].style.backgroundColor = 'rgba(230, 230, 230, 1)';
  userInput[i].style.textAlign = 'center';
  userInput[i].style.boxSizing = 'border-box';
  userInput[i].style.fontSize = f_8_5;
}
//----------------
div5.style.display = 'flex';
div5.style.justifyContent = 'center';
div5.style.alignItems = 'center';
div5.style.gap = f_5;
div5.style.marginTop = f_6_5;
//----------------
mulai.style.padding = f_9_5 + ' ' + f_6;
mulai.style.fontFamily = '"Mulish", Sans-serif';
mulai.style.fontSize = f_8_5;
mulai.style.textDecoration = 'none';
mulai.style.color = 'white';
mulai.style.backgroundColor = 'rgba(0, 180, 255, 1)';
mulai.style.boxShadow = '0 10px 10px rgba(0, 180, 255, .4)';
//----------------
konfirmasi.style.padding = f_9_5 + ' ' + f_6;
konfirmasi.style.fontFamily = '"Mulish", Sans-serif';
konfirmasi.style.fontSize = f_8_5;
konfirmasi.style.textDecoration = 'none';
konfirmasi.style.color = 'white';
konfirmasi.style.backgroundColor = 'rgba(0, 180, 255, 1)';
konfirmasi.style.boxShadow = '0 10px 10px rgba(0, 180, 255, .4)';
konfirmasi.style.display = 'none';
//----------------
ulangi.setAttribute('href', 'index.html');
ulangi.style.padding = f_9_5 + ' ' + f_6;
ulangi.style.fontFamily = '"Mulish", Sans-serif';
ulangi.style.fontSize = f_8_5;
ulangi.style.textDecoration = 'none';
ulangi.style.color = 'white';
ulangi.style.backgroundColor = 'rgba(255, 40, 10, 1)';
ulangi.style.boxShadow = '0 10px 10px rgba(255, 40, 10, .5)';
ulangi.style.display = 'none';
//----------------
setor.style.padding = f_9_5 + ' ' + f_6;
setor.style.fontFamily = '"Mulish", Sans-serif';
setor.style.fontSize = f_8_5;
setor.style.textDecoration = 'none';
setor.style.color = 'white';
setor.style.backgroundColor = 'rgba(90, 255, 90, 1)';
setor.style.boxShadow = '0 10px 10px rgba(90, 255, 90, .5)';
setor.style.display = 'none';
//----------------
div4.style.fontSize = f_8_5;
div4.style.marginTop = f_7;
div4.style.color = 'rgba(0, 180, 255, 1)';
div4.style.fontWeight = '300';
div4.style.fontFamily = '"Mulish", Sans-serif';
//----------------
footer.style.marginTop = 'clamp(2rem, 20vw, 10rem)';
footer.style.fontFamily = 'Arial';
footer.style.width = '100%';
footer.style.display = 'flex';
footer.style.flexDirection = 'column';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
//----------------
divFooter1.style.color = 'rgba(120, 120, 120, 1)';
divFooter1.style.fontSize = f_9;
//----------------
divFooter2.style.marginTop = f_8;
divFooter2.style.fontSize = f_8_5;
divFooter2.style.display = 'flex';
divFooter2.style.alignItems = 'center';
divFooter2.style.justifyContent = 'center';
divFooter2.style.gap = f_7;
//----------------
linkFooter1.style.color = 'rgba(120, 120, 120, 1)';
linkFooter2.style.color = 'rgba(120, 120, 120, 1)';
linkFooter3.style.color = 'rgba(120, 120, 120, 1)';
linkFooter4.style.color = 'rgba(120, 120, 120, 1)';
//penempatan element
document.body.appendChild(header);
//----------------
header.appendChild(p2);
header.appendChild(h1);
header.appendChild(div1);
header.appendChild(p5);
header.appendChild(nameInput);
//header.appendChild(a1);
//----------------//
p2.appendChild(textP2);
//----------------//
h1.appendChild(icon);
h1.appendChild(textH1);
//----------------
div1.appendChild(p1);
p1.appendChild(textParagraf1);
//----------------
header.appendChild(h2);
header.appendChild(div2);
header.appendChild(p4);
header.appendChild(div3);
header.appendChild(div4);
header.appendChild(div5);
header.appendChild(footer);
//----------------
h2.appendChild(textH2);
//----------------
div2.appendChild(ol)
ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);
ol.appendChild(li4);
ol.appendChild(li5);
li1.appendChild(textLi1);
li2.appendChild(textLi2);
li3.appendChild(textLi3);
li4.appendChild(textLi4);
li5.appendChild(textLi5);
p4.appendChild(textP4);
p5.appendChild(textP5);
//----------------
div3.appendChild(pinInput1);
div3.appendChild(pinInput2);
div3.appendChild(pinInput3);
div3.appendChild(pinInput4);
div3.appendChild(pinInput5);
div3.appendChild(pinInput6);
div3.appendChild(pinInput7);
div3.appendChild(pinInput8);
//----------------
div5.appendChild(mulai);
div5.appendChild(konfirmasi);
div5.appendChild(setor);
div5.appendChild(ulangi);
mulai.appendChild(textMulai);
konfirmasi.appendChild(textKonfirmasi);
ulangi.appendChild(textUlangi);
setor.appendChild(icon2);
setor.appendChild(textSetor);
//----------------
footer.appendChild(divFooter1);
footer.appendChild(divFooter2);
divFooter1.appendChild(textDivFooter1);
divFooter2.appendChild(linkFooter1);
divFooter2.appendChild(linkFooter2);
divFooter2.appendChild(linkFooter3);
divFooter2.appendChild(linkFooter4);
linkFooter1.appendChild(iconFooter1);
linkFooter2.appendChild(iconFooter2);
linkFooter3.appendChild(iconFooter3);
linkFooter4.appendChild(iconFooter4);
//scripting
function randomAngka() {
  return Math.floor(Math.random() * arguments.length + 1);
}
const computerInput1 = randomAngka(1,2,3,4,5,6,7,8,9);
const computerInput2 = randomAngka(1,2,3,4,5,6,7,8,9);
const computerInput3 = randomAngka(1,2,3,4,5,6,7,8,9);
const computerInput4 = randomAngka(1,2,3,4,5,6,7,8,9);
const computerInput5 = randomAngka(1,2,3,4,5,6,7,8,9);
const computerInput6 = randomAngka(1,2,3,4,5,6,7,8,9);
const computerInput7 = randomAngka(1,2,3,4,5,6,7,8,9);
const computerInput8 = randomAngka(1,2,3,4,5,6,7,8,9);

const computerInput = [computerInput1, computerInput2, computerInput3, computerInput4, computerInput5, computerInput6, computerInput7, computerInput8];

//
mulai.addEventListener("click", function() {
  if(nameInput.value == '') {
    mulai.style.backgroundColor = 'rgba(255, 40, 10, 1)';
    mulai.style.boxShadow = '0 10px 10px rgba(255, 40, 10, .4)';
    nameInput.style.border = '1px solid rgba(255, 40, 10, 1)';
    nameInput.style.backgroundColor = 'rgba(255, 40, 10, .2)';
    nameInput.style.marginTop = f_9_5;
    p5.style.display = 'inline';
    const meta = document.createElement('meta');
    document.head.appendChild(meta);
    meta.setAttribute('name', 'theme-color');
    meta.setAttribute('content', 'rgba(255, 40, 10, 1)');
    window.navigator.vibrate(1500);
    setTimeout(function () {
      nameInput.style.border = 'none';
      nameInput.style.backgroundColor = 'rgba(230, 230, 230, 1)';
      nameInput.style.marginTop = f_7;
      p5.style.display = 'none';
      meta.removeAttribute('name');
      meta.removeAttribute('content');
      mulai.style.backgroundColor = 'rgba(0, 180, 255, 1)';
      mulai.style.boxShadow = '0 10px 10px rgba(0, 180, 255, .4)';
    }, 5000);
  } else {
    mulai.style.display = 'none';
    konfirmasi.style.display = 'inline';
    var seconds = 60;
    function tick() {
        seconds--;
        div4.innerHTML = "waktu tersisa : " + (seconds < 10 ? "0" : "") + String(seconds) + ' detik';
      if (seconds > 0) {
          setTimeout(tick, 1000);
      } else if (seconds == 0) {
          let hasil1 = (pinInput1.value == computerInput1) ? 10 : 0;
          let hasil2 = (pinInput2.value == computerInput2) ? 10 : 0;
          let hasil3 = (pinInput3.value == computerInput3) ? 10 : 0;
          let hasil4 = (pinInput4.value == computerInput4) ? 10 : 0;
          let hasil5 = (pinInput5.value == computerInput5) ? 10 : 0;
          let hasil6 = (pinInput6.value == computerInput6) ? 10 : 0;
          let hasil7 = (pinInput7.value == computerInput7) ? 10 : 0;
          let hasil8 = (pinInput8.value == computerInput8) ? 10 : 0;
          let total = hasil1 + hasil2 + hasil3 + hasil4 + hasil5 + hasil6 + hasil7 + hasil8;
          konfirmasi.style.display = 'none';
          setor.setAttribute('href', 'https://wa.me/6288216018165?text=*PERWAKILAN%20KELOMPOK%20:%20' + nameInput.value + '*%20total%20poin%20:%20' + String(total));
          setor.style.display = 'inline';
          ulangi.style.display = 'inline';
          div4.innerHTML = 'waktu habis, total poin : ' + String(total) + ' poin';
          div4.style.color = 'black';
          window.navigator.vibrate(2000);
          for (let i = 0; i < userInput.length; i++) {
            if (userInput[i].value == computerInput[i]) {
              userInput[i].style.border = '1px solid rgba(80, 255, 120, 1)';
              userInput[i].style.boxShadow = '0 0 2px rgba(80, 255, 120, 1), inset 0 0 2px rgba(80, 255, 120, 1)';
              userInput[i].style.backgroundColor = 'rgba(80, 255, 120, .3)';
              setTimeout(function() {
                   userInput[i].style.border = 'none';
                   userInput[i].style.boxShadow = 'none';
                   userInput[i].style.backgroundColor = 'rgba(230, 230, 230, 1)';
              }, 3000);
            } else {
              userInput[i].style.border = '1px solid rgba(255, 100, 50, 1)';
              userInput[i].style.boxShadow = '0 0 2px rgba(255, 100, 50, 1), inset 0 0 2px rgba(255, 100, 50, 1)';
              userInput[i].style.backgroundColor = 'rgba(255, 100, 50, .3)';
              setTimeout(function() {
                  userInput[i].style.border = 'none';
                  userInput[i].style.boxShadow = 'none';
                  userInput[i].style.backgroundColor = 'rgba(230, 230, 230, 1)';
              }, 3000);
            }
          }
      }
    }
    konfirmasi.addEventListener("click", function() {
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i].value == computerInput[i]) {
          userInput[i].style.border = '1px solid rgba(80, 255, 120, 1)';
          userInput[i].style.boxShadow = '0 0 2px rgba(80, 255, 120, 1), inset 0 0 2px rgba(80, 255, 120, 1)';
          userInput[i].style.backgroundColor = 'rgba(80, 255, 120, .3)';
          setTimeout(function() {
               userInput[i].style.border = 'none';
               userInput[i].style.boxShadow = 'none';
               userInput[i].style.backgroundColor = 'rgba(230, 230, 230, 1)';
          }, 3000);
        } else {
          userInput[i].style.border = '1px solid rgba(255, 100, 50, 1)';
          userInput[i].style.boxShadow = '0 0 2px rgba(255, 100, 50, 1), inset 0 0 2px rgba(255, 100, 50, 1)';
          userInput[i].style.backgroundColor = 'rgba(255, 100, 50, .3)';
          window.navigator.vibrate(300);
          setTimeout(function() {
              userInput[i].style.border = 'none';
              userInput[i].style.boxShadow = 'none';
              userInput[i].style.backgroundColor = 'rgba(230, 230, 230, 1)';
          }, 3000);
        }
      }
    });
    tick();
    }
  }
);