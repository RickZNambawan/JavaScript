displayFeatures = async (url, number, title) => {
    await fetch(url)
    .then(res => res.json())
    .then(data => {
        const featureSection = document.querySelector('#feature');
        for(let i = 0; i < 6; i++) {
            const features = data[number[i]]
            const featureBox = document.createElement('div');
            featureBox.setAttribute('class', 'fe-box')
            
            const imageSource = document.createElement('img');
            imageSource.setAttribute('src', features.image);
                
            const text = document.createElement('h6');
            text.innerText = title[i];
            
            featureBox.appendChild(imageSource);
            featureBox.appendChild(text);
            featureSection.appendChild(featureBox);
        }
    });

}

displayProducts = async (url) => {
    const container = document.querySelector('.pro-container');
    await fetch(url)
    .then(res => res.json())
    .then(products => {
        products.forEach(product => {
            const pro = document.createElement('div')
            pro.setAttribute('class', 'pro');
            const image = document.createElement('img')
            image.setAttribute('src', product.image);
            const description = document.createElement('div')
            description.setAttribute('class', 'des');
            const category = document.createElement('span')
            category.innerText = product.category;
            const title = document.createElement('h5')
            title.innerText = product.title;
            const star = document.createElement('div')
            star.setAttribute('class', 'star');
            for(let i = 0; i < 5; i++) {
                let row = document.createElement('i')
                row.setAttribute('class', 'fas fa-star');
                star.appendChild(row);
            }
            const price = document.createElement('h4')
            price.innerText = "$" + product.price;
            const cart = document.createElement('a')
            cart.setAttribute('href', '#');
            const logo = document.createElement('i')
            logo.setAttribute('class', 'fa fa-shopping-cart cart');
            cart.appendChild(logo);
            pro.appendChild(image);
            pro.appendChild(description)
            description.appendChild(category);
            description.appendChild(title);
            description.appendChild(star);
            description.appendChild(price)
            pro.appendChild(cart);
            container.appendChild(pro);
        })
    });
}

const features = {
    categories: {
        jewelry: 'https://fakestoreapi.com/products/category/jewelery', 
        electronics: 'https://fakestoreapi.com/products/category/electronics'
    },
    title: ['Free Shipping', 'Online Order', 'Save Money', 'Promotions', 'Happy Sell', '24/7 Support'],
    imageNumber: [1, 2, 3, 4, 5, 1]
}

const {categories, title, imageNumber} = features;
displayFeatures(categories.electronics, imageNumber, title);
displayProducts(categories.jewelry);