// add solution here
var list = []
function theBeatlesPlay(music, instruments) {
  for (let v = 0; v < music.length; v++) {
    list.push(`${music[v]} plays ${instruments[v]}`)
  }
  return list 
}


function johnLennonFacts(array) {
  var d = 0
  while (d < array.length) {
    array[d] = array[d] + "!!!"
    d++
  }
return array  
}

function iLoveTheBeatles(g) {
  var s = []
  do { s[0]=("I love the Beatles!")
    g++
  } while (g < 15)
  return s[0]
}
    
    
    



