export function vectorFromAngle(angle, length) {
  if(length == undefined) { length = 1 }
  return p5.createVector(length * Math.cos(angle), length * Math.sin(angle), 0);
}
