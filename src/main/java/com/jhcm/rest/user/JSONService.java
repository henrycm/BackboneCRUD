package com.jhcm.rest.user;

import java.util.Collection;
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
import javax.ws.rs.core.Response;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class JSONService {

	private final static Map<Integer, User> users = new HashMap<Integer, User>();
	private static int id_seq;

	@GET
	public Collection<User> get() {
		return users.values();
	}

	@POST
	public Response create(User user) {
		user.setId(++id_seq);
		users.put(user.getId(), user);
		String result = "User saved : " + user;
		return Response.status(201).entity(result).build();

	}

	@PUT
	@Path("{id}")
	public Response update(User user) {
		users.put(user.getId(), user);
		String result = "User saved : " + user;
		return Response.status(201).entity(result).build();

	}

	@DELETE
	@Path("{id}")
	public void remove(@PathParam("id") int id) {
		users.remove(id);
	}

}