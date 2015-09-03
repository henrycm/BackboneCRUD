package com.jhcm.rest.view;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jhcm.rest.backend.model.User;
import com.jhcm.rest.backend.service.UserService;

@RestController
public class UserResource {

	private static final Logger log = LoggerFactory
			.getLogger(UserResource.class);

	@Resource
	private UserService service;

	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public Object[] get(@RequestParam("page") Integer page) {
		Page<User> p = service.listUsers(--page);
		PageDTO dto = new PageDTO();
		dto.setTotal_entries(new Long(p.getTotalElements()).intValue());
		log.debug("GET:" + page);
		return new Object[] { dto, p.getContent() };
	}

	@RequestMapping(value = "/users", method = RequestMethod.POST)
	public User create(@RequestBody User user) {
		log.debug("POST:" + user.getName());
		return service.save(user);
	}

	@RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
	public User update(@RequestBody User user, @PathVariable Long id) {
		log.debug("PUT:" + user.getId());
		return service.save(user);
	}

	@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
	public User remove(@PathVariable Long id) {
		log.debug("DELETE:");
		User u = service.getUser(id);
		service.delete(id);
		return u;
	}

}