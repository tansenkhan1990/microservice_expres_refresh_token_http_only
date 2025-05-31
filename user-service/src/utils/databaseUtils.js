const users = [{ id: 1, username: "user", email: "user@example.com" }];

exports.findUserByUsername = (username) => {
    return users.find(user => user.username === username);
};

exports.updateUser = (username, newData) => {
    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex === -1) return null;

    users[userIndex] = { ...users[userIndex], ...newData };
    return users[userIndex];
};
