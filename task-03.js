const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryContainer = document.getElementById('gallery');
  galleryContainer.classList.add('gallery-list')


  const galleryElements = images.map(elem => {

      const imageItem = document.createElement('li');
      const image = document.createElement('img');

      imageItem.classList.add('gallery-item')
      image.alt = elem.alt;
      image.src = elem.url;

      imageItem.append(image)

    return galleryContainer.append(imageItem)
  })