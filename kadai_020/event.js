const addBtn = document.getElementById('btn');

const parentList = document.getElementById('text');

addBtn.addEventListener('click', () => {

  // li要素を新しく作成する
  const childList = document.createElement('text');
  childList.textContent = 'ボタンをクリックしました';

  // parentListの最初の子要素を削除する
  parentList.removeChild(parentList.firstChild);

  // childListを追加する
  parentList.appendChild(childList);
});
