package org.jboss.tools.xMetaProject.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;



import java.util.HashSet;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import org.jboss.tools.xMetaProject.model.MetaProject;
import org.jboss.tools.xMetaProject.model.Project;

import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class User implements Serializable
{
   /** Default value included to remove warning. Remove or modify at will. **/
   private static final long serialVersionUID = 1L;

   @Id
   @GeneratedValue
   private Long id;

   @NotNull
   private String name;

   @NotNull
   private String password;

   @OneToMany(mappedBy="leader", cascade=CascadeType.ALL)
   private Collection<MetaProject> metaProjects = new HashSet<MetaProject>();
   
   @ManyToMany(mappedBy="members", cascade=CascadeType.ALL)
   private Collection<Project> projects = new HashSet<Project>();

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUserName() {
		return name;
	}
	
	public void setUserName(String userName) {
		this.name = userName;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Collection<MetaProject> getMetaProjects() {
		return metaProjects;
	}
	
	public void setMetaProjects(Collection<MetaProject> metaProjects) {
		this.metaProjects = metaProjects;
	}
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

   
   
}
