const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Optional: Unobserve after showing once
        observer.unobserve(entry.target);
      }
    });
  });
  
  // Observe all .slide-in-box elements
  document.querySelectorAll('.slide-in-left').forEach(el => {
    observer.observe(el);
  });


  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Optional: Unobserve after showing once
        observer.unobserve(entry.target);
      }
    });
  });
  
  // Observe all .slide-in-box elements
  document.querySelectorAll('.slide-in-right').forEach(el => {
    observer.observe(el);
  });