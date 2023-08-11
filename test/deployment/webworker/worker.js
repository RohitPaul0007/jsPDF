importScripts("/base/dist/jspdf.umd.js");

let doc = new jspdf.jsPDF();
doc.text("Webworker test", 30, 30);
let output = doc.output();

postMessage(output);
