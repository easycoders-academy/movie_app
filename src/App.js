import React from 'react';

function Food({name, picture}){
  return (
    <div>
      <h3>Я люблю {name}</h3>
      <img src={picture} alt=""/>
    </div>
  );
}

const foodILike = [
  {
    'name': 'борщ',
    'image': 'https://2recepta.com/recept/borshh/borshh.jpg'
  },
  {
    'name': 'драники',
    'image': 'https://cdn.lifehacker.ru/wp-content/uploads/2018/05/Draniki_1527664015.jpg'
  },
  {
    'name': 'стейк',
    'image': 'https://cdn.lifehacker.ru/wp-content/uploads/2018/05/20-laJfxakov-dlya-prigotovleniya-deJstvitelno-bozhestvennogo-steJka_1526682003-1140x570.jpg'
  },
  {
    'name': 'хинкали', 
    'image': 'https://vosmarket.ru/uploads/posts/2018-11/1541331854_vosmarket_ru-xinkali-0.jpg'
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
