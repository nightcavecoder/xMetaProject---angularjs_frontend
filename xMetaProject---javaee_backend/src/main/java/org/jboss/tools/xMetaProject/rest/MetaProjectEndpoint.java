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

import org.jboss.tools.xMetaProject.dto.MetaProjectDto;
import org.jboss.tools.xMetaProject.dto.UserDto;
import org.jboss.tools.xMetaProject.model.MetaProject;
import org.jboss.tools.xMetaProject.model.User;

import com.sun.corba.se.impl.encoding.OSFCodeSetRegistry.Entry;

/**
 * 
 */
@Stateless
@Path("/metaprojects")
public class MetaProjectEndpoint
{
   @PersistenceContext(unitName = "xMetaProject---javaee_backend-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(MetaProjectDto dto)
   {
	   System.out.println("---------------");
	   System.out.println(dto.getTitle());
	   System.out.println(dto.getCourseOfStudies());
	   System.out.println(dto.getSemester());
	   System.out.println(dto.getSemester());
	   System.out.println(dto.getLeader());
	   System.out.println("---------------");
	   
	   MetaProject entity = new MetaProject();
//	   entity.setId(2222l);
	   entity.setTitle(dto.getTitle());
	   entity.setCourseOfStudies(dto.getCourseOfStudies());
	   entity.setSemester(dto.getSemester());
	   
	   User user = new User();
	   user = em.find(User.class, dto.getLeader().getId());
	   
	   entity.setLeader(user);
//	   entity.setProjects(null);
//	   entity.setLeader(user);
	   
      em.persist(entity);
      em.flush();
//      return Response.created(UriBuilder.fromResource(MetaProjectEndpoint.class).path(String.valueOf(entity.getId())).build()).build();
      
      MetaProjectDto dto2 = new MetaProjectDto();
      dto2.setId(entity.getId());
      return Response.ok(dto2).build();
   }

   @DELETE
   @Path("/{id:[0-9][0-9]*}")
   public Response deleteById(@PathParam("id") Long id)
   {
      MetaProject entity = em.find(MetaProject.class, id);
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
      TypedQuery<MetaProject> findByIdQuery = em.createQuery("SELECT DISTINCT m FROM MetaProject m LEFT JOIN FETCH m.leader LEFT JOIN FETCH m.projects WHERE m.id = :entityId ORDER BY m.id", MetaProject.class);
      findByIdQuery.setParameter("entityId", id);
      MetaProject entity;
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
      MetaProjectDto dto = new MetaProjectDto();
      dto.setId(entity.getId());
      dto.setTitle(entity.getTitle());
      dto.setCourseOfStudies(entity.getCourseOfStudies());
      dto.setSemester(entity.getSemester());
      
      UserDto userDto = new UserDto();
      userDto.setId(entity.getLeader().getId());
      userDto.setName(entity.getLeader().getUserName());
    
      dto.setLeader(userDto);
      
      
      return Response.ok(dto).build();
   }

   @GET
   @Produces("application/json")
   public Response listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<MetaProject> findAllQuery = em.createQuery("SELECT DISTINCT m FROM MetaProject m LEFT JOIN FETCH m.leader LEFT JOIN FETCH m.projects ORDER BY m.id", MetaProject.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<MetaProject> results = findAllQuery.getResultList();
      Collection<MetaProjectDto> dtos = new HashSet<MetaProjectDto>();
      for(MetaProject metaProject:results){
    	  MetaProjectDto dto = new MetaProjectDto();
    	  dto.setId(metaProject.getId());
    	  dto.setTitle(metaProject.getTitle());
    	  dto.setCourseOfStudies(metaProject.getCourseOfStudies());
    	  dto.setSemester(metaProject.getSemester());
    	  
          UserDto userDto = new UserDto();
          userDto.setId(metaProject.getLeader().getId());
          userDto.setName(metaProject.getLeader().getUserName());
        
          dto.setLeader(userDto);
    	  
//    	  dto.setLeaderid(metaProject.getLeader().getId());
//    	  dto.setLeader(metaProject.getLeader().getUserName());
    	  dtos.add(dto);
      }
      return Response.ok(dtos).build();
   }

   @PUT
   @Path("/{id:[0-9][0-9]*}")
   @Consumes("application/json")
   public Response update(@PathParam("id") Long id, MetaProjectDto dto)
   {
	 
	  System.out.println(id);
      if (dto == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(dto.getId()))
      {
         return Response.status(Status.CONFLICT).entity(dto).build();
      }
      if (em.find(MetaProject.class, dto.getId()) == null)
      {
         return Response.status(Status.NOT_FOUND).build();
      }
      try
      {
    	 
    	  MetaProject entity = new MetaProject();
    	  entity.setId(dto.getId());
    	  entity.setTitle(dto.getTitle());
    	  entity.setCourseOfStudies(dto.getCourseOfStudies());
    	  entity.setSemester(dto.getSemester());
    	  
    	  User user = em.find(User.class, dto.getLeader().getId());

    	  entity.setLeader(user);
    	  entity = em.merge(entity);
      }
      catch (OptimisticLockException e)
      {
         return Response.status(Response.Status.CONFLICT).entity(e.getEntity()).build();
      }

      return Response.noContent().build();
   }
}
