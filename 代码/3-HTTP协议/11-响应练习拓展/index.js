  // 获取所有的td 
  const td = document.querySelectorAll('td')
  // 遍历
  td.forEach(element => {
      element.addEventListener('click', function () {
          this.style.backgroundColor = 'black'
      })
  })