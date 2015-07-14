package org.jboss.tools.xMetaProject.dummy;

import java.util.Collection;
import java.util.HashSet;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.jboss.tools.xMetaProject.model.MetaProject;
import org.jboss.tools.xMetaProject.model.Project;
import org.jboss.tools.xMetaProject.model.User;

@Startup
@Singleton
public class Dummy {
	
    @PersistenceContext(unitName = "xMetaProject---javaee_backend-persistence-unit")
    private EntityManager em;
	
    @PostConstruct
	public void init(){

		User user1 = new User(); 
		User user2 = new User();
		User user3 = new User();
		User user4 = new User();

		user1.setPassword("password"); user1.setUserName("uwe");  user1.setMetaProjects(new HashSet<MetaProject>()); 
		user2.setPassword("password"); user2.setUserName("anna"); user2.setMetaProjects(new HashSet<MetaProject>()); 
		user3.setPassword("password"); user3.setUserName("regina"); user3.setMetaProjects(new HashSet<MetaProject>()); 
		user4.setPassword("password"); user4.setUserName("alem");  user4.setMetaProjects(new HashSet<MetaProject>()); 
		
		MetaProject metaproject1 = new MetaProject();
		MetaProject metaproject2 = new MetaProject();
		MetaProject metaproject3 = new MetaProject();
		MetaProject metaproject4 = new MetaProject();
		
		metaproject1.setTitle("Programming"); metaproject1.setCourseOfStudies("ain"); metaproject1.setSemester("3"); metaproject1.setLeader(user1); metaproject1.setProjects(new HashSet<Project>());
		metaproject2.setTitle("Simulation"); metaproject2.setCourseOfStudies("ain"); metaproject2.setSemester("2"); metaproject2.setLeader(user2); metaproject2.setProjects(new HashSet<Project>());
		metaproject3.setTitle("Operation Research"); metaproject3.setCourseOfStudies("win"); metaproject3.setSemester("1"); metaproject3.setLeader(user3); metaproject3.setProjects(new HashSet<Project>());
		metaproject4.setTitle("Controlling"); metaproject4.setCourseOfStudies("win"); metaproject4.setSemester("5"); metaproject4.setLeader(user4); metaproject4.setProjects(new HashSet<Project>());
		
		Project project1 = new Project(); Project project2 = new Project();
		Project project3 = new Project(); Project project4 = new Project();
		Project project5 = new Project(); Project project6 = new Project();
		Project project7 = new Project(); Project project8 = new Project();
	
		Collection <User> members1 = new HashSet <User>();
		members1.add(user1); members1.add(user2);
		Collection <User> members2 = new HashSet <User>();
		members2.add(user2); members2.add(user3);
		Collection <User> members3 = new HashSet <User>();
		members3.add(user1); members3.add(user4);
		Collection <User> members4 = new HashSet <User>();
		members4.add(user2); members4.add(user3);
		
		Collection <User> members5 = new HashSet <User>();
		members1.add(user1); members5.add(user2);
		Collection <User> members6 = new HashSet <User>();
		members2.add(user2); members6.add(user3);
		Collection <User> members7 = new HashSet <User>();
		members3.add(user1); members7.add(user4);
		Collection <User> members8 = new HashSet <User>();
		members4.add(user2); members8.add(user3);
		
		project1.setTitle("P1 - Java EE Workshop"); project1.setDescription("This Project is an Example"); project1.setMetaproject(metaproject1); project1.setMembers(members1);
		project2.setTitle("P2 - AngularJS Workshop"); project2.setDescription("This Project is an Example"); project2.setMetaproject(metaproject1); project2.setMembers(members2);
		project3.setTitle("P3 - Continious Simulation"); project3.setDescription("This Project is an Example"); project3.setMetaproject(metaproject2); project3.setMembers(members3);
		project4.setTitle("P4 - Discrete Simulation"); project4.setDescription("This Project is an Example"); project4.setMetaproject(metaproject2); project4.setMembers(members4);
		project5.setTitle("P5 - Simplex Workshop"); project5.setDescription("This Project is an Example"); project5.setMetaproject(metaproject3); project5.setMembers(members5);
		project6.setTitle("P6 - Nonlinear Optimization"); project6.setDescription("This Project is an Example"); project6.setMetaproject(metaproject3); project6.setMembers(members6);
		project7.setTitle("P7 - Workshop Budgeting"); project7.setDescription("This Project is an Example"); project7.setMetaproject(metaproject4); project7.setMembers(members7);
		project8.setTitle("P8 - Workshop Project Management"); project8.setDescription("This Project is an Example"); project8.setMetaproject(metaproject4); project8.setMembers(members8);
		
		
		em.persist(user1); em.persist(user2); em.persist(user3); em.persist(user4); 
		em.persist(metaproject1); em.persist(metaproject2); em.persist(metaproject3); em.persist(metaproject4);
		em.persist(project1); em.persist(project2);	em.persist(project3);em.persist(project4); em.persist(project5);em.persist(project6);em.persist(project7);em.persist(project8);
		em.flush();
	
	};
};
