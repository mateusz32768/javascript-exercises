const table = document.querySelector('#myTable'),
  ths = table.querySelectorAll('thead th'),
  trs = table.querySelectorAll('tbody tr');

function makeArray(nodeList) {
  const arr = [];

  for (let i = 0; i < nodeList.length; i++) {
    arr.push(nodeList[i]);
  }
  return arr;
}

function clearClassName(nodeList) {
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].className = '';
  }
}

function sortBy(e) {
  const target = e.target,
    thsArr = makeArray(ths),
    trsArr = makeArray(trs),
    index = thsArr.indexOf(target),
    df = document.createDocumentFragment(),
    order = (target.className === "" || target.className === 'desc') ? 'asc' : 'desc';

  clearClassName(ths);

  trsArr.sort((a, b) => {
    let tdA = a.children[index].textContent,
      tdB = b.children[index].textContent;

    if (tdA < tdB) {
      return order === 'asc' ? -1 : 1;
    } else if (tdA > tdB) {
      return order === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  });

  trsArr.forEach((tr) => {
    df.appendChild(tr);
  });

  target.className = order;
  table.querySelector('tbody').appendChild(df);

}

for (let i = 0; i < ths.length; i++) {
  ths[i].onclick = sortBy;
}

