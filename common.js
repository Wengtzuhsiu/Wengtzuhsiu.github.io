gsap.registerPlugin(ScrollTrigger) 
// 告訴js有導入這個外掛

gsap.to(".dot", {
    scrollTrigger: '.dot',
    // 捲到這個開始動
    x: 10, 
    rotation: 0,
    y: 4,
    duration: 3.5,
    'background-color': 'gray',
    'border-radius': '2px',
    })
    gsap.to(".sketching4", {
        scrollTrigger: 'h1',
        // 捲到這個開始動
        x: 0, 
        rotation: 0,
        y: 200,
        duration: 3.5,
        'box-shadow': '5px 5px 5px #a9a9a900',
    
        })
    