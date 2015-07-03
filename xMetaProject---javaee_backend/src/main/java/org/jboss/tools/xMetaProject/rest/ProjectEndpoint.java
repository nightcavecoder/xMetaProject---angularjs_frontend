package org.jboss.tools.xMetaProject.rest;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.OptimisticLockException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;

import org.jboss.tools.xMetaProject.dto.ProjectDto;
import org.jboss.tools.xMetaProject.dto.UserDto;
import org.jboss.tools.xMetaProject.model.MetaProject;
import org.jboss.tools.xMetaProject.model.Project;
import org.jboss.tools.xMetaProject.model.User;

/**
 * 
 */
@Stateless
@Path("/metaprojects/{mid}/projects")
public class ProjectEndpoint
{
   @PersistenceContext(unitName = "xMetaProject---javaee_backend-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(@PathParam("mid") Long mid ,ProjectDto dto)
   {
	  Project entity = new Project();
	  entity.setTitle(dto.getTitle());
	  entity.setDescription(dto.getDescription());
	  
	  MetaProject metaproject = em.find(MetaProject.class, mid);
	  entity.setMetaproject(metaproject);
	  
	  Collection<User> users = new HashSet<User>();
	  
	  for(UserDto userDto : dto.getMembers()){
		  User user = em.find(User.class, userDto.getId());
		  users.add(user);
	  };
	  
	  entity.setMembers(users);
	  
      em.persist(entity);
      
      ProjectDto dto2 = new ProjectDto();
      dto2.setId(entity.getId());
      
      return Response.ok(dto2).build();
   }

   @DELETE
   @Path("/{id:[0-9][0-9]*}")
   public Response deleteById(@PathParam("id") Long id)
   {
      Project entity = em.find(Project.class, id);
      if (entity == null)
      {
         return Response.status(Status.NOT_FOUND).build();
      }
      em.remove(entity);
      return Response.noContent().build();
   }

   @GET
   @Path("/{id:[0-9][0-9]*}")
   @Produces("application/json")
   public Response findById(@PathParam("id") Long id)
   {
      TypedQuery<Project> findByIdQuery = em.createQuery("SELECT DISTINCT p FROM Project p LEFT JOIN FETCH p.metaproject LEFT JOIN FETCH p.members WHERE p.id = :entityId ORDER BY p.id", Project.class);
      findByIdQuery.setParameter("entityId", id);
      Project entity;
      try
      {
         entity = findByIdQuery.getSingleResult();
      }
      catch (NoResultException nre)
      {
         entity = null;
      }
      if (entity == null)
      {
         return Response.status(Status.NOT_FOUND).build();
      }
      
      ProjectDto dto = new ProjectDto();
      dto.setId(entity.getId());
      dto.setTitle(entity.getTitle());
      dto.setDescription(entity.getDescription());
      dto.setMetaprojectid(entity.getMetaproject().getId());
      dto.setMetaprojectname(entity.getMetaproject().getTitle());
      Collection <UserDto> userDtos = new HashSet<UserDto>();
      for(User user : entity.getMembers()){
    	  UserDto userDto = new UserDto();
    	  userDto.setId(user.getId());
    	  userDto.setName(user.getUserName());
    	  userDtos.add(userDto);
      }
      dto.setMembers(userDtos);

      return Response.ok(dto).build();
   }

   @GET
   @Produces("application/json")
   public Response listAll(@PathParam("mid") Long mid, @QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
	   TypedQuery<Project> findAllQuery = em.createQuery("SELECT DISTINCT p FROM Project p LEFT JOIN FETCH p.metaproject mp JOIN p.members m WHERE mp.id=:mid", Project.class).setParameter("mid", mid);
      
	   if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<Project> results = findAllQuery.getResultList();
      Collection<ProjectDto> dtos = new HashSet<ProjectDto>();
      for(Project project:results){
    	  ProjectDto dto = new ProjectDto();
    	  dto.setId(project.getId());
    	  dto.setTitle(project.getTitle());
    	  dto.setDescription(project.getDescription());
    	  dto.setMetaprojectid(project.getMetaproject().getId());
    	  dto.setMetaprojectname(project.getMetaproject().getTitle());
    	  
    	  Collection<UserDto>members = new HashSet<UserDto>();
    	  for(User user : project.getMembers()){
    		  UserDto userDto = new UserDto();
    		  userDto.setId(user.getId());
    		  userDto.setName(user.getUserName());
    		  members.add(userDto);
    	  }
    	  dto.setMembers(members);
    	  dtos.add(dto);
      }
      return Response.ok(dtos).build();
   }

   @PUT
   @Path("/{id:[0-9][0-9]*}")
   @Consumes("application/json")
   public Response update(@PathParam("id") Long id, ProjectDto dto)
   {
      if (dto == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(dto.getId()))
      {
         return Response.status(Status.CONFLICT).entity(dto).build();
      }
      if (em.find(Project.class, id) == null)
      {
         return Response.status(Status.NOT_FOUND).build();
      }
      try
      {
    	  
    	  Project entity = new Project();
    	  entity.setId(dto.getId());
    	  entity.setTitle(dto.getTitle());
    	  entity.setDescription(dto.getDescription());
    	 
    	  Collection <User> users = new HashSet<User>();
    	  for(UserDto userDto : dto.getMembers()){
    		  User user = em.find(User.class, userDto.getId());
    		  users.add(user);
    	  };
    	  
    	  MetaProject metaproject = em.find(MetaProject.class, dto.getMetaprojectid());
    	  
    	  entity.setMetaproject(metaproject);

    	  entity.setMembers(users);

         entity = em.merge(entity);
      }
      catch (OptimisticLockException e)
      {
         return Response.status(Response.Status.CONFLICT).entity(e.getEntity()).build();
      }

      return Response.noContent().build();
   }
}
