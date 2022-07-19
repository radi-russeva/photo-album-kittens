package neet.javaguides.springbootbackend.repository;

import neet.javaguides.springbootbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    //all  crud database methods
    public User findByUserId(long userId);
}
