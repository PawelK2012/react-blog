import axios from 'axios';

class NewsService {

    postNews = (data) => axios.post('http://localhost:63145/api/messages', {
        id: this.uuidv4(),
        title: data.title,
        subTitle: data.subTitle,
        text: data.text,
        img: data.img,
        owner: data.owner,
        featured: data.featured
    })
    getNews = () => axios.get('http://localhost:63145/api/messages')
    getNewsById = (id) => axios.get('http://localhost:63145/api/getMsg/'+id)
    uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }

}
export default NewsService