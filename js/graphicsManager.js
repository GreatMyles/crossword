var two = new Two({
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

var boardSquares = [[]];
var boardLetters = [[]];

const squareScale = 50
for(let row = 0; row < 10; ++row){
  for(let col = 0; col < 10; ++col){
    setTimeout(function(){
      boardSquares[row][col] = two.makeRectangle(100 + col * squareScale, 100 + row * squareScale, squareScale, squareScale)
    }, 0); 
    
  }
}