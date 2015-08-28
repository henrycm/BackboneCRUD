package com.jhcm.rest.user;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class JSONService {

	private final static Map<Integer, User> users = new HashMap<Integer, User>();
	private static int id_seq;
	private Page page = new Page();

	@GET
	public Object[] get() {
		System.out.println("GET:" + users.size());
		page.setTotal_entries(users.size());
		return new Object[] { page, users.values().toArray() };
	}

	@GET
	@Path("{id}")
	public User get(@PathParam("id") int id) {
		System.out.println("GET:" + id);
		return users.get(id);
	}

	@POST
	public User create(User user) {
		user.setId(++id_seq);
		System.out.println("POST:" + user.getName());
		users.put(user.getId(), user);
		return users.get(user.getId());
	}

	@PUT
	@Path("{id}")
	public User update(User user) {
		System.out.println("PUT:" + user.getId());
		users.put(user.getId(), user);
		return users.get(user.getId());
	}

	@DELETE
	@Path("{id}")
	public void remove(@PathParam("id") int id) {
		System.out.println("DELETE:");
		users.remove(id);
	}

}