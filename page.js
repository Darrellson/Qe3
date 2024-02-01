
class QuadraticEquationSolver { 
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.discriminant = this.b ** 2 - 4 * this.a * this.c;
  }
  
  solve() {
    if (this.discriminant > 0) {
      const root1 = (-this.b + Math.sqrt(this.discriminant)) / (2 * this.a);
      const root2 = (-this.b - Math.sqrt(this.discriminant)) / (2 * this.a);
      return { type: 'real', roots: [root1, root2] };
    } else if (this.discriminant === 0) {
      const root = -this.b / (2 * this.a);
      return { type: 'real', roots: [root] };
    } else if (this.discriminant < 0) {
      const realPart = -this.b / (2 * this.a);
      const imaginaryPart = Math.sqrt(Math.abs(this.discriminant)) / (2 * this.a);
      const complexRoot1 = `${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i`;
      const complexRoot2 = `${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
      return { type: 'complex', roots: [complexRoot1, complexRoot2] };
    }
  }
}

class QuadraticEquationCalculator {
  static solveQuadratic(a, b, c, resultDivId) {
    const aVal = parseFloat(document.getElementById(a).value);
    const bVal = parseFloat(document.getElementById(b).value);
    const cVal = parseFloat(document.getElementById(c).value);

    if (isNaN(aVal) || isNaN(bVal) || isNaN(cVal)) {
      alert('Please enter valid coefficients.');
      return;
    }

    const solver = new QuadraticEquationSolver(aVal, bVal, cVal);
    const result = solver.solve();
    this._displayResult(result, resultDivId);
  }

  static _displayResult(result, resultDivId) {
    const resultDiv = document.getElementById(resultDivId);
    
    if (result.type === 'real') {
      if (result.roots.length === 2) {
        resultDiv.innerHTML = `<p>Root 1: ${result.roots[0]}</p><p>Root 2: ${result.roots[1]}</p>`;
      } else if (result.roots.length === 1) {
        resultDiv.innerHTML = `<p>Root: ${result.roots[0]}</p>`;
      }
    } else {
      resultDiv.innerHTML = `<p>Complex Root 1: ${result.roots[0]}</p><p>Complex Root 2: ${result.roots[1]}</p>`;
    }
  }
}