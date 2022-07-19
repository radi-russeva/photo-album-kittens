package neet.javaguides.springbootbackend;

import neet.javaguides.springbootbackend.model.Photo;
import neet.javaguides.springbootbackend.model.User;
import neet.javaguides.springbootbackend.repository.PhotoRepository;
import neet.javaguides.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {
	@Autowired
	UserRepository userRepository;
	@Autowired
	PhotoRepository photoRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

//		User user3 = new User();
//		user3.setEmail("ivo.andonov@abv.bg");
//		user3.setFirstName("ivo");
//		user3.setLastName("andonov");
//		user3.setPassword("ivo1234");
//		user3.setUserName("ivo_andonov");
//		userRepository.save(user3);
//
//		Photo photo1 = new Photo();
//		photo1.setPhotoURl("https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png");
//		photo1.setPhotoName("kitten");
//		photo1.setPhotoDescription("this is a cute little kitten");
//		photoRepository.save(photo1);
//
//		// create and save new photos
//		photoRepository.save(new Photo(15, "some kitten photo", "https://petsandyou.bg/media/magefan_blog/2014/02/Kittens.png", "cute little kittens", user3));
	}

}
