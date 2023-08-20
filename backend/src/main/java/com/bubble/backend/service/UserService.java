package com.bubble.backend.service;

import com.bubble.backend.model.User;

import java.util.List;

public interface UserService {

    void addUser(User user);

    User getUserById(long id);

    List<User> getAllUsers();

    void updateUser(User user);

    void deleteUser(User user);

}