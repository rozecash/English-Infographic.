document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
  });

  const themeCards = document.querySelectorAll('.theme-card');
  themeCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
  });

  const highlightCards = document.querySelectorAll('.highlight-card');
  highlightCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
  });

  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
  });

  const cards = document.querySelectorAll('.stat-card, .theme-card, .timeline-content, .highlight-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
    });
  });

  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
      
      if (this.classList.contains('btn-primary') && this.textContent.includes('Read Full Essay')) {
        window.location.href = 'https://docs.google.com/document/d/1SIF1FM_AQhb5IvtlKi2hE1pFMqJepFs9krSV8q0q4ZI/edit?tab=t.0';
      }
    });
  });

  document.addEventListener('mousemove', function(e) {
    const blobs = document.querySelectorAll('.bg-blob');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    blobs.forEach((blob, index) => {
      const speed = (index + 1) * 0.5;
      const x = (mouseX - 0.5) * speed * 20;
      const y = (mouseY - 0.5) * speed * 20;
      
      blob.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  const headerStats = document.querySelectorAll('.header-stat');
  headerStats.forEach((stat, index) => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
    stat.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    stat.style.transitionDelay = `${0.3 + index * 0.1}s`;
    
    setTimeout(() => {
      stat.style.opacity = '1';
      stat.style.transform = 'translateY(0)';
    }, 100);
  });

  function createSparkles() {
    const sparkleContainer = document.querySelector('.animated-background');
    const sparkleCount = 20;
    
    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animationDelay = Math.random() * 2 + 's';
      sparkle.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
      sparkleContainer.appendChild(sparkle);
    }
  }
  
  createSparkles();

  const statValues = document.querySelectorAll('.stat-value');
  statValues.forEach(statValue => {
    const finalValue = parseInt(statValue.textContent);
    let currentValue = 0;
    const duration = 2000;
    const increment = finalValue / (duration / 16);
    
    const counter = setInterval(() => {
      currentValue += increment;
      if (currentValue >= finalValue) {
        statValue.textContent = finalValue;
        clearInterval(counter);
      } else {
        statValue.textContent = Math.floor(currentValue);
      }
    }, 16);
  });

  const highlightCards = document.querySelectorAll('.highlight-card');
  highlightCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.highlight-icon');
      icon.style.animation = 'none';
      setTimeout(() => {
        icon.style.animation = '';
      }, 10);
    });
  });

  document.querySelectorAll('.stat-card, .timeline-content, .highlight-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
});
