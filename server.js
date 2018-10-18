
const express = require('express');
const parser = require('body-parser');
const puerto = 3001;
const api = express();
var cors = require('cors');
api.use(parser.json());
const http = require('http');

api.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));


api.listen(puerto, () => console.log('Servidor escuchando en puerto ' + puerto));
var phones = {
    "phones": [{ "id": 1, "company": "Iphone", "product": "Iphone7", "description": "The Apple iPhone 7 is the successor of last year's iPhone 6s. Although it retains much of its exterior design, the iPhone 7 features improvements in its features, including its new A10 Fusion chip, 40 percent faster than the previous A9. Its start button is now sensitive to touch, and has stereo speakers. The iPhone 7 also eliminates the 3.5mm headphone jack, is water resistant, and improves its 12 MP camera noticeably.", "color": ["pink gold", "silver", "gold", "blue"], "price": 392, "image": "https://i.blogs.es/693c60/iphone-7-00/450_1000.jpg" },
    { "id": 2, "company": "Samsung", "product": "Samsung7", "description": "The Samsung Galaxy S7 does not change much the design of the Galaxy S6, but it improves several aspects in its characteristics. In Galaxy S7 it has a QHD AMOLED screen of 5.1 inches, Snapdragon 820 processor or Exynos octa-core, 4GB of RAM, 32GB or 64GB of internal storage, 12 MP camera with optical image stabilization, 3000 mAh battery, resistance to IP68 water and add microSD slot.", "color": ["white", "silver", "pink", "blue"], "price": 300, "image": "https://fscl01.fonpit.de/userfiles/6727621/image/2016/Samsung-Galaxy-S7/AndroidPIT-Samsung-galaxy-s7-4.jpg" },
    { "id": 3, "company": "Xiaomi", "product": "Mi 8", "description": "A phone that skips the manufacturer's convention, bypassing the number seven and jumping directly to the anniversary numbering. The next generation of high-end phones from Xiaomi, which comes with interesting news and with the vitola to be the first of the leaders of the Mi to be fully international from the minute one.", "color": ["blue", "black"], "price": 450, "image": "https://cde.peru.com//ima/0/1/8/2/2/1822520/924x530/xiaomi-mi.jpg" },
    { "id": 4, "company": "Oneplus", "product": "Oneplus6", "description": "We will find some hardware specifications that will remind us of those of other high-end competitors, such as a Snapdragon 845 processor and configurations of 6 and 8 GB of RAM.", "color": ["blue", "black", "silver"], "price": 399, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2cFagk-e9JRQ4TBfgPTj3VdBxmGuHLREr_-sxsR2D5Lyo1G_hA" },
    { "id": 5, "company": "Google", "product": "Pixel3", "description": "Latest Google model, with impressive features", "color": ["pink sand", "white", "grey"], "price": 849, "image": "https://sevilla.abc.es/mobility/wp-content/uploads/2018/10/3-google-pixel3.jpg" },
    { "id": 6, "company": "HTC", "product": "U12 life", "description": "Double camera that captures the most attractive photos and videos. A remarkable double finish that offers an impressive and refreshing design. A powerful battery that follows your rhythm. The HTC U12 life is the phone that unites creativity, beauty and resistance", "color": ["purple", "blue"], "price": 409, "image": "https://cdn2.cnet.com/img/K9lZ4LibwCSZmB8u5d6PtNEIuw4=/724x407/2018/10/09/85540f05-6858-4946-963e-52f6d3f1d247/041-google-pixel-3-and-pixel-3-xl.jpg" }], "total": 6, "page": 0, "limit": 10
};
api.get('/phones', (req, res) => {
    res.status(200).send(phones)
})

