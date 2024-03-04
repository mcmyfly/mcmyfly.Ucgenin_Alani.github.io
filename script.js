function calculateTriangleArea() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
  
    if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
      var area = 0.5 * base * height;
      document.getElementById('result').innerHTML = `Üçgen Alanı: ${area}`;
    } else {
      document.getElementById('result').innerHTML = 'Geçerli sayısal değerler girin.';
    }
  }
  