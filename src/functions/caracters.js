const englishlettres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const getRandomLetter = () => {
  const min = 0;
  const max = englishlettres.length - 1;
  const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
  return englishlettres[randomInRange];
};

//https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=s&apikey=

const caracters = (Key, Hash) => {
    const lettreRandom = getRandomLetter()
    return fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${lettreRandom}&ts=1&limit=10&apikey=${Key}&hash=${Hash}`
    )
      .then((response) => response.json())
      .then((data) => data.data.results)
      .catch((error) => console.log(error));
  };
  
  export default caracters;
  