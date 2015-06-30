package org.jboss.tools.xMetaProject.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import org.jboss.tools.xMetaProject.model.User;

import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Project implements Serializable
{
   /** Default value included to remove warning. Remove or modify at will. **/
   private static final long serialVersionUID = 1L;

   @Id
   @GeneratedValue
   private Long id;

   @NotNull
   private String title;

   private String description;
   
   @ManyToOne(optional = false)
   @JoinColumn(name="metaproject", referencedColumnName="id")
   private MetaProject metaproject;
   
   public MetaProject getMetaproject() {
	return metaproject;
}

public void setMetaproject(MetaProject metaproject) {
	this.metaproject = metaproject;
}

public Collection<User> getMembers() {
	return members;
}

public void setMembers(Collection<User> members) {
	this.members = members;
}

@ManyToMany()
   private Collection<User> members = new HashSet<User>();

   public Long getId()
   {
      return id;
   }

   public String getTitle()
   {
      return title;
   }

   public void setTitle(String title)
   {
      this.title = title;
   }
   
   public static long getSerialversionuid()
   {
      return serialVersionUID;
   }

   public void setId(Long id)
   {
      this.id = id;
   }

	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}

}
