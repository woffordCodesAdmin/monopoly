
let userOne = document.querySelector('.userOne')
let userTwo = document.querySelector('.userTwo')

let currentPieceP1;
let currentPieceP2;


let characters ={
    chessPiece: 'https://static.vecteezy.com/system/resources/previews/011/306/675/original/gold-chess-queen-3d-render-png.png',
    moneybag: 'https://cdn.pixabay.com/photo/2022/11/27/15/04/business-7620014_1280.png',
    statueOfLiberty: 'https://www.pngplay.com/wp-content/uploads/2/Statue-Of-Liberty-Transparent-PNG.png',
    sneaker: 'https://www.pngmart.com/files/21/Air-Jordan-PNG-Isolated-HD.png'
}

const selectCharacter = (piece) =>{
    let mover = document.createElement('img')
    mover.setAttribute('src',piece)
    mover.setAttribute('class','icon')
    userOne.
    append(mover)
    mover.addEventListener('click',()=>{
        let start = document.querySelector('#starter')
        start.append(mover)
        currentPieceP1 = mover
        console.log(currentPiece,"currentPiece")
    })
    
}
const selectCharacter2 = (piece) =>{
    let mover = document.createElement('img')
    mover.setAttribute('src',piece)
    mover.setAttribute('class','icon')
    userTwo.append(mover)
    mover.addEventListener('click',()=>{
        let start = document.querySelector('#starter')
        start.append(mover)
        currentPieceP2 = mover
        console.log(currentPiece,"currentPiece")
    })
}
const chooseCharacter = () =>{
    let btn = document.querySelector('.charBtn')
    btn.remove();
    selectCharacter(characters.chessPiece)
    selectCharacter(characters.moneybag)
    selectCharacter(characters.statueOfLiberty)
    selectCharacter(characters.sneaker)
}
const chooseCharacter2 = () =>{
    let btn = document.querySelector('.charBtn2')
    btn.remove();
    selectCharacter2(characters.chessPiece)
    selectCharacter2(characters.moneybag)
    selectCharacter2(characters.statueOfLiberty)
    selectCharacter2(characters.sneaker)
}
