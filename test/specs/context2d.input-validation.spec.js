/* global describe, it, expect, jsPDF */
describe("Module: Context2D Input Validation", () => {
  beforeAll(loadGlobals);
   let global =
    (typeof self !== "undefined" && self) ||
    (typeof window !== "undefined" && window) ||
    (typeof global !== "undefined" && global) ||
    Function('return typeof this === "object" && this.content')() ||
    Function("return this")();

  let tmpConsoleError = global.console.error;

  beforeEach(function() {
    global.console.error = function() {};
  });
  afterEach(function() {
    global.console.error = tmpConsoleError;
  });
  it("context2d: moveTo", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.moveTo(1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.moveTo")
    );
    expect(function() {
      doc.context2d.moveTo("invalid", 1);
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.moveTo"));
    expect(function() {
      doc.context2d.moveTo(1, "invalid");
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.moveTo"));
  });

  it("context2d: lineTo ", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.lineTo(1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.lineTo")
    );
    expect(function() {
      doc.context2d.lineTo("invalid", 1);
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.lineTo"));
    expect(function() {
      doc.context2d.lineTo(1, "invalid");
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.lineTo"));
  });

  it("context2d: quadraticCurveTo", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.quadraticCurveTo(1, 1, 1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo")
    );
    expect(function() {
      doc.context2d.quadraticCurveTo("invalid", 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo")
    );
    expect(function() {
      doc.context2d.quadraticCurveTo(1, "invalid", 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo")
    );
    expect(function() {
      doc.context2d.quadraticCurveTo(1, 1, "invalid", 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo")
    );
    expect(function() {
      doc.context2d.quadraticCurveTo(1, 1, 1, "invalid");
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo")
    );
  });

  it("context2d: bezierCurveTo", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.bezierCurveTo(1, 1, 1, 1, 1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo")
    );
    expect(function() {
      doc.context2d.bezierCurveTo("invalid", 1, 1, 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo")
    );
    expect(function() {
      doc.context2d.bezierCurveTo(1, "invalid", 1, 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo")
    );
    expect(function() {
      doc.context2d.bezierCurveTo(1, 1, "invalid", 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo")
    );
    expect(function() {
      doc.context2d.bezierCurveTo(1, 1, 1, "invalid", 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo")
    );
    expect(function() {
      doc.context2d.bezierCurveTo(1, 1, 1, 1, "invalid", 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo")
    );
    expect(function() {
      doc.context2d.bezierCurveTo(1, 1, 1, 1, 1, "invalid");
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo")
    );
  });

  it("context2d: arc", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.arc(1, 1, 1, 1, 1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.arc")
    );
    expect(function() {
      doc.context2d.arc("invalid", 1, 1, 1, 1, 1);
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.arc"));
    expect(function() {
      doc.context2d.arc(1, "invalid", 1, 1, 1, 1);
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.arc"));
    expect(function() {
      doc.context2d.arc(1, 1, "invalid", 1, 1, 1);
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.arc"));
    expect(function() {
      doc.context2d.arc(1, 1, 1, "invalid", 1, 1);
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.arc"));
    expect(function() {
      doc.context2d.arc(1, 1, 1, 1, "invalid", 1);
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.arc"));
    expect(function() {
      doc.context2d.arc(1, 1, 1, 1, 1, "invalid");
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.arc")
    );
  });

  it("context2d: rect", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.rect(1, 1, 1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.rect")
    );
    expect(function() {
      doc.context2d.rect("invalid", 1, 1, 1);
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.rect"));
    expect(function() {
      doc.context2d.rect(1, "invalid", 1, 1);
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.rect"));
    expect(function() {
      doc.context2d.rect(1, 1, "invalid", 1);
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.rect"));
    expect(function() {
      doc.context2d.rect(1, 1, 1, "invalid");
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.rect"));
  });

  it("context2d: fillRect", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.fillRect(1, 1, 1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.fillRect")
    );
    expect(function() {
      doc.context2d.fillRect("invalid", 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.fillRect")
    );
    expect(function() {
      doc.context2d.fillRect(1, "invalid", 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.fillRect")
    );
    expect(function() {
      doc.context2d.fillRect(1, 1, "invalid", 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.fillRect")
    );
    expect(function() {
      doc.context2d.fillRect(1, 1, 1, "invalid");
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.fillRect")
    );
  });

  it("context2d: strokeRect", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.strokeRect(1, 1, 1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.strokeRect")
    );
    expect(function() {
      doc.context2d.strokeRect("invalid", 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.strokeRect")
    );
    expect(function() {
      doc.context2d.strokeRect(1, "invalid", 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.strokeRect")
    );
    expect(function() {
      doc.context2d.strokeRect(1, 1, "invalid", 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.strokeRect")
    );
    expect(function() {
      doc.context2d.strokeRect(1, 1, 1, "invalid");
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.strokeRect")
    );
  });

  it("context2d: clearRect", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.clearRect(1, 1, 1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.clearRect")
    );
    expect(function() {
      doc.context2d.clearRect("invalid", 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.clearRect")
    );
    expect(function() {
      doc.context2d.clearRect(1, "invalid", 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.clearRect")
    );
    expect(function() {
      doc.context2d.clearRect(1, 1, "invalid", 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.clearRect")
    );
    expect(function() {
      doc.context2d.clearRect(1, 1, 1, "invalid");
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.clearRect")
    );
    doc = new jsPDF();
    doc.context2d.ignoreClearRect = true;
    expect(doc.context2d.clearRect(1, 1, 1, 1)).toEqual(undefined);
  });

  it("context2d: fillText", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.fillText("valid", 1, 1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.fillText")
    );
    expect(function() {
      doc.context2d.fillText(false, 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.fillText")
    );
    expect(function() {
      doc.context2d.fillText("valid", "invalid", 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.fillText")
    );
    expect(function() {
      doc.context2d.fillText("valid", 1, "invalid", 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.fillText")
    );
  });

  it("context2d: strokeText", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.strokeText("valid", 1, 1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.strokeText")
    );
    expect(function() {
      doc.context2d.strokeText(false, 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.strokeText")
    );
    expect(function() {
      doc.context2d.strokeText("valid", "invalid", 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.strokeText")
    );
    expect(function() {
      doc.context2d.strokeText("valid", 1, "invalid", 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.strokeText")
    );
  });

  it("context2d: measureText", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.measureText("valid");
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.measureText")
    );
    expect(function() {
      doc.context2d.measureText(false);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.measureText")
    );
  });

  it("context2d: scale", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.scale(1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.scale")
    );
    expect(function() {
      doc.context2d.scale("invalid", 1);
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.scale"));
    expect(function() {
      doc.context2d.scale(1, "invalid");
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.scale"));
  });

  it("context2d: rotate", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.rotate(1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.rotate")
    );
    expect(function() {
      doc.context2d.rotate("invalid");
    }).toThrow(new Error("Invalid arguments passed to jsPDF.context2d.rotate"));
  });

  it("context2d: translate", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.translate(1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.translate")
    );
    expect(function() {
      doc.context2d.translate("invalid", 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.translate")
    );
    expect(function() {
      doc.context2d.translate(1, "invalid");
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.translate")
    );
  });

  it("context2d: transform", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.transform(1, 1, 1, 1, 1, 1);
    }).not.toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.transform")
    );
    expect(function() {
      doc.context2d.transform("invalid", 1, 1, 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.transform")
    );
    expect(function() {
      doc.context2d.transform(1, "invalid", 1, 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.transform")
    );
    expect(function() {
      doc.context2d.transform(1, 1, "invalid", 1, 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.transform")
    );
    expect(function() {
      doc.context2d.transform(1, 1, 1, "invalid", 1, 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.transform")
    );
    expect(function() {
      doc.context2d.transform(1, 1, 1, 1, "invalid", 1);
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.transform")
    );
    expect(function() {
      doc.context2d.transform(1, 1, 1, 1, 1, "invalid");
    }).toThrow(
      new Error("Invalid arguments passed to jsPDF.context2d.transform")
    );
  });

  it("context2d: toDataURL", () => {
    let doc = new jsPDF();
    expect(function() {
      doc.context2d.toDataURL();
    }).toThrow(new Error("toDataUrl not implemented."));
  });
});
