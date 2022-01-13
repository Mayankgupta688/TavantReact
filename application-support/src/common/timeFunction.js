export default function timeFunction(label) {
    return label + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
}

export function getName() {
    return "XYZ";
}