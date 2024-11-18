import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_SOCKET_SERVER_URL, {
  transports: ["websocket"], // Ensure WebSocket transport is used
});

// Function to emit a message to the server
export const sendMessage = (messageData) => {
  socket.emit("send_message", messageData);
};

// Function to listen for incoming messages
export const onMessageReceived = (callback) => {
  socket.on("receive_message", (message) => {
    callback(message);
  });
};

// Export the socket instance for other usage if needed
export default socket;
