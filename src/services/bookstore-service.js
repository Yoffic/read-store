
export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke',
      price: 25,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51-5ZXYtcML._SX377_BO1,204,203,200_.jpg',
    },
    {
      id: 4,
      title: 'Code Complete',
      author: 'Steve McConnell',
      price: 30,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/514Fchkr9WL._SX408_BO1,204,203,200_.jpg',
    },
    {
      id: 5,
      title: 'The Linux Command Line',
      author: 'William Shotts',
      price: 26,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51-T4ZwKduL._SX376_BO1,204,203,200_.jpg',
    },
    {
      id: 6,
      title: 'Docker: Up & Running',
      author: 'Sean P. Kane',
      price: 31,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/510qnZZj0sL._SX379_BO1,204,203,200_.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          rejected(new Error(`Can't load data!`));
        } else {
          resolve(this.data);
        }
      }, 1000);
    });
  }
}