package org.jboss.tools.xMetaProject.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import org.jboss.tools.xMetaProject.model.MetaProject;

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
   private String userName;

   @NotNull
   private String password;

   @OneToMany
   private Collection<MetaProject> metaProject = new ArrayList<MetaProject>();

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Collection<MetaProject> getMetaProject() {
		return metaProject;
	}
	
	public void setMetaProject(Collection<MetaProject> metaProject) {
		this.metaProject = metaProject;
	}
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

   
   
}