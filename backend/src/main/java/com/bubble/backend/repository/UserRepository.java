package com.bubble.backend.repository;

import com.bubble.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {

    List<User> findAll();

    List<User> findById(int id);

}