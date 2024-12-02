export function clamp(val: number, min: number = 0, max: number = 1) {
    return val > max ? max : val < min ? min : val;
}
