import {articles} from '../../../data/articles';

const handler = (req, res) => {
    console.log(articles)
    res.status(200).json(articles)
}

export default handler;