const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(() => {
    // li要素を新しく作成する
    const childList = document.createElement('text');
    childList.textContent = 'ボタンをクリックしました';

    // parentListの最初の子要素を削除する
    text.removeChild(text.firstChild);

    // childListを追加する
    text.appendChild(childList);
  }, 2000);
});