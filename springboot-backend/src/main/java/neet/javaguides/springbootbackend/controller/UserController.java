package neet.javaguides.springbootbackend.controller;

import neet.javaguides.springbootbackend.exception.ResourceNotFoundException;
import neet.javaguides.springbootbackend.model.Photo;
import neet.javaguides.springbootbackend.model.User;
import neet.javaguides.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired

    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    //build create photo object rest api
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
    //getUserByID
    @GetMapping("{userId}")
    public ResponseEntity<User> getUserById(@PathVariable long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User with that id:" + userId + "doesn't exist"));
        return ResponseEntity.ok(user);
    }

    //update photo information rest api
    @PutMapping("{userId}")
    public ResponseEntity<User> updateUser(@PathVariable long userId, @RequestBody User userDetails) {
        User updateUser = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User with that id:" + userId + "doesn't exist"));
        updateUser.setFirstName(userDetails.getFirstName());
        updateUser.setLastName(userDetails.getLastName());
        updateUser.setPassword(userDetails.getPassword());
        updateUser.setEmail(userDetails.getEmail());

        userRepository.save(updateUser);
        return ResponseEntity.ok(updateUser);
    }

}
