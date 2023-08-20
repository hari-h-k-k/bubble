package com.bubble.backend.controller;

import com.bubble.backend.model.User;
import com.bubble.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(value = "/{id}")
    public User getUser(@PathVariable long id) {
        User user = userService.getUserById(id);
        return user;
    }

    @PostMapping("/addUser")
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }

    @GetMapping("/getAll")
    public List<User> list(){
        return userService.getAllUsers();
    }
}