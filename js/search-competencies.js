const input = document.querySelector('input');
const tags = document.querySelectorAll('.tag');

input.addEventListener('input', () => {
  const searchValue = input.value.toLowerCase();
  tags.forEach((tag) => {
    const tagText = tag.textContent.toLowerCase();
    if (tagText.includes(searchValue)) {
      tag.style.display = 'flex';
    } else {
      tag.style.display = 'none';
    }
  });
});