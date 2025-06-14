// 부드러운 스크롤 + 네비게이션 active 효과
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
      // 네비게이션 active 효과
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// 스크롤 시 섹션에 페이드인 효과
window.addEventListener('scroll', () => {
  document.querySelectorAll('main section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('fade-in');
    }
  });
});

// 스킬바 애니메이션 + 숫자 카운트업
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skills-bar .progress').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.transition = 'width 1.2s cubic-bezier(.4,2,.6,1)';
      bar.style.width = width;
    }, 300);

    // 숫자 카운트업 애니메이션
    const percentLabel = bar.parentElement.querySelector('.percent-label');
    if (percentLabel) {
      let targetPercent = parseInt(percentLabel.textContent, 10);
      percentLabel.textContent = '0%';
      let current = 0;
      const step = () => {
        if (current < targetPercent) {
          current += 1;
          percentLabel.textContent = current + '%';
          requestAnimationFrame(step);
        } else {
          percentLabel.textContent = targetPercent + '%';
        }
      };
      setTimeout(step, 600);
    }
  });

  // 첫 화면에서 섹션 페이드인
  document.querySelectorAll('main section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('fade-in');
    }
  });
});
