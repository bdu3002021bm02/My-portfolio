
    // small helpers
    function revealOnScroll(){
      const els = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); })
      },{threshold:0.12});
      els.forEach(el=>io.observe(el));
    }

    // typewriter for role
    function typeRole(){
      const roles = ['Java Fullstack Developer','Software Engineer','Software Developer','Frontend Developer','Backend Developer'];
      const el = document.querySelector('.role');
      let i=0, j=0; let forward=true; function step(){
        el.textContent = roles[i].slice(0,j);
        if(forward){ if(j++ === roles[i].length){ forward=false; setTimeout(step,900); } else setTimeout(step,90);} else{ if(j--===0){ forward=true; i=(i+1)%roles.length; setTimeout(step,300);} else setTimeout(step,40); }
      }
      step();
    }

    function downloadResume(){
      // adapt: replace with your actual resume URL or file in same folder named resume.pdf
      const url = 'Abishek_Resume.pdf';
      const a = document.createElement('a'); a.href = url; a.download = 'Abishek_M_Resume.pdf'; document.body.appendChild(a); a.click(); a.remove();
    }

    function sendMessage(e){
      e.preventDefault();
      const f = e.target;
      const name = f.name.value, email=f.email.value, message=f.message.value;
      // fallback: open mail client
      const subject = encodeURIComponent('Portfolio contact from '+name);
      const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
      window.location.href = `mailto:dev.abishek07@gmail.com?subject=${subject}&body=${body}`;
    }

    // update footer year (since template literal in HTML is static)
    document.addEventListener('DOMContentLoaded',()=>{
      revealOnScroll(); typeRole();
      const footer = document.querySelector('footer');
      footer.innerHTML = '© ' + new Date().getFullYear() + ' Abishek M — Built with ❤️ • Email: dev.abishek07@gmail.com';
    });
  