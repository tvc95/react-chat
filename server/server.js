// Setting up an IO connection (Socket.IO)
const io = require('socket.io')(5000, {
	cors: {
		origin: "*",
	}
});

io.on('connection', socket => {
    // Passing the user's ID to the socket in order to join a particular room
    const id = socket.handshake.query.id;
    socket.join(id);

    // Event that triggers when an user sends a message to the others in a room
    socket.on('send-message', ({ recipients, text }) => {
        // Loop through all recipients in order to send them a message
        recipients.forEach(recipient => {
            // Excluding yourself from the recipients list, if the sender is you
            const newRecipients = recipients.filter(r => r !== recipient);
            newRecipients.push(id);

            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipients, sender: id, text
            });
        });
    });
})