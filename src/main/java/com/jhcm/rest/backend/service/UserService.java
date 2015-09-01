package com.jhcm.rest.backend.service;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.jhcm.rest.backend.model.User;
import com.jhcm.rest.backend.repositories.UserRepository;

@Service
public class UserService {

	@Value("${global.page_size}")
	private int PAGE_SIZE;

	@Resource
	private UserRepository urepo;

	public Page<User> listUsers(int pageNumber) {
		PageRequest req = new PageRequest(pageNumber, PAGE_SIZE);
		return urepo.findAll(req);
	}

	public User save(User user) {
		return urepo.save(user);
	}

	public void delete(Long id) {
		urepo.delete(id);
	}
}
