import mongoose from 'mongoose';
import RabbitReceiver from "./rabbit_receiver";
import News, { INews } from './db/news';

export default new RabbitReceiver ("amqp://localhost", "pages",
  function (news: INews) {
    const newsDB: any = new News(news);

    newsDB.save();
    console.log("News saved.");
  }
);
