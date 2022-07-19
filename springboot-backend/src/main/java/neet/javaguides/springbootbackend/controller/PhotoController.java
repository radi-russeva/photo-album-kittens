package neet.javaguides.springbootbackend.controller;

import neet.javaguides.springbootbackend.exception.ResourceNotFoundException;
import neet.javaguides.springbootbackend.model.Photo;
import neet.javaguides.springbootbackend.model.User;
import neet.javaguides.springbootbackend.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v2/photos")
public class PhotoController {

    @Autowired
    private PhotoRepository photoRepository;

    @GetMapping
    public List<Photo> getAllPhotos() {
        return photoRepository.findAll();
    }

    //build create photo object rest api
    @PostMapping
    public Photo createPhoto(@RequestBody Photo photo) {
        return photoRepository.save(photo);
    }
    //getPhotoByID
    @GetMapping("{photoId}")
    public ResponseEntity<Photo> getPhotoById(@PathVariable long photoId) {
        Photo photo = photoRepository.findById(photoId).orElseThrow(() -> new ResourceNotFoundException("Photo with that id:" + photoId + "doesn't exist"));
        return ResponseEntity.ok(photo);
    }

    //update photo information rest api
    @PutMapping("{photoId}")
    public ResponseEntity<Photo> updatePhoto(@PathVariable long photoId, @RequestBody Photo photoDetails) {
        Photo updatePhoto = photoRepository.findById(photoId).orElseThrow(() -> new ResourceNotFoundException("Photo with that id:" + photoId + "doesn't exist"));
        updatePhoto.setPhotoName(photoDetails.getPhotoName());
        updatePhoto.setPhotoURl(photoDetails.getPhotoURl());
        updatePhoto.setPhotoDescription(photoDetails.getPhotoDescription());

        photoRepository.save(updatePhoto);
        return ResponseEntity.ok(updatePhoto);
    }

    //build deletePhoto rest api
    @DeleteMapping("{photoId}")
    public ResponseEntity<HttpStatus> deletePhoto(@PathVariable long photoId) {

        Photo photo = photoRepository.findById(photoId).orElseThrow(() -> new ResourceNotFoundException("Photo with that id:" + photoId + "doesn't exist"));

        System.out.println(photo.getPhotoId());
        photoRepository.delete(photo);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}