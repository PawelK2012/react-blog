import React from 'react';
import { shallow } from 'enzyme';
import NewsList from '../../../presentational/News/NewsList';
const data = [
    {
        "id": 1,
        "title": "Breaking news from today",
        "subTitle": "Subtitle Breaking news from today",
        "text": "Some text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "owner": "Tim123",
        "img": "http://www.bmvbespoke.com/files/2213/5050/1151/news.jpg",
        "featured": true
    },
    {
        "id": 2,
        "title": "Breaking news from today morning",
        "subTitle": "Super Subtitle Breaking",
        "text": "Other Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "owner": "Jane456",
        "img": "http://www.aanthonycorp.com/wp-content/uploads/2014/09/breaking-news-qzzamuvt.jpg",
        "featured": false
    },
    {
        "id": 3,
        "title": "Nothing important",
        "subTitle": "From today",
        "text": "Latest news Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "owner": "Pawwel",
        "img": "http://dodablue.com/images/categories/Tech-News.jpg",
        "featured": false
    },
    {
        "id": 4,
        "title": "What happenend yesterday ",
        "subTitle": "Breaking news",
        "text": "Braking news Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "owner": "Lena",
        "img": "https://ichef.bbci.co.uk/images/ic/1920x1080/p03fghm2.jpg",
        "featured": false
    },
    {
        "id": 5,
        "title": "Test Breaking news from today morning",
        "subTitle": "Super Subtitle Breaking",
        "text": "Other Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "owner": "Jane456",
        "img": "https://www.ncp.co.uk/uploads/home/82.jpg?version=20180102131738",
        "featured": false
    },
    {
        "id": 6,
        "title": "Todays Breaking news from today morning",
        "subTitle": "Super Subtitle Breaking",
        "text": "Other Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "owner": "Jane456",
        "img": "http://globalmedicalco.com/photos/globalmedicalco/19/91563.jpg",
        "featured": false
    },
    {
        "id": 7,
        "title": "Seventh Breaking news from today morning",
        "subTitle": "Super Subtitle Breaking",
        "text": "Other Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "owner": "Jane456",
        "img": "https://static.businessinsider.com/image/5995d46db0e0b525008b5bb9/image.jpg",
        "featured": false
    },
    {
        "id": 8,
        "title": "Todays Breaking Sport",
        "subTitle": "Super Subtitle Breaking",
        "text": "Other Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "owner": "Jane456",
        "img": "http://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2017/08/01100804/Man-Utd-squad.jpg",
        "featured": false
    },
    {
        "id": 9,
        "title": "Manchester news",
        "subTitle": "Super Subtitle Breaking",
        "text": "Other Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "owner": "Jane456",
        "img": "http://www.ronaldo7.net/news/2018/01/1310-cristiano-ronaldo-stays-at-real-madrid.jpg",
        "featured": false
    }
]
xdescribe('NewsList Component:', () => { 
    test('renders correctly', () => {
      const wrapper = shallow(<NewsList data={data} />);
      expect(wrapper.html()).toMatchSnapshot();
    });
});