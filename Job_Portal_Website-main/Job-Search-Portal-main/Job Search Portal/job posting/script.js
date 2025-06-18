const fileDropArea = document.getElementById('logo-drop');
const fileInput = document.getElementById('logo');

fileDropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    fileDropArea.style.backgroundColor = '#e9ecef';
});

fileDropArea.addEventListener('dragleave', () => {
    fileDropArea.style.backgroundColor = '#fff';
});

fileDropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    fileDropArea.style.backgroundColor = '#fff';
    const files = event.dataTransfer.files;
    fileInput.files = files;
});

fileDropArea.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file chosen';
    alert(`Selected file: ${fileName}`);
});
    