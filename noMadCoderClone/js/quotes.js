const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];

  const quote = document.querySelector("div#quote span:first-child");
  const author = document.querySelector("div#quote span:last-child");

  randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = randomQuotes.quote;
  author.innerText = randomQuotes.author;


  const album = ["newjeans1.webp", "newjeans2.webp", "newjeans3.webp"];
  const albumImg = document.createElement("img");
  const num = Math.floor(Math.random() * album.length);
  albumImg.src = `albumImg/${album[num]}`

  document.body.appendChild(albumImg);