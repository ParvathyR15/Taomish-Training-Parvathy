package com.example.restservice;

import java.util.concurrent.atomic.AtomicLong;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
public class GreetingController {

	private static final String template = "Hello, %s!";
	private static final Logger log = LoggerFactory.getLogger(GreetingController.class);
	private final AtomicLong counter = new AtomicLong();

	// Greeting record with id, name, and status
	public record Greeting(long id, String name, String status) {}

	@PostMapping("/greeting")
	public Greeting createGreeting(@RequestBody String name) {
		log.info("Creating greeting for {}", name);
		return new Greeting(counter.incrementAndGet(), name,
				"Active");
	}

	@DeleteMapping("/greeting")
	public String deleteGreeting(@RequestParam(value = "id") long id) {
		log.info("Deleting greeting with id: {}", id);
		return "Greeting with ID " + id + " has been deleted.";
	}

	@PutMapping("/greeting")
	public Greeting updateGreeting(@RequestParam(value = "id") long id, @RequestParam(value = "name") String newName, @RequestParam(value = "status") String newStatus) {
		log.info("Replacing greeting with id: {}, name: {}, status: {}", id, newName, newStatus);

		return new Greeting(id, newName, newStatus);
	}

	@PatchMapping("/greeting")
	public Greeting patchGreeting(@RequestParam(value = "id") long id, @RequestParam(value = "status", required = false) String newStatus, @RequestParam(value = "name", required = false) String newName) {
		log.info("Partially updating greeting with id: {}", id);


		if (newStatus != null) {
			log.info("Updating status to: {}", newStatus);
		}
		if (newName != null) {
			log.info("Updating name to: {}", newName);
		}


		return new Greeting(id, newName != null ? newName : "Current Name", newStatus != null ? newStatus : "Active");
	}
}
