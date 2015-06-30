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
import org.jboss.tools.xMetaProject.model.Project;
import org.jboss.tools.xMetaProject.model.User;

/**
 * 
 */
@Stateless
@Path("/projects")
public class ProjectEndpoint
{
   @PersistenceContext(unitName = "xMetaProject---javaee_backend-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(Project entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(ProjectEndpoint.class).path(String.valueOf(entity.getId())).build()).build();
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
      return Response.ok(entity).build();
   }

   @GET
   @Produces("application/json")
   public Response listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
	   TypedQuery<Project> findAllQuery = em.createQuery("SELECT DISTINCT p FROM Project p LEFT JOIN FETCH p.metaproject JOIN p.members m", Project.class);
      
	   
	   
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
   public Response update(@PathParam("id") Long id, Project entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(Project.class, id) == null)
      {
         return Response.status(Status.NOT_FOUND).build();
      }
      try
      {
         entity = em.merge(entity);
      }
      catch (OptimisticLockException e)
      {
         return Response.status(Response.Status.CONFLICT).entity(e.getEntity()).build();
      }

      return Response.noContent().build();
   }
}
