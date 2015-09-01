package com.jhcm.rest.view;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jhcm.rest.backend.model.User;
import com.jhcm.rest.backend.service.UserService;

@RestController(value = "/api/users")
public class UserResource {

	private static final Logger log = LoggerFactory
			.getLogger(UserResource.class);

	@Resource
	private UserService service;

	@RequestMapping(value = "/api/users/{page}", method = RequestMethod.GET)
	public Object[] get(@PathVariable Integer page) {
		Page<User> p = service.listUsers(page);
		PageDTO dto = new PageDTO();
		dto.setTotal_entries(new Long(p.getTotalElements()).intValue());
		log.debug("GET:" + page);
		return new Object[] { dto, p.getContent() };
	}

	@RequestMapping(method = RequestMethod.POST)
	public User create(@RequestBody User user) {
		log.debug("POST:" + user.getName());
		return service.save(user);
	}

	@RequestMapping(method = RequestMethod.PUT)
	public User update(@RequestBody User user) {
		log.debug("PUT:" + user.getId());
		return service.save(user);
	}

	@RequestMapping(value = "/api/users/{id}", method = RequestMethod.DELETE)
	public void remove(@PathVariable Long id) {
		log.debug("DELETE:");
		service.delete(id);
	}

}