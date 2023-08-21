package com.bubble.backend.controller;

import com.bubble.backend.model.User;
import com.bubble.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/test")
    public void test() {
        System.out.println("test");
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable int id) {
        User user = userRepository.findById(id).get(0);

        return user;
    }

    @PostMapping("/addUser")
    public void addUser(@RequestBody User user){
        System.out.println("Add user");
        userRepository.save(user);
    }

    @GetMapping("/getAll")
    public List<User> list(){
        return userRepository.findAll();
    }
}