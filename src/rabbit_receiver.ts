const  amqp = require('amqplib/callback_api');

class RabbitReceiver {

  constructor (url: string, queue: string, messageHandler: Function) {
    amqp.connect(url, function(connectError, connection) {
      if (connectError) {
        throw connectError;
      }
      connection.createChannel(function(channelError, channel) {
        if (channelError) {
          throw channelError;
        }

        channel.assertQueue(queue, {
          durable: false
        });

        channel.consume(queue, function(msg) {
          //console.log(" [x] Received %s", msg.content.toString());
          const data = JSON.parse(msg.content.toString());
          messageHandler({title: data.title, content: data.content, author: data.author, url: data.url});
        }, {
            noAck: true
          }
        );
      });
    });
  }
}

export default RabbitReceiver;