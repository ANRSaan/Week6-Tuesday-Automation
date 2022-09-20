

const perfSquare = num => {
    if (Math.sqrt(num) % 1 !== 0){
      return -1
    }
    num = Math.sqrt(num)
    num++
    num = num * num
    return num
  }
  
  console.log(perfSquare(9))