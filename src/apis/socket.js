import IO from 'socket.io-client'

const config = {
  server: process.env.NODE_ENV === 'development' ? '//localhost:3002' : '',
}

const options = {
  reconnectionDelay: 3000,
};

function getSocket(){
  const socket = new IO(config.server, options);
  return socket
}

export default getSocket;