<script>
  function copyToClipboard(text) {
    // Código de la función copyToClipboard (sin cambios)

    // Cambiar el color de fondo al verde al copiar al portapapeles
    changeColor(event.target);
  }

  function changeColor(element) {
    element.style.backgroundColor = '#00ff00'; // Cambia el color de fondo a verde
    setTimeout(() => {
      element.style.backgroundColor = '#fff'; // Vuelve al color original después de un breve tiempo
    }, 500);
  }
</script>
