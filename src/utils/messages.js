const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, url,isTyping) => {
    return {
        username,
        url,
        createdAt: new Date().getTime(),
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage,
}
