export function getPos(length, index) {
    let p = index;
    let s = length;
    let startDeg = 90;
    let deg = (Math.PI / 180) * ((360 / s * p) + startDeg);
    let w = Math.sin(Math.PI / 180 * (360 / s / 2));
    let r = Math.max(((70 + 10) / 2) / w, 70 + 10);
    let c = [Math.cos(deg) * r,
        Math.sin(deg) * r
    ];
    return c;
}