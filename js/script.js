//top読み込み時にロゴ表示
$(function () {
  setTimeout(function () {
    $('.start p').fadeIn(1000);
  }, 500); //0.5秒後にロゴをフェードイン
  setTimeout(function () {
    $('.start').fadeOut(800);
  }, 3000); //3秒後にロゴフェードアウト
});

// ハンバーガーメニュー
const ham = document.querySelector('#trigger');
const nav = document.querySelector('nav');

ham.addEventListener('click', function () {
  ham.classList.toggle('open');
  nav.classList.toggle('open');
});

// キービジュアルスライドショー
$(document).ready(function () {
  setTimeout(function () {//2.5秒後から始める
    $("#index_fView").slick({
      arrows: false, //矢印非表示
      dots: true, //下に点を表示
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 800,
      fade: true,
      cssEase: 'linear'
    });
  }, 3000);
});

// お知らせ
$('#news').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});


  // ふわっと出てくる
  const targetElement = document.querySelectorAll('.sec');
  document.addEventListener('scroll', function () {
    for (let i = 0; i < targetElement.length; i++) {
      const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .3
      if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add('show');
      }
    }
  });