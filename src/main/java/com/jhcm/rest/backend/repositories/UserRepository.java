package com.jhcm.rest.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jhcm.rest.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
}
