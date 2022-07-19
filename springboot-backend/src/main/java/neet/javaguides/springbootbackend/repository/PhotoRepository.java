package neet.javaguides.springbootbackend.repository;

import neet.javaguides.springbootbackend.model.Photo;
import neet.javaguides.springbootbackend.model.User;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Long> {

}
