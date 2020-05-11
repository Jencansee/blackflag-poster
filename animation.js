    const tl = gsap.timeline();

    tl.from(".first", {duration:1, x:1050, y:1000, ease:"power1"});
    tl.from(".third", {duration:1, x:-1050, y:-1050, ease:"power1"}, "-=1");
    
    tl.from(".second", {duration:1, x:1000, y:1000, ease:"power1"});
    tl.from(".fourth", {duration:1, x:-1050, y:-1000, ease:"power1"}, "-=1");

    tl.from(".textAnim", {duration:1.5, opacity: -1, ease:"bounce", stagger: 0.25});

    document.getElementById('wrapper').addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });