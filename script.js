AOS.init({ duration: 1000, once: true });

// السلايدر
const slides = document.querySelectorAll('.slide');
let cur = 0;
function next() {
    slides[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
}
setInterval(next, 5000);

// بيانات معرض الأعمال (الأقسام الستة)
const gal = {
    bath: { title: 'قسم الحمامات', imgs: ['https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400', 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400'] },
    living: { title: 'قسم الصالات', imgs: ['https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?w=400', 'https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?w=400'] },
    majlis: { title: 'قسم المجالس', imgs: ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400'] },
    facade: { title: 'قسم الواجهات', imgs: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400'] },
    landscape: { title: 'قسم اللاندسكيب', imgs: ['https://images.unsplash.com/photo-1558603668-6570496b66f8?w=400'] },
    exec: { title: 'قسم التنفيذ والإشراف', imgs: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400'] }
};

function openGallery(c) {
    const m = document.getElementById('galleryModal');
    document.getElementById('modalTitle').innerText = gal[c].title;
    const grid = document.getElementById('modalImages');
    grid.innerHTML = gal[c].imgs.map(i => `<img src="${i}">`).join('');
    m.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}
